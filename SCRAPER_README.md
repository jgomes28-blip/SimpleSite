# Khan Academy Web Scraper

A Python web scraper for extracting study guide content from Khan Academy. This scraper can extract articles, practice questions, key concepts, videos, and related topics from Khan Academy pages.

## Features

- 📚 **Scrape Study Guides**: Extract full content from Khan Academy pages
- 🔍 **Search Functionality**: Search for topics across Khan Academy
- ❓ **Practice Questions**: Extract questions, answers, and explanations
- 🎯 **Key Concepts**: Identify and extract key learning concepts
- 🎥 **Video Links**: Extract embedded video content
- 🔗 **Related Topics**: Find related study materials
- 💾 **JSON Export**: Save scraped data in structured JSON format
- ⏱️ **Rate Limiting**: Built-in delays to be respectful to servers

## Installation

1. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

Or install individually:
```bash
pip install requests beautifulsoup4 lxml
```

## Usage

### 🎯 Quick Start: Scrape by Topic (Recommended!)

**Just provide a topic name and the scraper will automatically search and scrape Khan Academy!**

```bash
# Scrape by topic - automatically searches and scrapes top results
python scraper.py --topic "algebra"

# Save to file
python scraper.py --topic "photosynthesis" --output bio.json

# Scrape more pages (default is 3)
python scraper.py --topic "world war 2" --max-pages 5
```

This is the easiest way to use the scraper - just give it a topic name!

### Command Line Interface

#### Scrape by topic (easiest method):
```bash
python scraper.py --topic "algebra"
python scraper.py --topic "photosynthesis" --output bio.json
python scraper.py --topic "calculus" --max-pages 5
```

#### Scrape a specific URL:
```bash
python scraper.py "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra"
```

#### Search for topics (URLs only, no scraping):
```bash
python scraper.py --search "algebra"
```

#### Save output to file:
```bash
python scraper.py "https://www.khanacademy.org/math/algebra" --output results.json
```

#### Search and save:
```bash
python scraper.py --search "calculus" --output search_results.json --max-results 20
```

#### Adjust request delay:
```bash
python scraper.py --topic "algebra" --delay 2.0
```

### Python API

#### 🎯 Scrape by Topic (Easiest Method):
```python
from scraper import KhanAcademyScraper

# Initialize scraper
scraper = KhanAcademyScraper(delay=1.0)

# Just provide a topic name - it will search and scrape automatically!
result = scraper.scrape_by_topic("algebra", max_pages=3)

print(f"Topic: {result['topic']}")
print(f"Pages scraped: {result['pages_scraped']}")
print(f"Key concepts: {result['key_concepts']}")
print(f"Practice questions: {len(result['practice_questions'])}")
```

#### Basic Usage:
```python
from scraper import KhanAcademyScraper

# Initialize scraper
scraper = KhanAcademyScraper(delay=1.0)

# Scrape a single page
result = scraper.scrape_study_guide("https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra")
print(result['title'])
print(result['content'])

# Search for topics
results = scraper.search_topics("linear equations", max_results=10)
for topic in results:
    print(f"{topic['title']}: {topic['url']}")

# Scrape multiple URLs
urls = [
    "https://www.khanacademy.org/math/algebra",
    "https://www.khanacademy.org/math/geometry"
]
results = scraper.scrape_multiple(urls)
```

## Output Format

The scraper returns a dictionary with the following structure:

```json
{
  "url": "https://www.khanacademy.org/...",
  "title": "Page Title",
  "content": [
    {
      "type": "paragraph",
      "text": "Content text..."
    },
    {
      "type": "heading",
      "level": "h2",
      "text": "Section Title"
    },
    {
      "type": "list",
      "items": ["Item 1", "Item 2"]
    }
  ],
  "key_concepts": [
    "Concept 1",
    "Concept 2"
  ],
  "practice_questions": [
    {
      "question": "What is...?",
      "options": ["Option A", "Option B", "Option C"],
      "answer": "Option A",
      "explanation": "Explanation text..."
    }
  ],
  "videos": [
    {
      "title": "Video Title",
      "url": "https://..."
    }
  ],
  "related_topics": [
    {
      "title": "Related Topic",
      "url": "https://..."
    }
  ],
  "scraped_at": "2024-01-15 10:30:00"
}
```

## Integration with Study Guide Generator

You can integrate this scraper with your Study Guide Generator app:

### Option 1: Backend API (Recommended)
Create a simple Flask/FastAPI backend that uses the scraper:

