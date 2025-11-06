# Study Guide Creator

A beautiful, interactive web application that transforms your topic list into comprehensive study guides with practice questions, tips, and test preparation materials.

![Study Guide Creator](https://img.shields.io/badge/Study-Guide%20Creator-blue?style=for-the-badge)

## ✨ Features

### 🎯 Interactive Practice Questions
- **Multiple-Choice Questions**: Test your knowledge with interactive MCQs
- **Essay Questions**: Practice with open-ended questions
- **Answer Validation**: Get instant feedback on your answers
- **Hidden Answers**: Answers are hidden until you make a selection (no spoilers!)
- **Detailed Explanations**: Learn why each answer is correct or incorrect

### 📚 Multiple Study Guide Formats
- **Comprehensive Practice Guide**: Full study guide with practice questions and tips
- **Interactive Flashcards**: Flip through flashcards to test your memory
- **Quick Graded Quiz**: Take timed quizzes with instant scoring
- **Flashcard Format**: Traditional flashcard layout
- **Outline Format**: Organized outline structure
- **Mind Map Style**: Visual mind map representation
- **Quick Summary**: Condensed summary format

### 🚀 Smart Features
- **Auto-Generate Topics**: Enter just a subject and let the app generate relevant topics
- **Real Test Data**: Built-in support for real tests (e.g., Massachusetts Permit Test)
- **Question Count Selector**: Choose how many questions you want (1-20)
- **Difficulty Levels**: Beginner, Intermediate, and Advanced options
- **Full-Page Modal**: Immersive study experience with dedicated study space

### 🎨 Beautiful UI
- **Modern Glassmorphism Design**: Sleek, glass-like interface
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Polished transitions and interactions
- **Dark Theme**: Easy on the eyes for extended study sessions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jgomes28-blip/SimpleSite.git
cd SimpleSite
```

2. Open `index.html` in your web browser:
```bash
# On macOS/Linux
open index.html

# On Windows
start index.html
```

Or simply double-click the `index.html` file.

## 📖 How to Use

### Creating a Study Guide

1. **Enter Subject**: Type your subject or topic (e.g., "Massachusetts Permit Test", "Biology", "History")

2. **Add Topics (Optional)**: 
   - Leave blank for auto-generated content
   - Or enter specific topics, one per line

3. **Select Study Guide Type**: Choose from 7 different formats

4. **Set Difficulty**: Select Beginner, Intermediate, or Advanced

5. **Choose Question Count** (for Comprehensive guides): Use the +/- buttons to select 1-20 questions

6. **Generate**: Click "Generate Study Guide" and start studying!

### Using Practice Questions

1. **Read the Question**: Take your time to understand what's being asked

2. **Select Your Answer**: Click on the option you think is correct

3. **Get Instant Feedback**:
   - ✅ Green = Correct answer
   - ❌ Red = Incorrect answer (correct answer will be highlighted)
   - 💡 Explanation appears automatically

4. **Review**: Read the explanation to understand why the answer is correct

## 🎓 Supported Subjects

The app includes built-in data for:

- **Biology**: Cell structure, DNA, evolution, ecosystems
- **History**: Wars, revolutions, civilizations, politics
- **Mathematics**: Algebra, geometry, calculus, statistics
- **Chemistry**: Reactions, molecules, atoms, bonds
- **Physics**: Forces, energy, motion, waves
- **Real Tests**: 
  - Massachusetts Permit Test
  - General Driver's Permit Test

*More subjects can be added by providing topics manually*

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with glassmorphism effects
- **Vanilla JavaScript**: No frameworks required
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### File Structure
```
SimpleSite/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Application logic and question generation
└── README.md       # This file
```

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🎨 Customization

### Adding New Test Data

Edit `script.js` and add to the `realTests` object:

```javascript
'realTests': {
    'your-test-name': {
        keywords: ['keyword1', 'keyword2'],
        topics: {
            'Topic Name': [
                {
                    question: 'Your question?',
                    type: 'multiple-choice',
                    options: ['Option A', 'Option B', 'Option C', 'Option D'],
                    correctAnswer: 0,
                    explanation: 'Why this is correct'
                }
            ]
        },
        tips: ['Tip 1', 'Tip 2']
    }
}
```

### Styling

Modify `styles.css` to customize:
- Colors and gradients
- Spacing and layout
- Animations and transitions
- Responsive breakpoints

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Add more test data

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Happy Studying! 📚✨**

