// Study Guide Generator JavaScript
class StudyGuideGenerator {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.studyData = {
            subjects: {
                'biology': {
                    keywords: ['cell', 'dna', 'evolution', 'ecosystem', 'photosynthesis', 'genetics'],
                    concepts: ['Cell Structure', 'DNA Replication', 'Natural Selection', 'Food Chains', 'Light Reactions', 'Heredity']
                },
                'history': {
                    keywords: ['war', 'revolution', 'empire', 'civilization', 'culture', 'politics'],
                    concepts: ['Causes and Effects', 'Timeline Analysis', 'Cultural Impact', 'Political Systems', 'Social Movements', 'Economic Factors']
                },
                'mathematics': {
                    keywords: ['equation', 'function', 'geometry', 'algebra', 'calculus', 'statistics'],
                    concepts: ['Problem Solving', 'Formula Application', 'Graphical Analysis', 'Proof Techniques', 'Data Interpretation', 'Mathematical Reasoning']
                },
                'chemistry': {
                    keywords: ['reaction', 'molecule', 'atom', 'bond', 'acid', 'base'],
                    concepts: ['Chemical Reactions', 'Molecular Structure', 'Atomic Theory', 'Chemical Bonding', 'pH and Solutions', 'Laboratory Techniques']
                },
                'physics': {
                    keywords: ['force', 'energy', 'motion', 'wave', 'electricity', 'magnetism'],
                    concepts: ['Laws of Motion', 'Energy Conservation', 'Wave Properties', 'Electromagnetic Fields', 'Thermodynamics', 'Quantum Mechanics']
                }
            },
            realTests: {
                'permit test': {
                    keywords: ['permit', 'drivers', 'license', 'dmv', 'driving', 'traffic'],
                    topics: {
                        'Traffic Laws': [
                            {question: 'What is the speed limit in a school zone?', type: 'multiple-choice', options: ['15 mph', '20 mph', '25 mph', '30 mph'], correctAnswer: 1, explanation: 'School zones typically have a speed limit of 20 mph to ensure the safety of children.'},
                            {question: 'When should you yield the right-of-way?', type: 'multiple-choice', options: ['At all intersections', 'At traffic circles', 'To emergency vehicles with sirens', 'All of the above'], correctAnswer: 3, explanation: 'You must yield at intersections, traffic circles, and to emergency vehicles with activated sirens.'},
                            {question: 'What does a yellow traffic light mean?', type: 'essay', answer: 'A yellow traffic light means the green light is about to change to red. You should stop if safe to do so, or clear the intersection if you cannot stop safely.'}
                        ],
                        'Signs and Signals': [
                            {question: 'What does a red octagonal sign mean?', type: 'multiple-choice', options: ['Yield', 'Stop', 'No Entry', 'Slow Down'], correctAnswer: 1, explanation: 'A red octagonal sign is a STOP sign - you must come to a complete stop.'},
                            {question: 'What does a yellow diamond sign typically indicate?', type: 'multiple-choice', options: ['Regulatory instruction', 'Warning', 'Information', 'Danger'], correctAnswer: 1, explanation: 'Yellow diamond signs are warning signs that alert drivers to potential hazards ahead.'}
                        ],
                        'Parking Rules': [
                            {question: 'How far must you park from a fire hydrant?', type: 'multiple-choice', options: ['5 feet', '10 feet', '15 feet', '20 feet'], correctAnswer: 2, explanation: 'You must park at least 15 feet away from a fire hydrant to allow emergency access.'},
                            {question: 'When is parking illegal in a handicapped space?', type: 'essay', answer: 'Parking in a handicapped space is illegal without a valid handicapped permit or license plate. This applies at all times and carries significant fines.'}
                        ]
                    },
                    tips: ['Study the state driving manual thoroughly', 'Practice identifying road signs by shape and color', 'Memorize speed limits for different road types', 'Understand right-of-way rules completely']
                },
                'massachusetts permit test': {
                    keywords: ['massachusetts', 'permit', 'ma', 'bay state'],
                    topics: {
                        'Massachusetts Traffic Laws': [
                            {question: 'In Massachusetts, what is the legal blood alcohol content (BAC) limit for drivers?', type: 'multiple-choice', options: ['0.05%', '0.08%', '0.10%', '0.12%'], correctAnswer: 1, explanation: 'Massachusetts has a 0.08% BAC limit for adult drivers, which is the national standard.'},
                            {question: 'What is the hands-free law in Massachusetts?', type: 'essay', answer: 'Massachusetts prohibits all handheld device use while driving, including phone calls, texting, or app use. Only hands-free voice commands are permitted.'},
                            {question: 'What are the consequences of failing to stop at a school bus with flashing red lights?', type: 'multiple-choice', options: ['Warning', '$100 fine', '$250 fine', 'Points on license'], correctAnswer: 2, explanation: 'Failing to stop for a school bus results in a $250 fine and potential license suspension.'}
                        ],
                        'Massachusetts Road Signs': [
                            {question: 'What does a "Permit Parking Only" sign mean in Boston?', type: 'essay', answer: 'This sign indicates parking is restricted to vehicles with valid area resident parking permits during specified times.'},
                            {question: 'Massachusetts uses which color for informational signs?', type: 'multiple-choice', options: ['Blue', 'Green', 'White', 'Brown'], correctAnswer: 1, explanation: 'Massachusetts uses green for informational signs on highways.'}
                        ],
                        'Right-of-Way in Massachusetts': [
                            {question: 'In a Massachusetts roundabout, who has the right-of-way?', type: 'multiple-choice', options: ['Entering traffic', 'Traffic already in roundabout', 'Largest vehicle', 'Fastest vehicle'], correctAnswer: 1, explanation: 'Traffic already in the roundabout always has the right-of-way over entering traffic.'}
                        ]
                    },
                    tips: ['Review the Massachusetts RMV Driver\'s Manual', 'Practice roundabout navigation rules', 'Understand the state\'s hands-free device laws', 'Memorize Massachusetts-specific parking regulations', 'Know the penalties for traffic violations']
                }
            }
        };
    }

    initializeElements() {
        this.subjectInput = document.getElementById('subject');
        this.topicsInput = document.getElementById('topics');
        this.studyTypeSelect = document.getElementById('studyType');
        this.difficultySelect = document.getElementById('difficulty');
        this.numQuestions = document.getElementById('numQuestions');
        this.decreaseBtn = document.getElementById('decreaseBtn');
        this.increaseBtn = document.getElementById('increaseBtn');
        this.questionsGroup = document.getElementById('questionsGroup');
        this.generateBtn = document.getElementById('generateBtn');
        this.clearBtn = document.getElementById('clearBtn');
        this.outputPanel = document.getElementById('outputPanel');
        this.studyGuide = document.getElementById('studyGuide');
        this.printBtn = document.getElementById('printBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.remindMeBtn = document.getElementById('remindMeBtn');
        
        // Modal elements
        this.studyModal = document.getElementById('studyModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalContent = document.getElementById('modalContent');
        this.modalCloseBtn = document.getElementById('modalCloseBtn');
        
        // Interactive elements
        this.currentFlashcardIndex = 0;
        this.currentQuizQuestion = 0;
        this.quizAnswers = [];
        this.quizQuestions = [];
    }

    bindEvents() {
        this.generateBtn.addEventListener('click', () => this.generateStudyGuide());
        this.clearBtn.addEventListener('click', () => this.clearAll());
        this.printBtn.addEventListener('click', () => this.printStudyGuide());
        this.exportBtn.addEventListener('click', () => this.exportToPDF());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.restartBtn.addEventListener('click', () => this.restartInteractive());
        if (this.remindMeBtn) {
            this.remindMeBtn.addEventListener('click', () => this.scheduleReminder());
        }
        
        // Modal events
        this.modalCloseBtn.addEventListener('click', () => this.closeModal());
        this.studyModal.addEventListener('click', (e) => {
            if (e.target === this.studyModal) {
                this.closeModal();
            }
        });
        
        // Show/hide question number selector
        this.studyTypeSelect.addEventListener('change', () => this.toggleQuestionSelector());
        
        // Number input buttons
        if (this.decreaseBtn) {
            this.decreaseBtn.addEventListener('click', () => this.decreaseQuestions());
        }
        if (this.increaseBtn) {
            this.increaseBtn.addEventListener('click', () => this.increaseQuestions());
        }
        
        // Auto-detect subject and suggest topics
        this.subjectInput.addEventListener('input', () => this.suggestTopics());
    }
    
    toggleQuestionSelector() {
        if (this.questionsGroup) {
            if (this.studyTypeSelect.value === 'comprehensive') {
                this.questionsGroup.classList.remove('hidden');
            } else {
                this.questionsGroup.classList.add('hidden');
            }
        }
    }
    
    decreaseQuestions() {
        const current = parseInt(this.numQuestions.value) || 10;
        if (current > 1) {
            this.numQuestions.value = current - 1;
            this.updateNumberButtons();
        }
    }
    
    increaseQuestions() {
        const current = parseInt(this.numQuestions.value) || 10;
        if (current < 20) {
            this.numQuestions.value = current + 1;
            this.updateNumberButtons();
        }
    }
    
    updateNumberButtons() {
        const current = parseInt(this.numQuestions.value) || 10;
        if (this.decreaseBtn) {
            this.decreaseBtn.disabled = current <= 1;
        }
        if (this.increaseBtn) {
            this.increaseBtn.disabled = current >= 20;
        }
    }
    
    closeModal() {
        this.studyModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    openModal() {
        this.studyModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    suggestTopics() {
        const subject = this.subjectInput.value.toLowerCase();
        const detectedSubject = Object.keys(this.studyData.subjects).find(key => 
            subject.includes(key) || this.studyData.subjects[key].keywords.some(keyword => 
                subject.includes(keyword)
            )
        );

        if (detectedSubject && this.topicsInput.value.trim() === '') {
            const concepts = this.studyData.subjects[detectedSubject].concepts;
            this.topicsInput.placeholder = `Suggested topics for ${detectedSubject}:\n\n${concepts.join('\n')}`;
        }
    }

    autoGenerateTopics(subject, difficulty) {
        const subjectLower = subject.toLowerCase();
        
        // Check for real test data
        const testMatch = Object.keys(this.studyData.realTests).find(test => 
            subjectLower.includes(test) || this.studyData.realTests[test].keywords.some(keyword => 
                subjectLower.includes(keyword)
            )
        );

        if (testMatch) {
            // Return topic names from real test data
            return Object.keys(this.studyData.realTests[testMatch].topics);
        }
        
        // Check for general subject data
        const detectedSubject = Object.keys(this.studyData.subjects).find(key => 
            subjectLower.includes(key) || this.studyData.subjects[key].keywords.some(keyword => 
                subjectLower.includes(keyword)
            )
        );

        if (detectedSubject) {
            return this.studyData.subjects[detectedSubject].concepts;
        }

        // Default fallback topics
        return ['Fundamental Concepts', 'Key Principles', 'Important Rules', 'Practical Applications'];
    }

    async generateStudyGuide() {
        const subject = this.subjectInput.value.trim();
        const topics = this.topicsInput.value.trim();
        const studyType = this.studyTypeSelect.value;
        const difficulty = this.difficultySelect.value;

        if (!subject) {
            this.showNotification('Please enter a subject.', 'error');
            return;
        }

        this.showLoading(true);
        
        try {
            let topicList;
            if (topics) {
                topicList = topics.split('\n').filter(topic => topic.trim());
            } else {
                // Auto-generate topics based on subject
                topicList = this.autoGenerateTopics(subject, difficulty);
            }
            
            const studyGuide = await this.createStudyGuide(subject, topicList, studyType, difficulty);
            
            this.displayStudyGuide(studyGuide);
            this.showNotification('Study guide generated successfully!', 'success');
        } catch (error) {
            this.showNotification('Error generating study guide. Please try again.', 'error');
            console.error('Error:', error);
        } finally {
            this.showLoading(false);
        }
    }

    async createStudyGuide(subject, topics, studyType, difficulty) {
        // Simulate API call delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));

        const studyGuide = {
            subject: subject,
            topics: topics,
            studyType: studyType,
            difficulty: difficulty,
            generatedAt: new Date().toLocaleDateString(),
            content: this.generateContent(subject, topics, studyType, difficulty)
        };

        return studyGuide;
    }

    generateContent(subject, topics, studyType, difficulty) {
        // Get actual section count
        const sections = this.organizeTopics(subject, topics, studyType, difficulty);
        const totalTopics = sections.reduce((sum, section) => sum + section.topics.length, 0);
        
        const content = {
            header: {
                title: `${subject} Study Guide`,
                subtitle: `Comprehensive ${studyType.replace('-', ' ')} covering ${totalTopics} topic${totalTopics !== 1 ? 's' : ''}`,
                meta: {
                    type: studyType,
                    difficulty: difficulty,
                    topics: totalTopics,
                    date: new Date().toLocaleDateString()
                }
            },
            sections: sections
        };

        return content;
    }

    organizeTopics(subject, topics, studyType, difficulty) {
        const sections = [];
        
        // Check if we have real test data for this subject
        const subjectLower = subject.toLowerCase();
        const testMatch = Object.keys(this.studyData.realTests).find(test => 
            subjectLower.includes(test) || this.studyData.realTests[test].keywords.some(keyword => 
                subjectLower.includes(keyword)
            )
        );

        if (testMatch && this.studyData.realTests[testMatch].topics) {
            // Use real test data
            const testData = this.studyData.realTests[testMatch];
            Object.entries(testData.topics).forEach(([topicName, questions]) => {
                sections.push({
                    title: topicName,
                    topics: [this.generateTopicContentFromRealData(topicName, questions, testData.tips)]
                });
            });
        } else {
            // Generate generic content
            const categorizedTopics = this.categorizeTopics(topics);
            
            Object.entries(categorizedTopics).forEach(([category, topicList]) => {
                sections.push({
                    title: category,
                    topics: topicList.map(topic => this.generateTopicContent(topic, studyType, difficulty))
                });
            });
        }

        return sections;
    }

    categorizeTopics(topics) {
        const categories = {
            'Fundamental Concepts': [],
            'Key Topics': [],
            'Advanced Topics': [],
            'Applications': []
        };

        topics.forEach((topic, index) => {
            const topicLower = topic.toLowerCase();
            
            if (topicLower.includes('basic') || topicLower.includes('introduction') || topicLower.includes('overview')) {
                categories['Fundamental Concepts'].push(topic);
            } else if (topicLower.includes('application') || topicLower.includes('example') || topicLower.includes('case study')) {
                categories['Applications'].push(topic);
            } else if (topicLower.includes('advanced') || topicLower.includes('complex') || topicLower.includes('detailed')) {
                categories['Advanced Topics'].push(topic);
            } else {
                categories['Key Topics'].push(topic);
            }
        });

        // Remove empty categories
        return Object.fromEntries(Object.entries(categories).filter(([_, topics]) => topics.length > 0));
    }

    generateTopicContent(topic, studyType, difficulty) {
        const content = {
            title: topic,
            keyPoints: this.generateKeyPoints(topic, difficulty),
            details: this.generateDetails(topic, difficulty),
            examples: this.generateExamples(topic, difficulty),
            studyTips: this.generateStudyTips(topic, difficulty),
            practiceQuestions: this.generatePracticeQuestions(topic, difficulty)
        };

        return content;
    }

    generateTopicContentFromRealData(topicName, questions, tips) {
        // Get max questions from user setting or default to all
        const maxQuestions = this.numQuestions ? parseInt(this.numQuestions.value) || questions.length : questions.length;
        const limitedQuestions = questions.slice(0, maxQuestions);
        
        // Extract key points from questions
        const keyPoints = limitedQuestions.map((q, idx) => 
            `Question ${idx + 1}: ${q.question.substring(0, 60)}...`
        );

        // Convert real questions to the format expected by display
        const practiceQuestions = limitedQuestions.map(q => {
            const question = {
                question: q.question,
                type: q.type || (q.options && q.options.length > 0 ? 'multiple-choice' : 'essay'),
                answer: q.answer
            };
            
            // Only add options and correctAnswer if it's a multiple-choice question
            if (q.type === 'multiple-choice' || (q.options && q.options.length > 0)) {
                question.options = q.options || [];
                question.correctAnswer = q.correctAnswer;
                question.explanation = q.explanation;
            }
            
            return question;
        });

        return {
            title: topicName,
            keyPoints: keyPoints.slice(0, 4),
            details: [
                'These questions are designed to test your understanding of the key concepts.',
                'Review each question carefully and understand why each answer is correct or incorrect.'
            ],
            examples: [
                'Apply the rules to real-world driving scenarios',
                'Memorize signs and their meanings'
            ],
            studyTips: tips || [],
            practiceQuestions: practiceQuestions
        };
    }

    generateKeyPoints(topic, difficulty) {
        const basePoints = [
            `Understanding the core concepts of ${topic}`,
            `Key principles and theories related to ${topic}`,
            `Important terminology and definitions`,
            `Practical applications and real-world connections`
        ];

        if (difficulty === 'advanced') {
            basePoints.push(`Advanced analysis and critical thinking aspects`);
            basePoints.push(`Research methodologies and current developments`);
        }

        return basePoints.slice(0, difficulty === 'beginner' ? 3 : difficulty === 'intermediate' ? 4 : 6);
    }

    generateDetails(topic, difficulty) {
        const details = [
            `This topic covers essential knowledge that builds the foundation for deeper understanding.`,
            `Focus on understanding the relationships between different concepts and how they interconnect.`,
            `Pay attention to cause-and-effect relationships and underlying principles.`
        ];

        if (difficulty === 'advanced') {
            details.push(`Consider multiple perspectives and evaluate different approaches to the topic.`);
            details.push(`Analyze current research and emerging trends in this area.`);
        }

        return details;
    }

    generateExamples(topic, difficulty) {
        const examples = [
            `Real-world applications of ${topic}`,
            `Case studies and practical scenarios`,
            `Common problems and their solutions`
        ];

        if (difficulty === 'advanced') {
            examples.push(`Complex scenarios requiring advanced analysis`);
            examples.push(`Research examples and current developments`);
        }

        return examples;
    }

    generateStudyTips(topic, difficulty) {
        const tips = [
            `Create visual diagrams or mind maps for ${topic}`,
            `Practice with sample questions and problems`,
            `Connect ${topic} to other related concepts`,
            `Use active recall techniques for better retention`
        ];

        if (difficulty === 'advanced') {
            tips.push(`Engage in critical analysis and evaluation`);
            tips.push(`Explore current research and academic papers`);
        }

        return tips.slice(0, difficulty === 'beginner' ? 3 : 4);
    }

    generatePracticeQuestions(topic, difficulty) {
        const questionTemplates = [
            {
                question: `What is the primary concept behind ${topic}?`,
                type: 'conceptual',
                answer: `The primary concept of ${topic} involves understanding its fundamental principles and how they relate to the broader field. Key aspects include identifying core mechanisms, processes, or theories that define this topic and their practical applications.`
            },
            {
                question: `Which of the following best describes ${topic}?`,
                type: 'multiple-choice',
                options: [
                    `A comprehensive framework for understanding core principles`,
                    `An advanced theoretical model requiring specialized knowledge`,
                    `A practical application method used in real-world scenarios`,
                    `A foundational concept building upon basic principles`
                ],
                correctAnswer: 3,
                explanation: `This answer is correct because ${topic} serves as a foundational building block that establishes essential knowledge for understanding more complex concepts.`
            },
            {
                question: `Explain the significance of ${topic} in practical applications.`,
                type: 'essay',
                answer: `${topic} holds significant importance as it provides the theoretical foundation for numerous practical applications. Understanding this concept enables professionals to solve complex problems, make informed decisions, and innovate within their field. The principles underlying ${topic} can be applied across various contexts, making it a versatile and essential knowledge area.`
            },
            {
                question: `What are the key differences between basic and advanced approaches to ${topic}?`,
                type: 'comparative',
                answer: `Basic approaches to ${topic} focus on fundamental understanding and simple applications, while advanced approaches incorporate complex theories, multiple perspectives, and sophisticated analytical techniques. Advanced study involves critical evaluation, synthesis of information, and application to complex real-world scenarios.`
            }
        ];

        // Return 2-3 questions based on difficulty
        const numQuestions = difficulty === 'beginner' ? 2 : difficulty === 'intermediate' ? 2 : 3;
        return questionTemplates.slice(0, numQuestions);
    }

    displayStudyGuide(studyGuide) {
        const content = studyGuide.content;
        
        let html = `
            <div class="study-guide-header">
                <h1 class="study-guide-title">${content.header.title}</h1>
                <p class="study-guide-subtitle">${content.header.subtitle}</p>
                <div class="study-guide-meta">
                    <div class="meta-item">
                        <i class="fas fa-book"></i>
                        <span>${content.header.meta.type}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-signal"></i>
                        <span>${content.header.meta.difficulty}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-list"></i>
                        <span>${content.header.meta.topics} topics</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${content.header.meta.date}</span>
                    </div>
                </div>
            </div>
        `;

        content.sections.forEach(section => {
            html += `<div class="study-section">`;
            html += `<h2 class="section-title">${section.title}</h2>`;
            
            if (this.studyTypeSelect.value === 'flashcards') {
                html += this.generateFlashcards(section.topics);
            } else if (this.studyTypeSelect.value === 'outline') {
                html += this.generateOutline(section.topics);
            } else if (this.studyTypeSelect.value === 'mindmap') {
                html += this.generateMindMap(section.topics);
            } else if (this.studyTypeSelect.value === 'summary') {
                html += this.generateSummary(section.topics);
            } else if (this.studyTypeSelect.value === 'interactive-flashcards') {
                html += this.generateInteractiveFlashcards(section.topics);
            } else if (this.studyTypeSelect.value === 'quiz') {
                html += this.generateQuiz(section.topics);
            } else {
                html += this.generateComprehensive(section.topics);
            }
            
            html += `</div>`;
        });

        // For comprehensive guides, use modal; otherwise use output panel
        if (this.studyTypeSelect.value === 'comprehensive') {
            this.modalTitle.textContent = content.header.title;
            this.modalContent.innerHTML = html;
            this.openModal();
            
            // Add event listeners for interactive questions
            this.attachQuestionListeners();
        } else {
            this.studyGuide.innerHTML = html;
            this.outputPanel.style.display = 'block';
            this.outputPanel.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    attachQuestionListeners() {
        // Attach listeners to all MCQ options
        const allMcqOptions = this.modalContent.querySelectorAll('.mcq-option');
        allMcqOptions.forEach(option => {
            option.addEventListener('click', () => this.handleAnswerClick(option));
        });
    }
    
    handleAnswerClick(clickedOption) {
        const questionContainer = clickedOption.closest('.practice-question');
        const allOptions = questionContainer.querySelectorAll('.mcq-option');
        const optionsContainer = questionContainer.querySelector('.mcq-options');
        const explanation = questionContainer.querySelector('.question-explanation');
        
        // Get correct answer index from data attribute
        const correctAnswerIndex = parseInt(optionsContainer.getAttribute('data-correct-answer'));
        const clickedIndex = parseInt(clickedOption.getAttribute('data-option-index'));
        
        // Disable all options
        allOptions.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark user's selection
        clickedOption.classList.add('user-selected');
        
        // Find and mark the correct answer
        const correctAnswerOption = questionContainer.querySelector(`[data-option-index="${correctAnswerIndex}"]`);
        const correctBadge = correctAnswerOption.querySelector('.correct-badge');
        
        // Mark correct/incorrect
        if (clickedIndex === correctAnswerIndex) {
            clickedOption.classList.add('correct-answer');
        } else {
            clickedOption.classList.add('wrong-answer');
            // Also highlight the correct answer in green
            correctAnswerOption.classList.add('correct-answer');
        }
        
        // Show correct badge
        if (correctBadge) {
            correctBadge.style.display = 'inline-block';
        }
        
        // Show explanation
        if (explanation) {
            explanation.style.display = 'block';
        }
    }

    generateFlashcards(topics) {
        let html = '<div class="flashcard-container">';
        
        topics.forEach(topic => {
            html += `
                <div class="flashcard">
                    <div class="flashcard-front">${topic.title}</div>
                    <div class="flashcard-back">
                        <strong>Key Points:</strong>
                        <ul>
                            ${topic.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                        <strong>Study Tips:</strong>
                        <ul>
                            ${topic.studyTips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    generateOutline(topics) {
        let html = '';
        
        topics.forEach((topic, index) => {
            html += `
                <div class="outline-item level-1">${index + 1}. ${topic.title}</div>
                <div class="outline-item level-2">A. Key Concepts</div>
                ${topic.keyPoints.map(point => `<div class="outline-item level-3">• ${point}</div>`).join('')}
                <div class="outline-item level-2">B. Study Tips</div>
                ${topic.studyTips.map(tip => `<div class="outline-item level-3">• ${tip}</div>`).join('')}
            `;
        });
        
        return html;
    }

    generateMindMap(topics) {
        let html = '<div class="mindmap-container">';
        
        topics.forEach(topic => {
            html += `<div class="mindmap-node">${topic.title}</div>`;
        });
        
        html += '</div>';
        return html;
    }

    generateSummary(topics) {
        let html = '<div class="summary-grid">';
        
        topics.forEach(topic => {
            html += `
                <div class="summary-item">
                    <h4>${topic.title}</h4>
                    <p><strong>Key Points:</strong> ${topic.keyPoints.slice(0, 2).join(', ')}</p>
                    <p><strong>Study Tip:</strong> ${topic.studyTips[0]}</p>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    }

    generateComprehensive(topics) {
        let html = '';
        
        topics.forEach(topic => {
            html += `
                <div class="topic-card">
                    <h3 class="topic-title">${topic.title}</h3>
                    <div class="topic-content">
                        <div class="study-section-mini">
                            <p class="section-label"><strong>📚 Key Concepts:</strong></p>
                            <ul>
                                ${topic.keyPoints.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="practice-questions-section">
                            <p class="section-label"><strong>🎯 Practice Questions:</strong></p>
                            ${topic.practiceQuestions.map((q, idx) => {
                                let questionHtml = `
                                    <div class="practice-question">
                                        <div class="question-header">
                                            <span class="question-badge">Q${idx + 1}</span>
                                            <p class="question-text"><strong>${q.question}</strong></p>
                                        </div>
                                `;
                                
                                if (q.type === 'multiple-choice' && q.options && q.options.length > 0) {
                                    questionHtml += `
                                        <div class="mcq-options" data-correct-answer="${q.correctAnswer}">
                                            ${q.options.map((opt, optIdx) => 
                                                `<div class="mcq-option" data-option-index="${optIdx}">
                                                    ${opt}
                                                    ${optIdx === q.correctAnswer ? '<span class="correct-badge" style="display:none;">✓ Correct</span>' : ''}
                                                </div>`
                                            ).join('')}
                                        </div>
                                        <div class="question-explanation" style="display:none;">
                                            <span class="explanation-label">💡 Explanation:</span>
                                            <p>${q.explanation || 'No explanation provided.'}</p>
                                        </div>
                                    `;
                                } else {
                                    // Essay, conceptual, or other non-multiple-choice questions
                                    questionHtml += `
                                        <div class="show-answer-container">
                                            <button class="show-answer-btn" onclick="this.nextElementSibling.style.display='block'; this.style.display='none';">
                                                <i class="fas fa-eye"></i> Show Answer
                                            </button>
                                        </div>
                                        <div class="answer-section" style="display:none;">
                                            <div class="answer-box">
                                                <strong>Answer:</strong><br>
                                                ${q.answer || 'No answer provided.'}
                                            </div>
                                        </div>
                                    `;
                                }
                                
                                questionHtml += `</div>`;
                                return questionHtml;
                            }).join('')}
                        </div>
                        
                        <div class="study-tips-section">
                            <p class="section-label"><strong>💡 Test Preparation Tips:</strong></p>
                            <ul>
                                ${topic.studyTips.map(tip => `<li>${tip}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="examples-section">
                            <p class="section-label"><strong>📖 Real-World Applications:</strong></p>
                            <ul>
                                ${topic.examples.map(example => `<li>${example}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        
        return html;
    }

    clearAll() {
        this.subjectInput.value = '';
        this.topicsInput.value = '';
        this.studyTypeSelect.value = 'comprehensive';
        this.difficultySelect.value = 'beginner';
        this.outputPanel.style.display = 'none';
        this.studyGuide.innerHTML = '';
        this.showNotification('All fields cleared!', 'success');
    }

    printStudyGuide() {
        window.print();
        this.showNotification('Print dialog opened!', 'success');
    }

    exportToPDF() {
        // Simple PDF export using browser's print functionality
        const printWindow = window.open('', '_blank');
        const studyGuideContent = this.studyGuide.innerHTML;
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Study Guide - ${this.subjectInput.value}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .study-guide-header { text-align: center; margin-bottom: 30px; }
                    .study-guide-title { font-size: 24px; color: #333; }
                    .section-title { font-size: 18px; color: #333; margin-top: 20px; }
                    .topic-card { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; }
                    .topic-title { font-size: 16px; font-weight: bold; }
                    ul { margin-left: 20px; }
                </style>
            </head>
            <body>
                ${studyGuideContent}
            </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.print();
        this.showNotification('PDF export initiated!', 'success');
    }

    async copyToClipboard() {
        try {
            const textContent = this.studyGuide.innerText;
            await navigator.clipboard.writeText(textContent);
            this.showNotification('Study guide copied to clipboard!', 'success');
        } catch (error) {
            this.showNotification('Failed to copy to clipboard', 'error');
        }
    }

    async scheduleReminder() {
        const subject = this.subjectInput ? this.subjectInput.value.trim() : '';
        const topicsRaw = this.topicsInput ? this.topicsInput.value.trim() : '';
        const fallbackTopics = 'Add your topics here';
        const topicsPreviewRaw = topicsRaw
            ? topicsRaw.split('\n').filter(Boolean).slice(0, 3).join('\n- ')
            : fallbackTopics;
        const subjectLine = encodeURIComponent('Study Session Reminder');
        const bodyRaw = `Hey future me,\n\nLet's finish the ${(subject || 'next subject')} study guide today.\n\nTopics to cover:\n- ${topicsPreviewRaw}\n\nYou've got this!`;
        const body = encodeURIComponent(bodyRaw);

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Study Guide Reminder',
                    text: 'Set aside time to finish your study guide. You got this!'
                });
                this.showNotification('Reminder shared!', 'success');
                return;
            } catch (error) {
                // fall through to mailto / clipboard
            }
        }

        const mailtoLink = `mailto:?subject=${subjectLine}&body=${body}`;
        window.open(mailtoLink, '_blank');
        this.showNotification('Opened your email client with a reminder draft.', 'success');
    }

    showLoading(show) {
        if (show) {
            this.generateBtn.innerHTML = '<span class="loading"></span> Generating...';
            this.generateBtn.disabled = true;
        } else {
            this.generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Study Guide';
            this.generateBtn.disabled = false;
        }
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Interactive Flashcards Methods
    generateInteractiveFlashcards(topics) {
        this.flashcardTopics = topics;
        this.currentFlashcardIndex = 0;
        this.restartBtn.style.display = 'inline-flex';
        
        let html = '<div class="interactive-flashcard-container">';
        html += this.createInteractiveFlashcard(topics[0], 0, topics.length);
        html += '</div>';
        
        return html;
    }

    createInteractiveFlashcard(topic, index, total) {
        const question = this.generateFlashcardQuestion(topic);
        const answer = this.generateFlashcardAnswer(topic);
        
        return `
            <div class="interactive-flashcard" id="flashcard-${index}" onclick="this.classList.toggle('flipped')">
                <div class="flashcard-face flashcard-front">
                    <div class="flashcard-question">${question}</div>
                </div>
                <div class="flashcard-face flashcard-back">
                    <div class="flashcard-answer">${answer}</div>
                </div>
            </div>
            <div class="flashcard-controls">
                <div class="flashcard-nav">
                    <button class="flashcard-btn" onclick="studyGuideGenerator.previousFlashcard()" ${index === 0 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    <div class="flashcard-progress">${index + 1} of ${total}</div>
                    <button class="flashcard-btn" onclick="studyGuideGenerator.nextFlashcard()" ${index === total - 1 ? 'disabled' : ''}>
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <button class="flashcard-btn flashcard-flip-btn" onclick="studyGuideGenerator.flipFlashcard()">
                    <i class="fas fa-sync-alt"></i> Flip Card
                </button>
            </div>
        `;
    }

    generateFlashcardQuestion(topic) {
        const questions = [
            `What is ${topic.title}?`,
            `Define ${topic.title}`,
            `Explain the concept of ${topic.title}`,
            `What are the key aspects of ${topic.title}?`,
            `Describe ${topic.title}`
        ];
        return questions[Math.floor(Math.random() * questions.length)];
    }

    generateFlashcardAnswer(topic) {
        return `
            <div style="text-align: left;">
                <strong>Key Points:</strong><br>
                ${topic.keyPoints.slice(0, 3).map(point => `• ${point}`).join('<br>')}
                <br><br>
                <strong>Study Tips:</strong><br>
                ${topic.studyTips.slice(0, 2).map(tip => `• ${tip}`).join('<br>')}
            </div>
        `;
    }

    nextFlashcard() {
        if (this.currentFlashcardIndex < this.flashcardTopics.length - 1) {
            this.currentFlashcardIndex++;
            this.updateInteractiveFlashcard();
        }
    }

    previousFlashcard() {
        if (this.currentFlashcardIndex > 0) {
            this.currentFlashcardIndex--;
            this.updateInteractiveFlashcard();
        }
    }

    flipFlashcard() {
        const flashcard = document.getElementById(`flashcard-${this.currentFlashcardIndex}`);
        if (flashcard) {
            flashcard.classList.toggle('flipped');
        }
    }

    updateInteractiveFlashcard() {
        const container = document.querySelector('.interactive-flashcard-container');
        if (container) {
            container.innerHTML = this.createInteractiveFlashcard(
                this.flashcardTopics[this.currentFlashcardIndex],
                this.currentFlashcardIndex,
                this.flashcardTopics.length
            );
        }
    }

    // Quiz Methods
    generateQuiz(topics) {
        this.quizQuestions = this.createQuizQuestions(topics);
        this.currentQuizQuestion = 0;
        this.quizAnswers = [];
        this.restartBtn.style.display = 'inline-flex';
        
        let html = '<div class="quiz-container">';
        html += this.createQuizHeader();
        html += this.createQuizQuestion(this.quizQuestions[0], 0);
        html += '</div>';
        
        return html;
    }

    createQuizQuestions(topics) {
        const questions = [];
        topics.forEach(topic => {
            const questionTypes = [
                {
                    type: 'definition',
                    question: `What is ${topic.title}?`,
                    correctAnswer: topic.keyPoints[0],
                    options: this.generateQuizOptions(topic.keyPoints[0], topic.keyPoints.slice(1))
                },
                {
                    type: 'application',
                    question: `Which of the following best describes ${topic.title}?`,
                    correctAnswer: topic.keyPoints[1] || topic.keyPoints[0],
                    options: this.generateQuizOptions(topic.keyPoints[1] || topic.keyPoints[0], topic.keyPoints.slice(2))
                },
                {
                    type: 'study_tip',
                    question: `What is the best way to study ${topic.title}?`,
                    correctAnswer: topic.studyTips[0],
                    options: this.generateQuizOptions(topic.studyTips[0], topic.studyTips.slice(1))
                }
            ];
            
            questions.push(questionTypes[Math.floor(Math.random() * questionTypes.length)]);
        });
        
        return questions.slice(0, Math.min(10, questions.length)); // Limit to 10 questions
    }

    generateQuizOptions(correctAnswer, otherAnswers) {
        const options = [correctAnswer];
        
        // Add other answers from the same topic
        otherAnswers.forEach(answer => {
            if (options.length < 4) {
                options.push(answer);
            }
        });
        
        // Fill with generic options if needed
        const genericOptions = [
            'A fundamental concept in this field',
            'An advanced theoretical framework',
            'A practical application method',
            'A research methodology',
            'A key principle or law',
            'An experimental technique'
        ];
        
        while (options.length < 4) {
            const randomOption = genericOptions[Math.floor(Math.random() * genericOptions.length)];
            if (!options.includes(randomOption)) {
                options.push(randomOption);
            }
        }
        
        // Shuffle options
        return this.shuffleArray(options);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    createQuizHeader() {
        return `
            <div class="quiz-header">
                <h2 class="quiz-title">Quick Quiz</h2>
                <div class="quiz-info">
                    <div class="quiz-info-item">
                        <i class="fas fa-question-circle"></i>
                        <span>${this.quizQuestions.length} Questions</span>
                    </div>
                    <div class="quiz-info-item">
                        <i class="fas fa-clock"></i>
                        <span>Estimated 5-10 minutes</span>
                    </div>
                    <div class="quiz-info-item">
                        <i class="fas fa-signal"></i>
                        <span>${this.difficultySelect.value} Level</span>
                    </div>
                </div>
            </div>
        `;
    }

    createQuizQuestion(question, index) {
        const letters = ['A', 'B', 'C', 'D'];
        
        return `
            <div class="question-card">
                <div class="question-number">${index + 1}</div>
                <div class="question-text">${question.question}</div>
                <div class="quiz-options">
                    ${question.options.map((option, i) => `
                        <div class="quiz-option" onclick="studyGuideGenerator.selectAnswer(${index}, ${i})">
                            <div class="option-letter">${letters[i]}</div>
                            <div>${option}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="quiz-navigation">
                    <div class="quiz-progress">
                        <span>Question ${index + 1} of ${this.quizQuestions.length}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${((index + 1) / this.quizQuestions.length) * 100}%"></div>
                        </div>
                    </div>
                    <button class="btn btn-primary" onclick="studyGuideGenerator.nextQuizQuestion()" ${index === this.quizQuestions.length - 1 ? 'onclick="studyGuideGenerator.finishQuiz()"' : ''}>
                        ${index === this.quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            </div>
        `;
    }

    selectAnswer(questionIndex, optionIndex) {
        // Remove previous selection
        const questionCard = document.querySelector('.question-card');
        const options = questionCard.querySelectorAll('.quiz-option');
        options.forEach(option => option.classList.remove('selected'));
        
        // Add selection to clicked option
        options[optionIndex].classList.add('selected');
        
        // Store answer
        this.quizAnswers[questionIndex] = optionIndex;
    }

    nextQuizQuestion() {
        if (this.currentQuizQuestion < this.quizQuestions.length - 1) {
            this.currentQuizQuestion++;
            this.updateQuizQuestion();
        }
    }

    updateQuizQuestion() {
        const container = document.querySelector('.quiz-container');
        if (container) {
            const header = this.createQuizHeader();
            const question = this.createQuizQuestion(this.quizQuestions[this.currentQuizQuestion], this.currentQuizQuestion);
            container.innerHTML = header + question;
        }
    }

    finishQuiz() {
        const score = this.calculateQuizScore();
        this.displayQuizResults(score);
    }

    calculateQuizScore() {
        let correct = 0;
        this.quizQuestions.forEach((question, index) => {
            const userAnswer = this.quizAnswers[index];
            const correctAnswerIndex = question.options.indexOf(question.correctAnswer);
            if (userAnswer === correctAnswerIndex) {
                correct++;
            }
        });
        
        return {
            correct,
            total: this.quizQuestions.length,
            percentage: Math.round((correct / this.quizQuestions.length) * 100)
        };
    }

    displayQuizResults(score) {
        let grade, gradeClass, summary;
        
        if (score.percentage >= 90) {
            grade = 'A+';
            gradeClass = 'excellent';
            summary = 'Excellent work! You have a strong understanding of the material.';
        } else if (score.percentage >= 80) {
            grade = 'B+';
            gradeClass = 'good';
            summary = 'Good job! You understand most of the concepts well.';
        } else if (score.percentage >= 70) {
            grade = 'C+';
            gradeClass = 'good';
            summary = 'Not bad! Consider reviewing some topics for better understanding.';
        } else {
            grade = 'D';
            gradeClass = 'poor';
            summary = 'Keep studying! Review the material and try the quiz again.';
        }
        
        const container = document.querySelector('.quiz-container');
        container.innerHTML = `
            <div class="quiz-results">
                <div class="quiz-score ${gradeClass}">${score.percentage}%</div>
                <div class="quiz-grade">Grade: ${grade}</div>
                <div class="quiz-summary">${summary}</div>
                <div class="quiz-breakdown">
                    <div class="breakdown-item">
                        <div class="breakdown-number">${score.correct}</div>
                        <div class="breakdown-label">Correct</div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-number">${score.total - score.correct}</div>
                        <div class="breakdown-label">Incorrect</div>
                    </div>
                    <div class="breakdown-item">
                        <div class="breakdown-number">${score.total}</div>
                        <div class="breakdown-label">Total Questions</div>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="studyGuideGenerator.restartInteractive()">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
    }

    restartInteractive() {
        this.currentFlashcardIndex = 0;
        this.currentQuizQuestion = 0;
        this.quizAnswers = [];
        this.restartBtn.style.display = 'none';
        
        // Regenerate the current study guide
        this.generateStudyGuide();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.studyGuideGenerator = new StudyGuideGenerator();
    // Initialize question selector visibility
    window.studyGuideGenerator.toggleQuestionSelector();
    // Initialize button states
    window.studyGuideGenerator.updateNumberButtons();
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