```python
from flask import Flask, request, jsonify
from scraper import KhanAcademyScraper

app = Flask(__name__)
scraper = KhanAcademyScraper()

@app.route('/api/scrape', methods=['POST'])
def scrape():
    data = request.json
    url = data.get('url')
    result = scraper.scrape_study_guide(url)
    return jsonify(result)

@app.route('/api/search', methods=['GET'])
def search():
    query = request.args.get('q')
    results = scraper.search_topics(query)
    return jsonify(results)
```

Then call from your JavaScript:
```javascript
async function scrapeKhanAcademy(url) {
    const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });
    return await response.json();
}
```

### Option 2: Pre-scrape and Import
1. Run the scraper to collect data:
```bash
python scraper.py --search "biology" --output biology_data.json
```

2. Import the JSON into your `script.js`:
```javascript
// Load scraped data
const khanAcademyData = await fetch('biology_data.json').then(r => r.json());

// Use in your study guide generator
function generateFromKhanAcademy(topic) {
    const data = khanAcademyData.find(d => d.title.includes(topic));
    if (data) {
        // Use scraped content
        return data.content;
    }
}
```

## Examples

### Example 1: Scrape by Topic (Simplest!)
```bash
# Just provide a topic name - it does everything automatically!
python scraper.py --topic "algebra" --output algebra.json

# Scrape more pages for comprehensive content
python scraper.py --topic "biology" --max-pages 5 --output bio.json
```

### Example 2: Scrape Algebra Content (Specific URL)
```bash
python scraper.py "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra" --output algebra.json
```

### Example 3: Scrape Multiple Topics by Name
```python
from scraper import KhanAcademyScraper

scraper = KhanAcademyScraper()

# Scrape multiple topics - just provide topic names!
topics = ["algebra", "geometry", "calculus"]

for topic in topics:
    print(f"\nScraping: {topic}")
    result = scraper.scrape_by_topic(topic, max_pages=2)
    print(f"Found {len(result['key_concepts'])} key concepts")
    print(f"Found {len(result['practice_questions'])} practice questions")
```

### Example 3: Extract Practice Questions
```python
from scraper import KhanAcademyScraper
import json

scraper = KhanAcademyScraper()
result = scraper.scrape_study_guide("https://www.khanacademy.org/math/algebra")

# Extract only practice questions
questions = result.get('practice_questions', [])
print(f"Found {len(questions)} practice questions")

for q in questions:
    print(f"\nQ: {q['question']}")
    print(f"A: {q['answer']}")
    print(f"Explanation: {q['explanation']}")
```

## Important Notes

### Rate Limiting
- The scraper includes a default 1-second delay between requests
- Adjust with `--delay` flag or `delay` parameter
- Be respectful: Khan Academy is a free educational resource

### Legal & Ethical Considerations
- ✅ **OK**: Scraping for personal learning and study purposes
- ✅ **OK**: Using scraped content to enhance your own study guides
- ❌ **NOT OK**: Redistributing Khan Academy content without permission
- ❌ **NOT OK**: Commercial use without proper licensing
- Always check Khan Academy's Terms of Service and robots.txt

### Limitations
- Khan Academy uses JavaScript for some content, which may not be fully captured
- Some content may require authentication
- Page structure may change, requiring selector updates
- Some interactive elements may not be scrapable

## Troubleshooting

### "Connection Error" or "Timeout"
- Check your internet connection
- Khan Academy may be blocking requests (try increasing delay)
- Some content may require login

### "No content found"
- The page structure may have changed
- Try a different URL format
- Some pages may use JavaScript rendering (consider Selenium)

### Empty results
- Verify the URL is correct
- Check if the page requires authentication
- Some Khan Academy pages may have different structures

## Advanced Usage

### Using with Selenium (for JavaScript-heavy pages)
If you encounter pages that require JavaScript rendering:

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup

driver = webdriver.Chrome()
driver.get("https://www.khanacademy.org/...")
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
# Continue with scraping...
```

### Custom Selectors
Modify the scraper class to add custom selectors for specific page types:

```python
class CustomKhanScraper(KhanAcademyScraper):
    def _extract_content(self, soup):
        # Add your custom extraction logic
        pass
```

## Contributing

Feel free to improve the scraper by:
- Adding support for more Khan Academy page types
- Improving content extraction accuracy
- Adding support for other educational platforms
- Enhancing error handling

## License

This scraper is for educational purposes. Please respect Khan Academy's Terms of Service when using it.

