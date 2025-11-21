#!/usr/bin/env python3
"""
Example usage of the Khan Academy scraper.
Demonstrates common use cases and integration patterns.
"""

from scraper import KhanAcademyScraper
import json


def example_scrape_single_page():
    """Example: Scrape a single Khan Academy page."""
    print("=" * 60)
    print("Example 1: Scraping a Single Page")
    print("=" * 60)
    
    scraper = KhanAcademyScraper(delay=1.0)
    
    # Example URL - replace with actual Khan Academy URL
    url = "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra"
    
    result = scraper.scrape_study_guide(url)
    
    if 'error' not in result:
        print(f"\n✓ Successfully scraped: {result['title']}")
        print(f"  Content sections: {len(result['content'])}")
        print(f"  Key concepts: {len(result['key_concepts'])}")
        print(f"  Practice questions: {len(result['practice_questions'])}")
        print(f"  Videos: {len(result['videos'])}")
        
        # Show first few key concepts
        if result['key_concepts']:
            print("\n  Key Concepts:")
            for concept in result['key_concepts'][:5]:
                print(f"    - {concept}")
    else:
        print(f"\n✗ Error: {result.get('error')}")


def example_search_topics():
    """Example: Search for topics."""
    print("\n" + "=" * 60)
    print("Example 2: Searching for Topics")
    print("=" * 60)
    
    scraper = KhanAcademyScraper()
    
    query = "linear equations"
    print(f"\nSearching for: '{query}'")
    
    results = scraper.search_topics(query, max_results=5)
    
    if results:
        print(f"\n✓ Found {len(results)} results:\n")
        for i, topic in enumerate(results, 1):
            print(f"{i}. {topic['title']}")
            print(f"   {topic['url']}\n")
    else:
        print("\n✗ No results found")


def example_scrape_multiple():
    """Example: Scrape multiple URLs."""
    print("\n" + "=" * 60)
    print("Example 3: Scraping Multiple Pages")
    print("=" * 60)
    
    scraper = KhanAcademyScraper()
    
    # Example URLs - replace with actual Khan Academy URLs
    urls = [
        "https://www.khanacademy.org/math/algebra",
        "https://www.khanacademy.org/math/geometry"
    ]
    
    print(f"\nScraping {len(urls)} pages...")
    results = scraper.scrape_multiple(urls)
    
    for i, result in enumerate(results, 1):
        if 'error' not in result:
            print(f"\n{i}. {result['title']}")
            print(f"   Content: {len(result['content'])} sections")
        else:
            print(f"\n{i}. Error: {result.get('error')}")


def example_extract_questions():
    """Example: Extract and format practice questions."""
    print("\n" + "=" * 60)
    print("Example 4: Extracting Practice Questions")
    print("=" * 60)
    
    scraper = KhanAcademyScraper()
    
    url = "https://www.khanacademy.org/math/algebra"
    result = scraper.scrape_study_guide(url)
    
    questions = result.get('practice_questions', [])
    
    if questions:
        print(f"\n✓ Found {len(questions)} practice questions\n")
        for i, q in enumerate(questions[:3], 1):  # Show first 3
            print(f"Question {i}:")
            print(f"  {q['question']}")
            if q['options']:
                print("  Options:")
                for opt in q['options']:
                    print(f"    - {opt}")
            if q['answer']:
                print(f"  Answer: {q['answer']}")
            if q['explanation']:
                print(f"  Explanation: {q['explanation']}")
            print()
    else:
        print("\n✗ No practice questions found")


def example_save_to_json():
    """Example: Save scraped data to JSON file."""
    print("\n" + "=" * 60)
    print("Example 5: Saving to JSON")
    print("=" * 60)
    
    scraper = KhanAcademyScraper()
    
    url = "https://www.khanacademy.org/math/algebra"
    result = scraper.scrape_study_guide(url)
    
    output_file = "scraped_data.json"
    
    with open(output_file, 'w') as f:
        json.dump(result, f, indent=2)
    
    print(f"\n✓ Data saved to {output_file}")
    print(f"  File size: {len(json.dumps(result))} bytes")


def example_integration_format():
    """Example: Format data for integration with Study Guide Generator."""
    print("\n" + "=" * 60)
    print("Example 6: Formatting for Study Guide Generator")
    print("=" * 60)
    
    scraper = KhanAcademyScraper()
    
    url = "https://www.khanacademy.org/math/algebra"
    result = scraper.scrape_study_guide(url)
    
    # Format for Study Guide Generator
    formatted_data = {
        'subject': result['title'],
        'topics': result['key_concepts'],
        'content': [],
        'questions': []
    }
    
    # Extract content paragraphs
    for item in result['content']:
        if item['type'] == 'paragraph':
            formatted_data['content'].append(item['text'])
        elif item['type'] == 'heading':
            formatted_data['content'].append(f"\n{item['text']}\n")
    
    # Format questions
    for q in result['practice_questions']:
        formatted_data['questions'].append({
            'question': q['question'],
            'type': 'multiple-choice',
            'options': q['options'],
            'correctAnswer': 0,  # You'd need to determine this
            'explanation': q['explanation'] or 'No explanation available'
        })
    
    print(f"\n✓ Formatted data:")
    print(f"  Subject: {formatted_data['subject']}")
    print(f"  Topics: {len(formatted_data['topics'])}")
    print(f"  Content sections: {len(formatted_data['content'])}")
    print(f"  Questions: {len(formatted_data['questions'])}")
    
    # Save formatted data
    with open('formatted_for_app.json', 'w') as f:
        json.dump(formatted_data, f, indent=2)
    
    print(f"\n✓ Formatted data saved to formatted_for_app.json")


if __name__ == '__main__':
    print("\n" + "=" * 60)
    print("Khan Academy Scraper - Example Usage")
    print("=" * 60)
    
    # Run examples (comment out ones you don't want to run)
    try:
        example_scrape_single_page()
    except Exception as e:
        print(f"\nExample 1 failed: {e}")
    
    try:
        example_search_topics()
    except Exception as e:
        print(f"\nExample 2 failed: {e}")
    
    try:
        example_extract_questions()
    except Exception as e:
        print(f"\nExample 4 failed: {e}")
    
    try:
        example_save_to_json()
    except Exception as e:
        print(f"\nExample 5 failed: {e}")
    
    try:
        example_integration_format()
    except Exception as e:
        print(f"\nExample 6 failed: {e}")
    
    print("\n" + "=" * 60)
    print("Examples completed!")
    print("=" * 60)

