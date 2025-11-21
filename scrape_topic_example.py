#!/usr/bin/env python3
"""
Simple example: Scrape Khan Academy by topic name.
Just provide a topic and it will automatically search and scrape!
"""

from scraper import KhanAcademyScraper
import json

# Initialize the scraper
scraper = KhanAcademyScraper(delay=1.0)

# Example: Just give it a topic name!
topic = "algebra"

print(f"🎯 Scraping Khan Academy for: '{topic}'")
print("=" * 60)

# This one method does everything:
# 1. Searches Khan Academy for the topic
# 2. Scrapes the top 3 matching pages
# 3. Combines all content into one result
result = scraper.scrape_by_topic(topic, max_pages=3)

if 'error' not in result:
    print("\n✅ Successfully scraped!")
    print(f"\nTopic: {result['topic']}")
    print(f"Pages scraped: {result['pages_scraped']}")
    print(f"\nSources:")
    for source in result['sources']:
        print(f"  • {source['title']}")
        print(f"    {source['url']}")
    
    print(f"\n📊 Content Summary:")
    print(f"  Content sections: {len(result['content'])}")
    print(f"  Key concepts: {len(result['key_concepts'])}")
    print(f"  Practice questions: {len(result['practice_questions'])}")
    print(f"  Videos: {len(result['videos'])}")
    
    # Show some key concepts
    if result['key_concepts']:
        print(f"\n🔑 Key Concepts Found:")
        for concept in result['key_concepts'][:10]:
            print(f"  • {concept}")
    
    # Show some practice questions
    if result['practice_questions']:
        print(f"\n❓ Practice Questions Found:")
        for i, q in enumerate(result['practice_questions'][:3], 1):
            print(f"\n  Question {i}:")
            print(f"    {q.get('question', 'N/A')}")
            if q.get('options'):
                print(f"    Options: {', '.join(q['options'][:3])}...")
            if q.get('answer'):
                print(f"    Answer: {q['answer']}")
    
    # Save to file
    output_file = f"{topic}_scraped.json"
    with open(output_file, 'w') as f:
        json.dump(result, f, indent=2)
    print(f"\n💾 Full results saved to: {output_file}")
    
else:
    print(f"\n❌ Error: {result.get('error')}")

print("\n" + "=" * 60)
print("Try with different topics:")
print("  python scrape_topic_example.py")
print("  (Edit the 'topic' variable in this file)")

