# Study Guide Generator

<div align="center">

![Study Guide Generator](https://img.shields.io/badge/Study-Guide%20Generator-blue?style=for-the-badge)
![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-green?style=for-the-badge)

**Transform your topic list into comprehensive, interactive study guides with practice questions, flashcards, and quizzes.**

[Live Demo](#-getting-started) • [Features](#-features) • [Technical Details](#-technical-architecture) • [Showcase](#-showcase-demo)

</div>

---

## 📋 Overview

Study Guide Generator is a **fully client-side web application** that intelligently creates personalized study materials from user input. Built with **vanilla JavaScript** (no frameworks), it demonstrates advanced DOM manipulation, state management, and algorithmic content generation.

### Key Highlights

- 🎯 **7 Study Guide Formats** - From comprehensive guides to interactive quizzes
- 🧠 **Intelligent Content Generation** - Subject-aware question templates with difficulty scaling
- 🎨 **Modern Glassmorphism UI** - Custom CSS animations and responsive design
- ⚡ **Zero Dependencies** - Pure HTML, CSS, and JavaScript
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

---

## ✨ Features

### 🎯 Interactive Practice Questions
- **Multiple-Choice Questions**: Interactive MCQs with instant feedback
- **Essay Questions**: Open-ended questions with detailed answers
- **Answer Validation**: Real-time feedback with color-coded responses
- **Hidden Answers**: Answers revealed only after selection (no spoilers!)
- **Detailed Explanations**: Context-aware explanations for each answer

### 📚 Multiple Study Guide Formats
- **Comprehensive Practice Guide**: Full study guide with questions, tips, and examples
- **Interactive Flashcards**: 3D flip animations with navigation controls
- **Quick Graded Quiz**: Timed quizzes with instant scoring and grade calculation
- **Flashcard Format**: Traditional printable flashcard layout
- **Outline Format**: Hierarchical outline structure
- **Mind Map Style**: Visual mind map representation
- **Quick Summary**: Condensed summary format

### 🚀 Smart Features
- **Auto-Generate Topics**: Intelligent subject detection with keyword matching
- **Real Test Data**: Built-in support for real tests (Massachusetts Permit Test, Driver's Permit)
- **Question Count Selector**: Customizable question count (1-20) with intuitive controls
- **Difficulty Levels**: Beginner, Intermediate, and Advanced with adaptive content
- **Full-Page Modal**: Immersive study experience with dedicated workspace
- **Export Options**: Print, PDF export, and clipboard copy functionality

### 🎨 Beautiful UI
- **Modern Glassmorphism Design**: Advanced CSS with backdrop filters and layered effects
- **Responsive Layout**: Mobile-first design with breakpoints for all screen sizes
- **Smooth Animations**: 60fps animations with CSS transforms and transitions
- **Dark Theme**: Eye-friendly dark gradient background
- **Accessibility**: Semantic HTML and ARIA labels

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- **No installation required** - runs entirely in the browser!

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/jgomes28-blip/SimpleSite.git
cd SimpleSite
```

2. **Open in your browser:**
```bash
# macOS/Linux
open index.html

# Windows
start index.html
```

Or simply **double-click** the `index.html` file.

### First Use

1. Enter a subject (e.g., "Massachusetts Permit Test", "Biology", "Chemistry")
2. Optionally add specific topics (one per line) or leave blank for auto-generation
3. Select your preferred study guide format
4. Choose difficulty level and question count
5. Click "Generate Study Guide" and start studying!

---

## 📖 Usage Guide

### Creating a Study Guide

1. **Enter Subject**: Type your subject or topic
   - Examples: "Massachusetts Permit Test", "Biology", "History", "Chemistry"
   - The app will auto-detect and suggest relevant topics

2. **Add Topics (Optional)**: 
   - Leave blank for auto-generated content based on subject
   - Or enter specific topics, one per line

3. **Select Study Guide Type**: Choose from 7 different formats
   - Comprehensive: Full guide with questions and tips
   - Interactive Flashcards: 3D flip cards with navigation
   - Quiz: Graded quiz with scoring
   - Other formats: Flashcard, Outline, Mind Map, Summary

4. **Set Difficulty**: Beginner, Intermediate, or Advanced
   - Affects question complexity and depth

5. **Choose Question Count** (Comprehensive guides only): 
   - Use +/- buttons to select 1-20 questions
   - Default varies by difficulty level

6. **Generate**: Click "Generate Study Guide" and explore!

### Using Practice Questions

1. **Read the Question**: Take time to understand what's being asked
2. **Select Your Answer**: Click on your chosen option
3. **Get Instant Feedback**:
   - ✅ **Green** = Correct answer
   - ❌ **Red** = Incorrect answer (correct answer highlighted)
   - 💡 **Explanation** appears automatically
4. **Review**: Read the explanation to understand the reasoning

---

## 🎓 Supported Subjects

### Built-in Subject Data
- **Biology**: Cell structure, DNA, evolution, ecosystems
- **History**: Wars, revolutions, civilizations, politics
- **Mathematics**: Algebra, geometry, calculus, statistics
- **Chemistry**: Reactions, molecules, atoms, bonds (with specialized templates)
- **Physics**: Forces, energy, motion, waves

### Real Test Data
- **Massachusetts Permit Test**: State-specific traffic laws and regulations
- **General Driver's Permit Test**: Universal driving rules and safety

*Note: Any subject can be used by providing custom topics manually*

---

## 🛠️ Technical Architecture

### Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Advanced styling with glassmorphism, animations, and responsive design
- **Vanilla JavaScript (ES6+)**: Class-based architecture, no frameworks
- **Font Awesome**: Icon library (CDN)
- **Google Fonts**: Inter font family (CDN)

### Architecture Highlights

#### 1. **Class-Based Design Pattern**
```javascript
class StudyGuideGenerator {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.studyData = { /* ... */ };
    }
}
```
- Encapsulated state management
- Event-driven architecture
- Modular method organization

#### 2. **Intelligent Question Generation**
- **Template System**: Base templates with specialized overrides
- **Subject Detection**: Keyword matching with fallback logic
- **Difficulty Scaling**: Adaptive content based on difficulty level
- **Chemistry Specialization**: Domain-specific templates for chemistry topics

#### 3. **State Management**
- No external state management library
- Class properties for component state
- Event listeners for user interactions
- DOM manipulation for UI updates

#### 4. **CSS Architecture**
- **CSS Custom Properties**: Centralized color and spacing variables
- **Glassmorphism Effects**: Backdrop filters, layered gradients, blur effects
- **Responsive Design**: Mobile-first with breakpoints
- **Animations**: CSS keyframes and transitions

### File Structure
```
SimpleSite/
├── index.html      # Main HTML structure (298 lines)
├── styles.css      # All styling and animations (2008 lines)
├── script.js       # Application logic (1844 lines)
└── README.md       # Documentation
```

### Key Algorithms

#### Subject Detection & Auto-Generation
```javascript
autoGenerateTopics(subject, difficulty) {
    // 1. Check for real test data (exact match)
    // 2. Check for general subject data (keyword match)
    // 3. Fallback to default topics
}
```

#### Question Template Selection
```javascript
createQuestionTemplates(topic, difficulty, subject) {
    // 1. Check for specialized templates (chemistry, etc.)
    // 2. Use base templates if no specialization
    // 3. Scale difficulty (add advanced questions)
    // 4. Ensure multiple-choice format
}
```

#### Interactive Quiz Flow
```javascript
generateQuiz(topics) {
    // 1. Create question pool from topics
    // 2. Shuffle options
    // 3. Track user answers
    // 4. Calculate score and grade
}
```

### Performance Considerations

- **No External Dependencies**: Faster load times
- **Client-Side Processing**: No server requests needed
- **Efficient DOM Updates**: Minimal reflows and repaints
- **CSS Animations**: Hardware-accelerated transforms
- **Event Delegation**: Efficient event handling

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

*Note: Requires modern browser with ES6+ and CSS3 support*

---

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

### Adding New Subjects

Edit `script.js` and add to the `subjects` object:

```javascript
'subjects': {
    'your-subject': {
        keywords: ['keyword1', 'keyword2'],
        concepts: ['Concept 1', 'Concept 2', 'Concept 3']
    }
}
```

### Styling Customization

Modify `styles.css` to customize:
- **Colors**: Update CSS custom properties in `:root`
- **Gradients**: Modify background gradients
- **Spacing**: Adjust padding and margins
- **Animations**: Customize keyframe animations
- **Breakpoints**: Modify media queries for responsive design

---

## 🎬 Showcase Demo

### Quick Demo Flow (5 minutes)

1. **Introduction** (30s)
   - Problem: Students struggle to organize study materials
   - Solution: AI-powered study guide generator

2. **Live Demo** (2.5 min)
   - Enter "Massachusetts Permit Test"
   - Show auto-detection and topic generation
   - Generate comprehensive guide
   - Demonstrate interactive questions
   - Show quiz mode

3. **Technical Deep Dive** (1.5 min)
   - Question generation algorithm
   - Subject detection system
   - Template-based architecture

4. **Challenges & Learnings** (30s)
   - Glassmorphism CSS implementation
   - State management without frameworks
   - Content generation algorithms

### Demo Subjects (Pre-prepared)

- **Massachusetts Permit Test**: Shows real test data integration
- **Chemistry**: Demonstrates specialized templates
- **Biology**: Shows auto-generation capabilities

---

## 🏆 Technical Achievements

- ✅ **Zero Dependencies**: Pure vanilla JavaScript implementation
- ✅ **Advanced CSS**: Custom glassmorphism effects without libraries
- ✅ **Algorithm Design**: Intelligent content generation system
- ✅ **State Management**: Custom state handling without frameworks
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Accessibility**: Semantic HTML and ARIA labels
- ✅ **Performance**: Optimized DOM manipulation and animations

---

## 📝 License

This project is open source and available for personal and educational use.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📚 Add more test data
- 📖 Improve documentation

---

## 📧 Contact & Support

For questions, suggestions, or feedback:
- 📧 Open an issue on GitHub
- 💬 Discuss in GitHub Discussions

---

<div align="center">

**Built with ❤️ using Vanilla JavaScript**

**Happy Studying! 📚✨**

</div>
