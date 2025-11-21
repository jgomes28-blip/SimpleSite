#!/usr/bin/env python3
"""
Web Scraper for Khan Academy Study Guides
Extracts content, questions, explanations, and key concepts from Khan Academy pages.
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
from urllib.parse import urljoin, urlparse
from typing import Dict, List, Optional
import argparse


class KhanAcademyScraper:
    """Scraper for Khan Academy study guides and content."""
    
    def __init__(self, delay: float = 1.0):
        """
        Initialize the scraper.
        
        Args:
            delay: Delay between requests in seconds (to be respectful)
        """
        self.delay = delay
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.base_url = "https://www.khanacademy.org"
    
    def scrape_study_guide(self, url: str) -> Dict:
        """
        Scrape a Khan Academy study guide page.
        
        Args:
            url: URL of the Khan Academy page to scrape
            
        Returns:
            Dictionary containing scraped content
        """
        try:
            # Ensure URL is complete
            if not url.startswith('http'):
                url = urljoin(self.base_url, url)
            
            print(f"Fetching: {url}")
            response = self.session.get(url, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract content
            result = {
                'url': url,
                'title': self._extract_title(soup),
                'content': self._extract_content(soup),
                'key_concepts': self._extract_key_concepts(soup),
                'practice_questions': self._extract_practice_questions(soup),
                'videos': self._extract_videos(soup),
                'related_topics': self._extract_related_topics(soup),
                'scraped_at': time.strftime('%Y-%m-%d %H:%M:%S')
            }
            
            time.sleep(self.delay)  # Be respectful
            return result
            
        except requests.RequestException as e:
            print(f"Error fetching {url}: {e}")
            return {'error': str(e), 'url': url}
    
    def _extract_title(self, soup: BeautifulSoup) -> str:
        """Extract the page title."""
        # Try multiple selectors for title
        title_selectors = [
            'h1',
            '[data-testid="article-title"]',
            '.article-title',
            'title'
        ]
        
        for selector in title_selectors:
            element = soup.select_one(selector)
            if element:
                title = element.get_text(strip=True)
                if title and title != 'Khan Academy':
                    return title
        
        return "Untitled"
    
    def _extract_content(self, soup: BeautifulSoup) -> List[Dict]:
        """Extract main content sections."""
        content = []
        
        # Look for article content
        article_selectors = [
            'article',
            '[data-testid="article-content"]',
            '.article-content',
            '.perseus-renderer',
            '.exercise-content'
        ]
        
        for selector in article_selectors:
            elements = soup.select(selector)
            if elements:
                for elem in elements:
                    # Extract paragraphs
                    paragraphs = elem.find_all(['p', 'div'], class_=lambda x: x and ('paragraph' in x.lower() or 'content' in x.lower()))
                    if not paragraphs:
                        paragraphs = elem.find_all('p')
                    
                    for p in paragraphs:
                        text = p.get_text(strip=True)
                        if text and len(text) > 20:  # Filter out very short text
                            content.append({
                                'type': 'paragraph',
                                'text': text
                            })
                    
                    # Extract lists
                    lists = elem.find_all(['ul', 'ol'])
                    for lst in lists:
                        items = [li.get_text(strip=True) for li in lst.find_all('li')]
                        if items:
                            content.append({
                                'type': 'list',
                                'items': items
                            })
                    
                    # Extract headings
                    headings = elem.find_all(['h2', 'h3', 'h4'])
                    for heading in headings:
                        text = heading.get_text(strip=True)
                        if text:
                            content.append({
                                'type': 'heading',
                                'level': heading.name,
                                'text': text
                            })
                
                if content:
                    break
        
        return content
    
    def _extract_key_concepts(self, soup: BeautifulSoup) -> List[str]:
        """Extract key concepts or learning objectives."""
        concepts = []
        
        # Look for concept lists, key takeaways, etc.
        concept_selectors = [
            '[data-testid="key-concepts"]',
            '.key-concepts',
            '.learning-objectives',
            '.takeaways'
        ]
        
        for selector in concept_selectors:
            elements = soup.select(selector)
            for elem in elements:
                items = elem.find_all('li')
                concepts.extend([li.get_text(strip=True) for li in items if li.get_text(strip=True)])
        
        # Also look for bolded terms that might be key concepts
        bold_terms = soup.find_all(['strong', 'b'])
        for term in bold_terms:
            text = term.get_text(strip=True)
            if text and len(text) < 50 and text not in concepts:
                concepts.append(text)
        
        return concepts[:10]  # Limit to top 10
    
    def _extract_practice_questions(self, soup: BeautifulSoup) -> List[Dict]:
        """Extract practice questions if available."""
        questions = []
        
        # Look for question containers
        question_selectors = [
            '[data-testid="question"]',
            '.question',
            '.exercise-question',
            '.practice-question'
        ]
        
        for selector in question_selectors:
            elements = soup.select(selector)
            for elem in elements:
                question_text = None
                options = []
                answer = None
                explanation = None
                
                # Extract question text
                question_elem = elem.find(['p', 'div'], class_=lambda x: x and 'question' in str(x).lower())
                if not question_elem:
                    question_elem = elem.find('p')
                
                if question_elem:
                    question_text = question_elem.get_text(strip=True)
                
                # Extract options (multiple choice)
                option_elems = elem.find_all(['li', 'div'], class_=lambda x: x and ('option' in str(x).lower() or 'choice' in str(x).lower()))
                for opt in option_elems:
                    opt_text = opt.get_text(strip=True)
                    if opt_text:
                        options.append(opt_text)
                
                # Extract answer
                answer_elem = elem.find(['div', 'span'], class_=lambda x: x and 'answer' in str(x).lower())
                if answer_elem:
                    answer = answer_elem.get_text(strip=True)
                
                # Extract explanation
                explanation_elem = elem.find(['div', 'p'], class_=lambda x: x and 'explanation' in str(x).lower())
                if explanation_elem:
                    explanation = explanation_elem.get_text(strip=True)
                
                if question_text:
                    questions.append({
                        'question': question_text,
                        'options': options,
                        'answer': answer,
                        'explanation': explanation
                    })
        
        return questions
    
    def _extract_videos(self, soup: BeautifulSoup) -> List[Dict]:
        """Extract video links and information."""
        videos = []
        
        # Look for video elements
        video_selectors = [
            'iframe[src*="youtube"]',
            'iframe[src*="khan"]',
            'video',
            '[data-testid="video"]'
        ]
        
        for selector in video_selectors:
            elements = soup.select(selector)
            for elem in elements:
                src = elem.get('src', '')
                title = elem.get('title', '')
                if not title:
                    title = elem.get('alt', '')
                
                if src:
                    videos.append({
                        'title': title or 'Video',
                        'url': src if src.startswith('http') else urljoin(self.base_url, src)
                    })
        
        return videos
    
    def _extract_related_topics(self, soup: BeautifulSoup) -> List[Dict]:
        """Extract related topics or links."""
        related = []
        
        # Look for related links
        link_selectors = [
            'a[href*="/"]',
            '.related-topics a',
            '.next-topic a'
        ]
        
        seen_urls = set()
        for selector in link_selectors:
            elements = soup.select(selector)
            for elem in elements:
                href = elem.get('href', '')
                text = elem.get_text(strip=True)
                
                if href and text and href not in seen_urls:
                    # Filter for Khan Academy internal links
                    if '/math/' in href or '/science/' in href or '/humanities/' in href or '/computing/' in href:
                        full_url = urljoin(self.base_url, href)
                        related.append({
                            'title': text,
                            'url': full_url
                        })
                        seen_urls.add(href)
                        if len(related) >= 10:
                            break
            
            if len(related) >= 10:
                break
        
        return related
    
    def search_topics(self, query: str, max_results: int = 10) -> List[Dict]:
        """
        Search for Khan Academy topics.
        
        Args:
            query: Search query
            max_results: Maximum number of results to return
            
        Returns:
            List of topic dictionaries with title and URL
        """
        try:
            search_url = f"{self.base_url}/search"
            params = {'page_search_query': query}
            
            response = self.session.get(search_url, params=params, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            results = []
            # Look for search result links
            result_links = soup.select('a[href*="/"]')
            
            seen_urls = set()
            for link in result_links:
                href = link.get('href', '')
                text = link.get_text(strip=True)
                
                if href and text and href not in seen_urls:
                    # Filter for valid Khan Academy content pages
                    if any(x in href for x in ['/math/', '/science/', '/humanities/', '/computing/', '/test-prep/']):
                        full_url = urljoin(self.base_url, href)
                        results.append({
                            'title': text,
                            'url': full_url
                        })
                        seen_urls.add(href)
                        
                        if len(results) >= max_results:
                            break
            
            time.sleep(self.delay)
            return results
            
        except requests.RequestException as e:
            print(f"Error searching: {e}")
            return []
    
    def scrape_multiple(self, urls: List[str]) -> List[Dict]:
        """
        Scrape multiple URLs.
        
        Args:
            urls: List of URLs to scrape
            
        Returns:
            List of scraped content dictionaries
        """
        results = []
        for url in urls:
            result = self.scrape_study_guide(url)
            results.append(result)
        return results
    
    def scrape_by_topic(self, topic: str, max_pages: int = 3, max_results: int = 10) -> Dict:
        """
        Search for a topic and automatically scrape the top results.
        
        This is the main convenience method - just give it a topic name and it will:
        1. Search Khan Academy for that topic
        2. Scrape the top matching pages
        3. Combine all content into a single comprehensive result
        
        Args:
            topic: Topic name (e.g., "algebra", "photosynthesis", "world war 2")
            max_pages: Maximum number of pages to scrape (default: 3)
            max_results: Maximum number of search results to consider (default: 10)
            
        Returns:
            Dictionary containing combined scraped content from all pages
        """
        print(f"🔍 Searching Khan Academy for: '{topic}'")
        
        # Step 1: Search for the topic
        search_results = self.search_topics(topic, max_results=max_results)
        
        if not search_results:
            return {
                'topic': topic,
                'error': f'No results found for topic: {topic}',
                'suggestions': 'Try a different search term or check spelling'
            }
        
        print(f"✓ Found {len(search_results)} results")
        print(f"📚 Scraping top {min(max_pages, len(search_results))} pages...\n")
        
        # Step 2: Scrape the top results
        urls_to_scrape = [result['url'] for result in search_results[:max_pages]]
        scraped_pages = []
        
        for i, url in enumerate(urls_to_scrape, 1):
            print(f"[{i}/{len(urls_to_scrape)}] Scraping: {search_results[i-1]['title']}")
            result = self.scrape_study_guide(url)
            if 'error' not in result:
                scraped_pages.append(result)
            print()
        
        if not scraped_pages:
            return {
                'topic': topic,
                'error': 'Failed to scrape any pages',
                'search_results': search_results
            }
        
        # Step 3: Combine all content
        combined = {
            'topic': topic,
            'sources': [{'title': p['title'], 'url': p['url']} for p in scraped_pages],
            'title': f"{topic.title()} - Study Guide from Khan Academy",
            'content': [],
            'key_concepts': [],
            'practice_questions': [],
            'videos': [],
            'related_topics': [],
            'scraped_at': time.strftime('%Y-%m-%d %H:%M:%S'),
            'pages_scraped': len(scraped_pages)
        }
        
        # Aggregate content from all pages
        seen_concepts = set()
        seen_questions = set()
        seen_videos = set()
        
        for page in scraped_pages:
            # Combine content
            combined['content'].extend(page.get('content', []))
            
            # Combine key concepts (avoid duplicates)
            for concept in page.get('key_concepts', []):
                concept_lower = concept.lower().strip()
                if concept_lower and concept_lower not in seen_concepts:
                    combined['key_concepts'].append(concept)
                    seen_concepts.add(concept_lower)
            
            # Combine practice questions (avoid duplicates)
            for question in page.get('practice_questions', []):
                q_text = question.get('question', '').lower().strip()
                if q_text and q_text not in seen_questions:
                    combined['practice_questions'].append(question)
                    seen_questions.add(q_text)
            
            # Combine videos (avoid duplicates)
            for video in page.get('videos', []):
                video_url = video.get('url', '')
                if video_url and video_url not in seen_videos:
                    combined['videos'].append(video)
                    seen_videos.add(video_url)
            
            # Combine related topics
            combined['related_topics'].extend(page.get('related_topics', []))
        
        # Remove duplicate related topics
        seen_related = set()
        unique_related = []
        for topic in combined['related_topics']:
            topic_url = topic.get('url', '')
            if topic_url and topic_url not in seen_related:
                unique_related.append(topic)
                seen_related.add(topic_url)
        combined['related_topics'] = unique_related[:15]  # Limit to 15
        
        print(f"✓ Successfully scraped {len(scraped_pages)} pages")
        print(f"  Content sections: {len(combined['content'])}")
        print(f"  Key concepts: {len(combined['key_concepts'])}")
        print(f"  Practice questions: {len(combined['practice_questions'])}")
        print(f"  Videos: {len(combined['videos'])}")
        
        return combined


def main():
    """Command-line interface for the scraper."""
    parser = argparse.ArgumentParser(description='Scrape Khan Academy study guides')
    parser.add_argument('url', nargs='?', help='URL to scrape')
    parser.add_argument('--topic', '-t', help='Topic name - automatically search and scrape (e.g., "algebra", "photosynthesis")')
    parser.add_argument('--search', '-s', help='Search query (returns URLs only, use --topic to scrape)')
    parser.add_argument('--output', '-o', help='Output JSON file')
    parser.add_argument('--delay', '-d', type=float, default=1.0, help='Delay between requests (seconds)')
    parser.add_argument('--max-results', '-m', type=int, default=10, help='Max search results')
    parser.add_argument('--max-pages', '-p', type=int, default=3, help='Max pages to scrape when using --topic')
    
    args = parser.parse_args()
    
    scraper = KhanAcademyScraper(delay=args.delay)
    
    if args.topic:
        # New: Scrape by topic - search and scrape automatically
        print(f"🎯 Topic mode: '{args.topic}'")
        result = scraper.scrape_by_topic(args.topic, max_pages=args.max_pages, max_results=args.max_results)
        
        if 'error' not in result:
            print(f"\n✅ Success!")
            print(f"   Topic: {result['topic']}")
            print(f"   Pages scraped: {result['pages_scraped']}")
            print(f"   Content sections: {len(result['content'])}")
            print(f"   Key concepts: {len(result['key_concepts'])}")
            print(f"   Practice questions: {len(result['practice_questions'])}")
            print(f"   Videos: {len(result['videos'])}")
        else:
            print(f"\n❌ Error: {result.get('error')}")
            if 'suggestions' in result:
                print(f"   {result['suggestions']}")
        
        if args.output:
            with open(args.output, 'w') as f:
                json.dump(result, f, indent=2)
            print(f"\n💾 Results saved to {args.output}")
        elif 'error' not in result:
            print("\n" + "="*60)
            print("Sample of scraped content:")
            print("="*60)
            if result.get('key_concepts'):
                print("\nKey Concepts:")
                for concept in result['key_concepts'][:5]:
                    print(f"  • {concept}")
            if result.get('practice_questions'):
                print("\nPractice Questions:")
                for q in result['practice_questions'][:2]:
                    print(f"  Q: {q.get('question', 'N/A')}")
                    if q.get('answer'):
                        print(f"  A: {q['answer']}")
    
    elif args.search:
        print(f"Searching for: {args.search}")
        results = scraper.search_topics(args.search, max_results=args.max_results)
        
        if results:
            print(f"\nFound {len(results)} results:\n")
            for i, result in enumerate(results, 1):
                print(f"{i}. {result['title']}")
                print(f"   {result['url']}\n")
            
            if args.output:
                with open(args.output, 'w') as f:
                    json.dump(results, f, indent=2)
                print(f"Results saved to {args.output}")
        else:
            print("No results found.")
    
    elif args.url:
        print(f"Scraping: {args.url}")
        result = scraper.scrape_study_guide(args.url)
        
        if 'error' not in result:
            print(f"\nTitle: {result['title']}")
            print(f"Content sections: {len(result['content'])}")
            print(f"Key concepts: {len(result['key_concepts'])}")
            print(f"Practice questions: {len(result['practice_questions'])}")
            print(f"Videos: {len(result['videos'])}")
            print(f"Related topics: {len(result['related_topics'])}")
        
        if args.output:
            with open(args.output, 'w') as f:
                json.dump(result, f, indent=2)
            print(f"\nResults saved to {args.output}")
        else:
            print("\n" + json.dumps(result, indent=2))
    
    else:
        parser.print_help()
        print("\n" + "="*60)
        print("Examples:")
        print("="*60)
        print('  # Scrape by topic (recommended):')
        print('  python scraper.py --topic "algebra"')
        print('  python scraper.py --topic "photosynthesis" --output bio.json')
        print('  python scraper.py --topic "world war 2" --max-pages 5')
        print('\n  # Search only (no scraping):')
        print('  python scraper.py --search "calculus"')
        print('\n  # Scrape specific URL:')
        print('  python scraper.py "https://www.khanacademy.org/math/algebra"')


if __name__ == '__main__':
    main()

