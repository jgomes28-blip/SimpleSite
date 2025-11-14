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
        
        // Tutorial elements
        this.tutorialBtn = document.getElementById('tutorialBtn');
        this.tutorialOverlay = document.getElementById('tutorialOverlay');
        this.tutorialHighlight = document.getElementById('tutorialHighlight');
        this.tutorialCard = document.getElementById('tutorialCard');
        this.tutorialClose = document.getElementById('tutorialClose');
        this.tutorialSkip = document.getElementById('tutorialSkip');
        this.tutorialNext = document.getElementById('tutorialNext');
        this.tutorialPrev = document.getElementById('tutorialPrev');
        this.tutorialStepNumber = document.getElementById('tutorialStepNumber');
        this.tutorialTitle = document.getElementById('tutorialTitle');
        this.tutorialDescription = document.getElementById('tutorialDescription');
        this.tutorialExample = document.getElementById('tutorialExample');
        this.currentTutorialStep = 0;
        this.tutorialSteps = [
            {
                title: 'Step 1: Enter Your Subject',
                description: 'Type the subject or topic you want to study. The app will automatically detect it and suggest relevant topics!',
                example: 'Try: "Massachusetts Permit Test" or "Biology"',
                element: 'subject',
                scrollTo: true
            },
            {
                title: 'Step 2: Choose Your Study Format',
                description: 'Select from 7 different study guide formats. Each format is designed for different learning styles and study needs.',
                example: 'Comprehensive guides include practice questions, while quizzes test your knowledge instantly.',
                element: 'studyType',
                scrollTo: false
            },
            {
                title: 'Step 3: Generate & Study',
                description: 'Click the generate button to create your personalized study guide. Then interact with practice questions to test your knowledge!',
                example: 'Try answering a question to see instant feedback and explanations.',
                element: 'generateBtn',
                scrollTo: false
            }
        ];
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
        
        // Tutorial events
        if (this.tutorialBtn) {
            this.tutorialBtn.addEventListener('click', () => this.startTutorial());
        }
        if (this.tutorialClose) {
            this.tutorialClose.addEventListener('click', () => this.closeTutorial());
        }
        if (this.tutorialSkip) {
            this.tutorialSkip.addEventListener('click', () => this.closeTutorial());
        }
        if (this.tutorialNext) {
            this.tutorialNext.addEventListener('click', () => this.nextTutorialStep());
        }
        if (this.tutorialPrev) {
            this.tutorialPrev.addEventListener('click', () => this.prevTutorialStep());
        }
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
    getDesiredQuestionCount() {
        if (this.numQuestions) {
            const value = parseInt(this.numQuestions.value, 10);
            if (!isNaN(value)) {
                return Math.min(Math.max(value, 1), 20);
            }
        }

        const difficulty = this.difficultySelect ? this.difficultySelect.value : 'intermediate';
        switch (difficulty) {
            case 'beginner':
                return 4;
            case 'advanced':
                return 6;
            default:
                return 5;
        }
    }

    createQuestionTemplates(topic, difficulty, subject) {
        const topicName = this.formatTopicName(topic);
        const specializedTemplates = this.getSpecializedTemplates(topicName, subject, difficulty);

        // If we have specialized templates, use those
        if (specializedTemplates && specializedTemplates.length > 0) {
            return specializedTemplates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        // Generate intelligent, topic-specific questions
        const topicKeywords = this.extractTopicKeywords(topicName, subject);
        const baseTemplates = this.generateIntelligentQuestions(topicName, topicKeywords, difficulty, subject);

        return baseTemplates.map(template => this.ensureMultipleChoice(template, topicName, subject));
    }

    extractTopicKeywords(topicName, subject) {
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        // Extract key concepts from topic name
        const keywords = [];
        const commonTerms = {
            'theory': 'theoretical framework',
            'law': 'scientific principle',
            'principle': 'fundamental concept',
            'process': 'step-by-step procedure',
            'system': 'organized structure',
            'function': 'purpose and operation',
            'structure': 'organization and components',
            'mechanism': 'how it works',
            'effect': 'outcome or result',
            'cause': 'origin or source',
            'relationship': 'connection or correlation',
            'difference': 'distinction or contrast',
            'similarity': 'common characteristics',
            'example': 'specific instance',
            'application': 'practical use'
        };

        // Check for common academic terms
        for (const [term, concept] of Object.entries(commonTerms)) {
            if (topicLower.includes(term)) {
                keywords.push(concept);
            }
        }

        // Subject-specific keywords
        if (subjectLower.includes('math') || subjectLower.includes('calculus') || subjectLower.includes('algebra')) {
            if (topicLower.match(/\b(function|equation|formula|derivative|integral|limit|graph)\b/)) {
                keywords.push('mathematical concept');
            }
        }
        if (subjectLower.includes('science') || subjectLower.includes('biology') || subjectLower.includes('chemistry') || subjectLower.includes('physics')) {
            if (topicLower.match(/\b(cell|molecule|atom|reaction|force|energy|wave)\b/)) {
                keywords.push('scientific concept');
            }
        }
        if (subjectLower.includes('history') || subjectLower.includes('social')) {
            if (topicLower.match(/\b(war|revolution|empire|civilization|event|period)\b/)) {
                keywords.push('historical context');
            }
        }

        return keywords.length > 0 ? keywords : ['key concept', 'important topic'];
    }

    generateIntelligentQuestions(topicName, keywords, difficulty, subject) {
        const questions = [];
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        // Generate realistic distractors based on topic analysis
        const distractors = this.generateRealisticDistractors(topicName, subject, keywords);
        
        // Question 1: Definition/Understanding
        const definitionHint = this.generateDefinitionHint(topicName, subject);
        questions.push({
                type: 'multiple-choice',
            question: `What best describes ${topicName}?`,
                options: [
                `${topicName} ${definitionHint}.`,
                distractors.definition[0],
                distractors.definition[1],
                distractors.definition[2]
                ],
                correctAnswer: 0,
            explanation: `${topicName} is an important concept in ${subject || 'this subject'}. To fully understand it, review its core definition, key characteristics, and how it's used in practice. Check the source links below for detailed explanations.`
        });

        // Question 2: Application/Use
        questions.push({
                type: 'multiple-choice',
            question: `When would you use ${topicName}?`,
                options: [
                `When you need to ${this.generateApplicationHint(topicName, subject)}.`,
                distractors.application[0],
                distractors.application[1],
                distractors.application[2]
                ],
                correctAnswer: 0,
            explanation: `${topicName} is used in specific contexts related to ${subject || 'this subject'}. Understanding when and how to apply it correctly is key to mastering this concept. Practice with examples to build your understanding.`
        });

        // Question 3: Key Components
        questions.push({
                type: 'essay',
            question: `What are the main components or key aspects of ${topicName} that you need to understand?`,
            answer: `The main components of ${topicName} include: (1) its core definition or purpose, (2) the ${keywords[0] || 'key principles'} that govern it, (3) how it relates to other concepts in ${subject || 'the subject'}, and (4) practical examples or applications. Focus on understanding each component and how they connect.`
        });

        // Question 4: Study Strategy
        questions.push({
                type: 'essay',
            question: `What study strategies would be most effective for mastering ${topicName}?`,
            answer: `Effective strategies for ${topicName} include: (1) Creating visual aids or diagrams to understand its structure, (2) Practicing with real examples from ${subject || 'your subject'}, (3) Connecting it to related concepts you already know, (4) Teaching it to someone else to test your understanding, and (5) Reviewing source materials and examples regularly.`
        });

        if (difficulty === 'intermediate' || difficulty === 'advanced') {
            // Question 5: Analysis/Comparison
            questions.push({
                type: 'essay',
                question: `How does ${topicName} relate to or differ from similar concepts in ${subject || 'this subject'}?`,
                answer: `To understand ${topicName}'s relationship to similar concepts, identify: (1) What makes ${topicName} unique, (2) What it shares with related topics, (3) When to use ${topicName} versus alternatives, and (4) How understanding ${topicName} helps you understand the broader subject. Compare and contrast with at least one related concept.`
            });
        }

        if (difficulty === 'advanced') {
            // Question 6: Critical Thinking
            questions.push({
                type: 'essay',
                question: `What are the limitations or potential misconceptions about ${topicName}, and how would you address them?`,
                answer: `Common limitations or misconceptions about ${topicName} include: (1) Oversimplifying its complexity, (2) Applying it incorrectly outside its intended context, (3) Confusing it with similar concepts. Address these by: understanding the full scope of ${topicName}, recognizing when it applies and when it doesn't, and clearly distinguishing it from related ideas.`
            });
        }

        return questions;
    }

    generateDefinitionHint(topicName, subject) {
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        // More specific definitions based on topic analysis
        if (topicLower.includes('law') || topicLower.includes('principle')) {
            if (subjectLower.includes('math') || subjectLower.includes('physics')) {
                return `is a fundamental ${subjectLower.includes('math') ? 'mathematical' : 'physical'} principle that describes a consistent relationship or pattern`;
            }
            return 'is a fundamental principle that governs behavior or establishes consistent patterns';
        }
        
        if (topicLower.includes('theory') || topicLower.includes('model')) {
            return 'is a theoretical framework that explains how something works or why it behaves a certain way';
        }
        
        if (topicLower.includes('process') || topicLower.includes('method') || topicLower.includes('procedure')) {
            return 'is a systematic approach or series of steps used to accomplish a specific goal';
        }
        
        if (topicLower.includes('function') || topicLower.includes('role')) {
            return 'describes the purpose, operation, or role of something within a larger system';
        }
        
        if (topicLower.includes('structure') || topicLower.includes('organization')) {
            return 'refers to how components are arranged, organized, or connected to form a whole';
        }
        
        if (topicLower.includes('effect') || topicLower.includes('impact') || topicLower.includes('result')) {
            return 'describes an outcome, consequence, or result that occurs under specific conditions';
        }
        
        if (topicLower.includes('cause') || topicLower.includes('origin') || topicLower.includes('source')) {
            return 'refers to the origin, source, or factor that leads to a particular outcome';
        }
        
        if (subjectLower.includes('math') || subjectLower.includes('calculus') || subjectLower.includes('algebra')) {
            // Slope-intercept form
            if ((topicLower.includes('slope') && topicLower.includes('intercept')) || topicLower === 'slope intercept') {
                return 'is the linear equation form y = mx + b, where m represents the slope (rate of change) and b represents the y-intercept (where the line crosses the y-axis)';
            }
            // Point-slope form
            if (topicLower.includes('point') && topicLower.includes('slope')) {
                return 'is the linear equation form y - y₁ = m(x - x₁), used when you know a point on the line and its slope';
            }
            // Standard form
            if (topicLower.includes('standard form') || (topicLower.includes('standard') && topicLower.includes('form'))) {
                return 'is the linear equation form Ax + By = C, where A, B, and C are integers, useful for solving systems of equations';
            }
            if (topicLower.includes('function')) {
                return 'is a mathematical relationship that maps inputs to outputs according to a specific rule';
            }
            if (topicLower.includes('equation')) {
                return 'is a mathematical statement that shows the equality between two expressions';
            }
            if (topicLower.includes('formula')) {
                return 'is a mathematical expression that calculates a specific value or relationship';
            }
            // Quadratic formula
            if (topicLower.includes('quadratic') && topicLower.includes('formula')) {
                return 'is the formula x = (-b ± √(b² - 4ac)) / 2a used to solve any quadratic equation ax² + bx + c = 0';
            }
            return 'is a mathematical concept that helps solve problems and understand quantitative relationships';
        }
        
        if (subjectLower.includes('science') || subjectLower.includes('biology')) {
            if (topicLower.includes('cell') || topicLower.includes('organism')) {
                return 'is a biological structure or system that performs specific functions in living organisms';
            }
            if (topicLower.includes('process') || topicLower.includes('mechanism')) {
                return 'is a biological process that occurs in living systems to maintain function or respond to changes';
            }
            return 'explains natural phenomena, biological processes, or how living systems function';
        }
        
        if (subjectLower.includes('chemistry')) {
            if (topicLower.includes('reaction') || topicLower.includes('bond')) {
                return 'describes how atoms or molecules interact, combine, or change to form new substances';
            }
            return 'describes chemical interactions, molecular behavior, or properties of matter';
        }
        
        if (subjectLower.includes('physics')) {
            if (topicLower.includes('force') || topicLower.includes('energy') || topicLower.includes('motion')) {
                return 'describes physical interactions, energy transformations, or motion in the natural world';
            }
            return 'explains physical forces, energy, motion, or fundamental properties of matter and space';
        }
        
        if (subjectLower.includes('history')) {
            if (topicLower.includes('war') || topicLower.includes('revolution') || topicLower.includes('event')) {
                return 'is a significant historical event that shaped societies, politics, or cultures';
            }
            if (topicLower.includes('period') || topicLower.includes('era')) {
                return 'is a historical period characterized by specific social, political, or cultural developments';
            }
            return 'provides context for historical events, their causes, effects, and significance';
        }
        
        // Default: more helpful generic definition
        return `is a key concept in ${subject || 'this subject'} that you should study thoroughly to understand its definition, characteristics, and applications`;
    }

    generateApplicationHint(topicName, subject) {
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        if (subjectLower.includes('math')) {
            return 'solve problems involving quantitative relationships or mathematical operations';
        }
        if (subjectLower.includes('science') || subjectLower.includes('biology')) {
            return 'explain biological processes, analyze living systems, or understand natural phenomena';
        }
        if (subjectLower.includes('chemistry')) {
            return 'predict chemical reactions, understand molecular behavior, or analyze chemical properties';
        }
        if (subjectLower.includes('physics')) {
            return 'analyze physical systems, predict motion or energy changes, or solve physics problems';
        }
        if (subjectLower.includes('history')) {
            return 'understand historical context, analyze causes and effects, or interpret historical significance';
        }
        if (topicLower.includes('law') || topicLower.includes('rule')) {
            return 'apply consistent principles or guidelines to solve problems or make decisions';
        }
        if (topicLower.includes('process') || topicLower.includes('method')) {
            return 'follow a systematic approach to accomplish a task or solve a problem';
        }
        
        return 'apply this concept to solve problems or understand related topics in this subject';
    }

    generateRealisticDistractors(topicName, subject, keywords) {
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        const distractors = {
            definition: [],
            application: []
        };
        
        // Generate topic-specific distractors based on actual topic content
        const topicSpecificDistractors = this.getTopicSpecificDistractors(topicName, subject);
        
        if (topicSpecificDistractors.definition.length > 0) {
            distractors.definition = topicSpecificDistractors.definition;
            distractors.application = topicSpecificDistractors.application;
            return distractors;
        }
        
        // Fallback to general distractors if no specific ones found
        const definitionMisconceptions = [
            `${topicName} is the same as ${this.getRelatedConcept(topicName, subject)} and can be used interchangeably.`,
            `${topicName} only applies in theoretical situations and has no real-world relevance.`,
            `${topicName} is a simple concept that doesn't require deep understanding, just memorization.`
        ];
        
        const applicationMisconceptions = [
            `You would use ${topicName} when working with ${this.getWrongContext(topicName, subject)}, which is incorrect.`,
            `${topicName} should be used in all situations related to ${subject || 'this subject'}, regardless of context.`,
            `${topicName} is only useful for advanced students and beginners should avoid it.`
        ];
        
        // Customize based on topic type
        if (topicLower.includes('law') || topicLower.includes('principle')) {
            definitionMisconceptions[0] = `${topicName} is just a suggestion and doesn't always apply.`;
            definitionMisconceptions[1] = `${topicName} only works in ideal conditions and never in real situations.`;
        }
        
        if (topicLower.includes('theory')) {
            definitionMisconceptions[0] = `${topicName} is just an opinion and not based on evidence.`;
            definitionMisconceptions[1] = `${topicName} has been proven false and is no longer relevant.`;
        }
        
        if (subjectLower.includes('math')) {
            applicationMisconceptions[0] = `You would use ${topicName} for all types of calculations, even when simpler methods exist.`;
            applicationMisconceptions[1] = `${topicName} is only needed for complex problems, never for basic calculations.`;
        }
        
        distractors.definition = definitionMisconceptions;
        distractors.application = applicationMisconceptions;
        
        return distractors;
    }

    getTopicSpecificDistractors(topicName, subject) {
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        const distractors = {
            definition: [],
            application: []
        };
        
        // Math-specific topics
        if (subjectLower.includes('math') || subjectLower.includes('algebra') || subjectLower.includes('calculus')) {
            // Slope-intercept form
            if (topicLower.includes('slope') && topicLower.includes('intercept')) {
                distractors.definition = [
                    `${topicName} form (y = mx + b) is the same as point-slope form and can be used interchangeably.`,
                    `In ${topicName} form, the slope (m) must always be positive and the y-intercept (b) must always be negative.`,
                    `${topicName} form can only be used when you know both the slope and y-intercept, never with just one piece of information.`
                ];
                distractors.application = [
                    `You would use ${topicName} form when you only know two points on a line, which requires converting to point-slope form first.`,
                    `${topicName} form should be used for all linear equations, even when standard form (Ax + By = C) is more appropriate.`,
                    `${topicName} form is only useful for graphing, never for solving systems of equations or finding intersections.`
                ];
                return distractors;
            }
            
            // Quadratic formula
            if (topicLower.includes('quadratic') && topicLower.includes('formula')) {
                distractors.definition = [
                    `The quadratic formula can only be used when the equation is already in standard form (ax² + bx + c = 0).`,
                    `The quadratic formula always gives two real solutions, never imaginary or complex numbers.`,
                    `The quadratic formula is the same as factoring and can be used interchangeably for all quadratic equations.`
                ];
                distractors.application = [
                    `You would use the quadratic formula when the quadratic expression can be easily factored, which is inefficient.`,
                    `The quadratic formula should be used for all polynomial equations, not just quadratics.`,
                    `The quadratic formula is only needed when the discriminant is positive, never for negative discriminants.`
                ];
                return distractors;
            }
            
            // Derivatives
            if (topicLower.includes('derivative')) {
                distractors.definition = [
                    `A derivative represents the area under a curve, which is actually what an integral represents.`,
                    `Derivatives can only be found for polynomial functions, not for trigonometric or exponential functions.`,
                    `The derivative of a function at a point is the same as the function's value at that point.`
                ];
                distractors.application = [
                    `You would use derivatives to find the area between curves, which requires integration instead.`,
                    `Derivatives should be used to find the maximum or minimum values directly, without checking critical points.`,
                    `Derivatives are only useful for finding rates of change, never for optimization problems.`
                ];
                return distractors;
            }
            
            // Functions
            if (topicLower.includes('function')) {
                distractors.definition = [
                    `A function is any relationship between two variables, even if one input gives multiple outputs.`,
                    `Functions can only be represented as equations, never as graphs, tables, or mappings.`,
                    `A function and a relation are the same thing and can be used interchangeably.`
                ];
                distractors.application = [
                    `You would use functions to represent situations where one input can have multiple outputs, which violates the definition.`,
                    `Functions should be used for all mathematical relationships, even non-functional ones.`,
                    `Functions are only useful for linear relationships, never for quadratic, exponential, or other types.`
                ];
                return distractors;
            }
        }
        
        // Science-specific topics
        if (subjectLower.includes('science') || subjectLower.includes('biology')) {
            // Photosynthesis
            if (topicLower.includes('photosynthesis')) {
                distractors.definition = [
                    `Photosynthesis is the process by which plants break down glucose to release energy, which is actually cellular respiration.`,
                    `Photosynthesis only occurs in leaves, never in stems, roots, or other plant parts that contain chlorophyll.`,
                    `Photosynthesis produces oxygen as a waste product that plants don't need, which is incorrect.`
                ];
                distractors.application = [
                    `You would use photosynthesis to explain how plants get energy at night, when they actually use stored glucose.`,
                    `Photosynthesis should be used to explain all plant processes, including growth and reproduction directly.`,
                    `Photosynthesis is only relevant for green plants, never for algae or other photosynthetic organisms.`
                ];
                return distractors;
            }
        }
        
        // History-specific topics
        if (subjectLower.includes('history')) {
            // World War topics
            if (topicLower.includes('world war') || topicLower.includes('ww')) {
                distractors.definition = [
                    `World War I and World War II had the same causes and can be studied as identical conflicts.`,
                    `World War I was caused primarily by economic factors, ignoring the complex political and diplomatic causes.`,
                    `World War II was inevitable from the start of World War I, which oversimplifies the historical timeline.`
                ];
                distractors.application = [
                    `You would use World War causes to explain all modern conflicts, which ignores unique historical contexts.`,
                    `World War analysis should focus only on military strategy, ignoring social, economic, and political impacts.`,
                    `World War studies are only relevant for European history, never for understanding global developments.`
                ];
                return distractors;
            }
        }
        
        return { definition: [], application: [] };
    }

    getRelatedConcept(topicName, subject) {
        // Return a related but different concept to create plausible confusion
        const topicLower = topicName.toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        if (topicLower.includes('law')) return 'a rule or guideline';
        if (topicLower.includes('theory')) return 'a hypothesis';
        if (topicLower.includes('process')) return 'a procedure';
        if (topicLower.includes('function')) return 'a purpose';
        if (topicLower.includes('structure')) return 'an organization';
        
        if (subjectLower.includes('math')) {
            if (topicLower.includes('function')) return 'an equation';
            if (topicLower.includes('equation')) return 'a formula';
        }
        
        return 'a similar concept';
    }

    getWrongContext(topicName, subject) {
        // Return a wrong context where the topic shouldn't be used
        const subjectLower = (subject || '').toLowerCase();
        
        if (subjectLower.includes('math')) {
            return 'qualitative analysis or non-numerical problems';
        }
        if (subjectLower.includes('science')) {
            return 'mathematical proofs or abstract reasoning';
        }
        if (subjectLower.includes('history')) {
            return 'scientific experiments or mathematical calculations';
        }
        
        return 'unrelated subject areas';
    }

    generateSourceLinks(topic, subject) {
        const topicEncoded = encodeURIComponent(topic);
        const subjectLower = (subject || '').toLowerCase();
        const sources = [];

        // Wikipedia - always include
        sources.push({
            name: 'Wikipedia',
            url: `https://en.wikipedia.org/wiki/${topicEncoded}`,
            icon: 'fas fa-book',
            description: 'Comprehensive overview and detailed information'
        });

        // Subject-specific sources
        if (subjectLower.includes('math') || subjectLower.includes('calculus') || subjectLower.includes('algebra')) {
            sources.push({
                name: 'Khan Academy',
                url: `https://www.khanacademy.org/search?page_search_query=${topicEncoded}`,
                icon: 'fas fa-graduation-cap',
                description: 'Video tutorials and practice exercises'
            });
            sources.push({
                name: 'Wolfram MathWorld',
                url: `https://mathworld.wolfram.com/search/?query=${topicEncoded}`,
                icon: 'fas fa-calculator',
                description: 'Mathematical definitions and examples'
            });
        }

        if (subjectLower.includes('science') || subjectLower.includes('biology') || subjectLower.includes('chemistry') || subjectLower.includes('physics')) {
            sources.push({
                name: 'Khan Academy',
                url: `https://www.khanacademy.org/search?page_search_query=${topicEncoded}`,
                icon: 'fas fa-graduation-cap',
                description: 'Video tutorials and interactive lessons'
            });
            sources.push({
                name: 'Britannica',
                url: `https://www.britannica.com/search?query=${topicEncoded}`,
                icon: 'fas fa-globe',
                description: 'Authoritative encyclopedia articles'
            });
        }

        if (subjectLower.includes('history') || subjectLower.includes('social')) {
            sources.push({
                name: 'Britannica',
                url: `https://www.britannica.com/search?query=${topicEncoded}`,
                icon: 'fas fa-globe',
                description: 'Historical context and detailed articles'
            });
        }

        // General educational sources
        sources.push({
            name: 'Google Scholar',
            url: `https://scholar.google.com/scholar?q=${topicEncoded}`,
            icon: 'fas fa-search',
            description: 'Academic papers and research articles'
        });

        sources.push({
            name: 'YouTube Education',
            url: `https://www.youtube.com/results?search_query=${topicEncoded}+explained`,
            icon: 'fab fa-youtube',
            description: 'Video explanations and tutorials'
        });

        return sources;
    }

    getSpecializedTemplates(topicName, subject, difficulty) {
        const topicLower = topicName.toLowerCase();
        const isChemistry = this.isChemistryTopic(topicName, subject);

        if (!isChemistry) {
            return null;
        }

        const templates = [];

        if (this.topicContainsAny(topicLower, ['bond', 'ionic', 'covalent', 'metallic'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `Which statement correctly compares ionic and covalent bonds?`,
                    options: [
                        `Ionic bonds form when electrons transfer from a metal to a nonmetal, while covalent bonds share electrons between two nonmetals.`,
                        `Ionic bonds share electron pairs between nonmetals, while covalent bonds transfer electrons from metals to nonmetals.`,
                        `Both ionic and covalent bonds require only metallic elements.`,
                        `Covalent bonds occur when electrons are lost and gained between metals and nonmetals.`
                    ],
                    correctAnswer: 0,
                    explanation: `Ionic bonding results from electron transfer between metals and nonmetals, whereas covalent bonding involves sharing electron pairs between nonmetal atoms.`
                },
                {
                    type: 'multiple-choice',
                    question: `Which factor best predicts the polarity of a covalent bond?`,
                    options: [
                        `The difference in electronegativity between the two bonded atoms.`,
                        `The total number of valence electrons present in the molecule.`,
                        `The color of the elements involved in the bond.`,
                        `The physical state (solid, liquid, gas) of the compound at room temperature.`
                    ],
                    correctAnswer: 0,
                    explanation: `Larger electronegativity differences create more polar bonds because electron density is drawn toward the more electronegative atom.`
                },
                {
                    type: 'essay',
                    question: `Describe how electronegativity differences help you predict whether a bond will be ionic, polar covalent, or nonpolar covalent.`,
                    answer: `Large electronegativity differences (≈1.7 or greater) suggest ionic bonding, moderate differences create polar covalent bonds, and very small differences produce nearly nonpolar sharing of electrons.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Explain how lattice energy and ion size influence the strength of ionic bonds in ${topicName}.`,
                    answer: `Higher lattice energy—favored by small, highly charged ions—produces stronger ionic bonds. Larger ions or lower charges reduce lattice energy and make the ionic compound easier to separate.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['periodic', 'trend', 'electronegativity', 'ionization', 'atomic radius'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `Which periodic trend decreases from left to right across a period?`,
                    options: [
                        `Atomic radius`,
                        `Electronegativity`,
                        `Ionization energy`,
                        `Effective nuclear charge`
                    ],
                    correctAnswer: 0,
                    explanation: `From left to right, increasing effective nuclear charge pulls electrons closer, decreasing atomic radius while electronegativity and ionization energy generally increase.`
                },
                {
                    type: 'multiple-choice',
                    question: `Which statement explains why ionization energy increases across a period?`,
                    options: [
                        `Nucleus-electron attraction grows stronger as effective nuclear charge increases, requiring more energy to remove an electron.`,
                        `Electrons move farther from the nucleus, making them easier to remove.`,
                        `Additional energy levels are added, shielding the valence electrons.`,
                        `Electron-electron repulsion decreases, so electrons are lost more easily.`
                    ],
                    correctAnswer: 0,
                    explanation: `Higher effective nuclear charge across a period pulls valence electrons closer, so more energy is needed to remove them.`
                },
                {
                    type: 'essay',
                    question: `Explain the relationship between atomic radius and electronegativity across a period and down a group.`,
                    answer: `Across a period, shrinking radius leads to stronger attraction for bonding electrons (higher electronegativity). Down a group, larger atomic radius and increased shielding reduce electronegativity.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Predict how ionization energy changes when moving diagonally across the periodic table and justify your reasoning.`,
                    answer: `Moving diagonally up and to the right generally increases ionization energy because effective nuclear charge increases while atomic radius decreases.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['acid', 'base', 'ph', 'titration'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `Which statement describes a Bronsted-Lowry acid-base reaction?`,
                    options: [
                        `An acid donates a proton and a base accepts a proton.`,
                        `An acid accepts a proton and a base donates a proton.`,
                        `Both acids and bases donate protons simultaneously.`,
                        `Neither acids nor bases exchange protons.`
                    ],
                    correctAnswer: 0,
                    explanation: `Bronsted-Lowry theory defines acids as proton donors and bases as proton acceptors.`
                },
                {
                    type: 'multiple-choice',
                    question: `What happens at the equivalence point of a strong acid-strong base titration?`,
                    options: [
                        `Moles of acid equal moles of base, producing a neutral salt solution.`,
                        `The solution becomes strongly acidic.`,
                        `The solution becomes strongly basic immediately.`,
                        `The reaction stops before products form.`
                    ],
                    correctAnswer: 0,
                    explanation: `At equivalence, stoichiometric amounts of acid and base have reacted to form neutral products (water and a salt).`
                },
                {
                    type: 'essay',
                    question: `Describe how buffer solutions resist changes in pH and give an example related to ${topicName}.`,
                    answer: `Buffers contain a weak acid-base conjugate pair that consumes added H⁺ or OH⁻, limiting pH change. For ${topicName}, identify the relevant conjugate pair and explain how it reacts with added acid or base.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Explain how Ka or Kb values help compare the strength of species involved in ${topicName}.`,
                    answer: `Larger Ka (or smaller pKa) indicates a stronger acid. For ${topicName}, analyze the numerical values to justify which side of the equilibrium is favored.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['stoichi', 'mole', 'limiting', 'yield'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `What is the first step when solving a stoichiometry problem involving ${topicName}?`,
                    options: [
                        `Convert all given quantities to moles using molar mass or molar relationships.`,
                        `Randomly select coefficients from the balanced equation.`,
                        `Convert moles directly to mass without using the balanced equation.`,
                        `Ignore the balanced chemical equation entirely.`
                    ],
                    correctAnswer: 0,
                    explanation: `Stoichiometry problems begin by converting to moles so that balanced mole ratios can be applied.`
                },
                {
                    type: 'multiple-choice',
                    question: `How do you identify the limiting reagent in a reaction?`,
                    options: [
                        `Compare the mole ratios required by the balanced equation to the moles actually available.`,
                        `Choose the reactant with the greatest molar mass.`,
                        `Pick the reactant present in the largest volume.`,
                        `Assume the reactant with the highest coefficient is limiting.`
                    ],
                    correctAnswer: 0,
                    explanation: `The limiting reagent produces the smallest amount of product when stoichiometric ratios are applied to the available moles.`
                },
                {
                    type: 'essay',
                    question: `Summarize the steps for converting grams of a reactant to liters of gaseous product at STP for ${topicName}.`,
                    answer: `Convert grams to moles, use the balanced equation to find product moles, then multiply by 22.4 L/mol (at STP) to obtain the gas volume.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Explain how percent yield relates to limiting reactant calculations in ${topicName}.`,
                    answer: `Percent yield compares actual product to theoretical yield from the limiting reagent. Discuss how measurement error or side reactions lower the percent yield.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['equilibrium', 'le chatelier', 'ksp', 'kc', 'kp'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `According to Le Chatelier's principle, how does increasing reactant concentration affect an equilibrium system?`,
                    options: [
                        `The system shifts toward products to consume the added reactants.`,
                        `The system shifts toward reactants to produce more reactants.`,
                        `The equilibrium constant immediately changes.`,
                        `The system becomes static and no longer responds.`
                    ],
                    correctAnswer: 0,
                    explanation: `Equilibrium shifts in the direction that counteracts the imposed change, so adding reactant drives the reaction forward.`
                },
                {
                    type: 'multiple-choice',
                    question: `Which statement about the equilibrium constant K is correct?`,
                    options: [
                        `K depends only on temperature and remains unchanged by the addition of catalysts or concentration changes.`,
                        `K increases when products are removed from the system.`,
                        `K decreases when more reactants are added.`,
                        `K equals zero at equilibrium.`
                    ],
                    correctAnswer: 0,
                    explanation: `Only temperature affects K; other changes cause temporary shifts until a new equilibrium is reached.`
                },
                {
                    type: 'essay',
                    question: `Describe how to set up an ICE (Initial-Change-Equilibrium) table for ${topicName}.`,
                    answer: `List initial concentrations, define the change using stoichiometric coefficients, and express equilibrium values in terms of x, then substitute into the equilibrium expression to solve for x.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Explain how temperature changes affect equilibrium position for an exothermic versus endothermic ${topicName} reaction.`,
                    answer: `Increasing temperature shifts an endothermic equilibrium toward products and an exothermic equilibrium toward reactants because heat is treated like a reactant or product in Le Chatelier's principle.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['thermo', 'enthalpy', 'entropy', 'gibbs'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `Which expression correctly relates Gibbs free energy, enthalpy, and entropy changes?`,
                    options: [
                        `ΔG = ΔH − TΔS`,
                        `ΔG = ΔH + TΔS`,
                        `ΔG = ΔH × ΔS`,
                        `ΔG = ΔH / TΔS`
                    ],
                    correctAnswer: 0,
                    explanation: `Spontaneity at constant temperature and pressure is predicted by ΔG = ΔH − TΔS.`
                },
                {
                    type: 'multiple-choice',
                    question: `A reaction has ΔH < 0 and ΔS < 0. Under which condition will it be spontaneous?`,
                    options: [
                        `At low temperatures where the negative ΔH term dominates.`,
                        `At high temperatures where the −TΔS term dominates.`,
                        `Only when pressure decreases dramatically.`,
                        `Never; such reactions cannot be spontaneous.`
                    ],
                    correctAnswer: 0,
                    explanation: `When both enthalpy and entropy are negative, spontaneity is favored at low temperatures so that the exothermic enthalpy term outweighs the unfavorable entropy term.`
                },
                {
                    type: 'essay',
                    question: `Explain how calorimetry experiments determine ΔH for ${topicName}.`,
                    answer: `Measure temperature change in a known mass using q = mcΔT, account for solution or calorimeter heat capacity, and divide by moles reacted to find molar enthalpy.`
                }
            );

            if (difficulty === 'advanced') {
                templates.push({
                    type: 'essay',
                    question: `Discuss how coupling reactions with positive ΔG to reactions with negative ΔG can make ${topicName} processes spontaneous.`,
                    answer: `Biochemical and industrial reactions pair non-spontaneous steps with highly exergonic reactions so that the sum of ΔG values becomes negative.`
                });
            }

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        if (this.topicContainsAny(topicLower, ['gas law', 'pressure', 'boyle', 'charles', 'ideal gas'])) {
            templates.push(
                {
                    type: 'multiple-choice',
                    question: `According to Boyle's law, what happens to gas volume when pressure increases at constant temperature?`,
                    options: [
                        `Volume decreases because pressure and volume are inversely proportional.`,
                        `Volume increases because pressure and volume are directly proportional.`,
                        `Volume remains constant regardless of pressure changes.`,
                        `Volume becomes zero at any non-zero pressure.`
                    ],
                    correctAnswer: 0,
                    explanation: `Boyle's law states P ∝ 1/V for a fixed amount of gas at constant temperature.`
                },
                {
                    type: 'multiple-choice',
                    question: `Which equation combines pressure, volume, moles, and temperature for ideal gases?`,
                    options: [
                        `PV = nRT`,
                        `P = mv`,
                        `V = IR`,
                        `P = nT`
                    ],
                    correctAnswer: 0,
                    explanation: `The ideal gas law relates the four state variables: pressure, volume, moles, and temperature.`
                },
                {
                    type: 'essay',
                    question: `Describe how to correct ideal gas calculations for real gases at high pressure.`,
                    answer: `Use the van der Waals equation or other real-gas corrections that account for particle volume (b) and intermolecular attractions (a).`
                }
            );

            return templates.map(template => this.ensureMultipleChoice(template, topicName, subject));
        }

        const generalChemistry = [
            {
                type: 'multiple-choice',
                question: `Which laboratory safety practice is essential when working with ${topicName}?`,
                options: [
                    `Wear appropriate PPE and review the material safety data before starting.`,
                    `Taste reagents to identify them.`,
                    `Ignore spills until the end of the experiment.`,
                    `Mix unknown chemicals without checking compatibility.`
                ],
                correctAnswer: 0,
                explanation: `Safe lab practices prevent accidents and ensure accurate data when studying ${topicName}.`
            },
            {
                type: 'essay',
                question: `Explain one everyday application that illustrates ${topicName}.`,
                answer: `Describe a device, product, or natural process where ${topicName} is the central idea and explain the underlying chemistry.`
            }
        ];

        if (difficulty === 'advanced') {
            generalChemistry.push({
                type: 'essay',
                question: `Propose an investigative lab procedure to explore ${topicName}.`,
                answer: `Outline a hypothesis, controlled variables, data collection method, and analysis that would deepen understanding of ${topicName}.`
            });
        }

        return generalChemistry.map(template => this.ensureMultipleChoice(template, topicName, subject));
    }

    generateExtendedQuestion(topic, index, difficulty, subject) {
        const topicName = this.formatTopicName(topic);
        const questionNumber = index + 1;

        if (this.isChemistryTopic(topicName, subject)) {
            const chemPrompts = [
                {
                    type: 'essay',
                    question: `Discuss how temperature, pressure, or concentration changes could influence ${topicName}.`,
                    answer: `Use collision theory or Le Chatelier's principle to explain how changing conditions alter reaction rates, equilibrium position, or particle arrangement for ${topicName}.`
                },
                {
                    type: 'essay',
                    question: `Describe an experiment that could confirm a key property of ${topicName}.`,
                    answer: `Outline materials, measurements, and expected observations that would verify the defining property of ${topicName}.`
                },
                {
                    type: 'essay',
                    question: `Predict how ${topicName} would be represented on a potential energy or phase diagram and explain your reasoning.`,
                    answer: `Identify the relevant regions or activation barriers on the diagram and connect them to the behavior of ${topicName}.`
                }
            ];

            if (difficulty === 'advanced') {
                chemPrompts.push({
                    type: 'essay',
                    question: `Relate ${topicName} to a real industrial or biochemical process and discuss efficiency or safety considerations.`,
                    answer: `Explain how ${topicName} appears in manufacturing, environmental systems, or metabolism, highlighting why controlling conditions is critical.`
                });
            }

            const template = chemPrompts[index % chemPrompts.length];
            return this.ensureMultipleChoice(template, topicName, subject);
        }

        const prompts = [
            {
                type: 'essay',
                question: `Identify an exam-style question #${questionNumber} you expect to see about ${topicName}, and outline how you would answer it.`,
                answer: `Predict a likely prompt (definition, application, or evaluation) and draft the key points you would include when answering about ${topicName}.`
            },
            {
                type: 'essay',
                question: `Summarize the biggest insight you have gained from studying ${topicName} so far.`,
                answer: `Explain how your understanding of ${topicName} has evolved, and how that insight influences the rest of the course.`
            },
            {
                type: 'essay',
                question: `List two exam traps related to ${topicName} and describe how you will avoid them.`,
                answer: `Identify misunderstandings or careless mistakes people often make about ${topicName}, then create specific checkpoints to prevent them.`
            }
        ];

        if (difficulty === 'advanced') {
            prompts.push({
                type: 'essay',
                question: `Connect ${topicName} to another advanced topic and explain how they reinforce one another.`,
                answer: `Show how mastering ${topicName} supports complex analysis, cross-topic synthesis, or research discussions within the course.`
            });
        }

        const template = prompts[index % prompts.length];
        return this.ensureMultipleChoice(template, topicName, subject);
    }

    cloneQuestion(template) {
        if (template.type === 'multiple-choice') {
            return {
                question: template.question,
                type: 'multiple-choice',
                options: [...template.options],
                correctAnswer: template.correctAnswer,
                explanation: template.explanation
            };
        }

        return { ...template };
    }

    ensureMultipleChoice(template, topicName, subject) {
        if (template.type === 'multiple-choice' && template.options && template.options.length > 0) {
            // Shuffle existing options and update correct answer index
            const originalCorrectIndex = template.correctAnswer || 0;
            const originalCorrectAnswer = template.options[originalCorrectIndex];
            const shuffledOptions = this.shuffleArray([...template.options]);
            const newCorrectIndex = shuffledOptions.indexOf(originalCorrectAnswer);
            
            return {
                question: template.question,
                type: 'multiple-choice',
                options: shuffledOptions,
                correctAnswer: newCorrectIndex >= 0 ? newCorrectIndex : 0,
                explanation: template.explanation || originalCorrectAnswer
            };
        }

        const correctText = template.answer || template.explanation || `Provide the accurate explanation for ${topicName}.`;
        const genericDistractors = this.generateGenericDistractors(topicName, subject, correctText);

        // Create options array with correct answer first
        const options = [correctText, ...genericDistractors];
        
        // Shuffle options and find new correct answer index
        const shuffledOptions = this.shuffleArray(options);
        const correctAnswerIndex = shuffledOptions.indexOf(correctText);

        return {
            question: template.question,
            type: 'multiple-choice',
            options: shuffledOptions,
            correctAnswer: correctAnswerIndex >= 0 ? correctAnswerIndex : 0,
            explanation: correctText
        };
    }

    generateGenericDistractors(topicName, subject, correctText) {
        const topicRef = topicName || 'the topic';
        const topicLower = (topicName || '').toLowerCase();
        const subjectLower = (subject || '').toLowerCase();
        
        // Generate more realistic distractors based on common misconceptions
        const distractors = [];
        
        // Distractor 1: Oversimplification or missing key details
        if (topicLower.includes('law') || topicLower.includes('principle')) {
            distractors.push(`${topicRef} is optional and can be ignored in most situations.`);
        } else if (topicLower.includes('theory')) {
            distractors.push(`${topicRef} is just speculation without any supporting evidence.`);
        } else if (topicLower.includes('process') || topicLower.includes('method')) {
            distractors.push(`${topicRef} can be skipped or done in any order without affecting the result.`);
        } else {
            distractors.push(`A simplified explanation that misses important details about ${topicRef}.`);
        }
        
        // Distractor 2: Confusion with related concepts
        const relatedConcept = this.getRelatedConcept(topicName, subject);
        distractors.push(`${topicRef} is essentially the same as ${relatedConcept}, which is incorrect.`);
        
        // Distractor 3: Wrong application or context
        if (subjectLower.includes('math')) {
            distractors.push(`${topicRef} is only used for theoretical problems and never in practical applications.`);
        } else if (subjectLower.includes('science')) {
            distractors.push(`${topicRef} applies to all scientific fields equally, regardless of context.`);
        } else {
            distractors.push(`An explanation that applies ${topicRef} incorrectly or in the wrong context.`);
        }
        
        // Ensure we have exactly 3 unique distractors
        const uniqueDistractors = [];
        for (let i = 0; i < distractors.length && uniqueDistractors.length < 3; i++) {
            if (!distractors[i].includes(correctText) && !uniqueDistractors.includes(distractors[i])) {
                uniqueDistractors.push(distractors[i]);
            }
        }
        
        // Fill remaining slots if needed
        while (uniqueDistractors.length < 3) {
            const fallback = `A common misconception about ${topicRef} that many students believe.`;
            if (!fallback.includes(correctText) && !uniqueDistractors.includes(fallback)) {
                uniqueDistractors.push(fallback);
            } else {
                uniqueDistractors.push(`An incorrect understanding of ${topicRef} that doesn't match the actual definition.`);
            }
        }

        return uniqueDistractors.slice(0, 3);
    }

    formatTopicName(topic) {
        if (!topic) {
            return 'this topic';
        }

        const trimmed = topic.trim();
        if (!trimmed) {
            return 'this topic';
        }

        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    }

    topicContainsAny(topicLower, keywords) {
        return keywords.some(keyword => topicLower.includes(keyword));
    }

    isChemistryTopic(topicName, subject) {
        const normalizedSubject = (subject || '').toLowerCase();
        const topicLower = topicName.toLowerCase();
        const chemistryKeywords = [
            'chem', 'bond', 'ionic', 'covalent', 'metallic', 'acid', 'base', 'ph', 'titration',
            'stoichi', 'mole', 'equilibrium', 'reaction', 'enthalpy', 'entropy', 'gibbs',
            'periodic', 'electron', 'atomic', 'molecule', 'gas', 'pressure', 'thermo',
            'oxidation', 'reduction', 'redox', 'solution', 'solubility', 'kinetics', 'rate'
        ];

        return normalizedSubject.includes('chem') || this.topicContainsAny(topicLower, chemistryKeywords);
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
            practiceQuestions: this.generatePracticeQuestions(topic, difficulty, this.subjectInput.value.trim()),
            sources: this.generateSourceLinks(topic, this.subjectInput.value.trim())
        };

        return content;
    }

    generateTopicContentFromRealData(topicName, questions, tips) {
        // Get max questions from user setting or default to all
        const maxQuestions = this.getDesiredQuestionCount();
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
            
            const subjectText = this.subjectInput ? this.subjectInput.value.trim() : '';
            return this.ensureMultipleChoice(question, topicName, subjectText);
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
            practiceQuestions: practiceQuestions,
            sources: this.generateSourceLinks(topicName, this.subjectInput ? this.subjectInput.value.trim() : '')
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

    generatePracticeQuestions(topic, difficulty, subject) {
        const desiredCount = this.getDesiredQuestionCount();
        const baseTemplates = this.createQuestionTemplates(topic, difficulty, subject);
        const questions = [];

        let index = 0;
        while (questions.length < desiredCount) {
            let template;
            if (index < baseTemplates.length) {
                template = baseTemplates[index];
            } else {
                template = this.generateExtendedQuestion(topic, index, difficulty, subject);
            }

            questions.push(this.cloneQuestion(template));
            index++;
        }

        return questions;
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
            this.attachQuestionListeners(this.modalContent);
            this.attachShowAnswerListeners(this.modalContent);
        } else {
            this.studyGuide.innerHTML = html;
            this.outputPanel.style.display = 'block';
            this.outputPanel.scrollIntoView({ behavior: 'smooth' });
            this.attachQuestionListeners(this.studyGuide);
            this.attachShowAnswerListeners(this.studyGuide);
            
            // Attach event listeners for interactive flashcards and quiz
            this.attachInteractiveListeners();
        }
    }
    
    attachInteractiveListeners() {
        // This is now handled by attachFlashcardListeners and attachQuizListeners
        // which are called directly from generateInteractiveFlashcards and generateQuiz
    }
    
    attachQuestionListeners(container) {
        if (!container) return;
        const allMcqOptions = container.querySelectorAll('.mcq-option');
        allMcqOptions.forEach(option => {
            option.addEventListener('click', () => this.handleAnswerClick(option));
        });
    }

    attachShowAnswerListeners(container) {
        if (!container) return;
        const showAnswerButtons = container.querySelectorAll('.show-answer-btn[data-action="show-answer"]');
        showAnswerButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const practiceQuestion = button.closest('.practice-question');
                if (!practiceQuestion) {
                    return;
                }
                const answerSection = practiceQuestion.querySelector('.answer-section');
                if (answerSection) {
                    answerSection.style.display = 'block';
                }
                button.style.display = 'none';
            }, { once: true });
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
            // Don't show explanation if answer is correct
        } else {
            clickedOption.classList.add('wrong-answer');
            // Also highlight the correct answer in green
            correctAnswerOption.classList.add('correct-answer');
            
            // Show explanation only when answer is wrong
            if (explanation) {
                explanation.style.display = 'block';
            }
        }
        
        // Show correct badge
        if (correctBadge) {
            correctBadge.style.display = 'inline-block';
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
                                            <button class="show-answer-btn" data-action="show-answer">
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
                        
                        ${topic.sources && topic.sources.length > 0 ? `
                        <div class="sources-section">
                            <p class="section-label"><strong>🔗 Learn More - Helpful Resources:</strong></p>
                            <div class="sources-grid">
                                ${topic.sources.map(source => `
                                    <a href="${source.url}" target="_blank" rel="noopener noreferrer" class="source-link">
                                        <i class="${source.icon}"></i>
                                        <div class="source-content">
                                            <strong>${source.name}</strong>
                                            <span>${source.description}</span>
                                        </div>
                                        <i class="fas fa-external-link-alt source-external"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
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
        // If modal is open, print that; otherwise print the page
        if (this.studyModal && this.studyModal.style.display !== 'none') {
            // Close modal temporarily, print, then reopen
            const wasOpen = true;
        window.print();
        } else {
            window.print();
        }
        this.showNotification('Print dialog opened!', 'success');
    }

    exportToPDF() {
        // Get content from modal if it's open, otherwise from output panel
        let studyGuideContent;
        if (this.studyModal.style.display !== 'none' && this.modalContent) {
            studyGuideContent = this.modalContent.innerHTML;
        } else if (this.studyGuide) {
            studyGuideContent = this.studyGuide.innerHTML;
        } else {
            this.showNotification('No study guide to export', 'error');
            return;
        }
        
        // Simple PDF export using browser's print functionality
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            this.showNotification('Please allow popups to export PDF', 'error');
            return;
        }
        
        const subject = this.subjectInput ? this.subjectInput.value : 'Study Guide';
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Study Guide - ${subject}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                    .study-guide-header { text-align: center; margin-bottom: 30px; }
                    .study-guide-title { font-size: 24px; color: #333; font-weight: bold; }
                    .study-guide-subtitle { color: #666; margin-top: 10px; }
                    .section-title { font-size: 18px; color: #333; margin-top: 30px; margin-bottom: 15px; border-bottom: 2px solid #ddd; padding-bottom: 5px; }
                    .topic-card { margin-bottom: 25px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
                    .topic-title { font-size: 16px; font-weight: bold; color: #333; margin-bottom: 10px; }
                    ul { margin-left: 20px; margin-top: 10px; }
                    li { margin-bottom: 5px; }
                    .practice-question { margin: 15px 0; padding: 10px; background: #f9f9f9; border-radius: 5px; }
                    .question-text { font-weight: bold; margin-bottom: 10px; }
                    .mcq-option { margin: 5px 0; padding: 5px; }
                    .answer-box { background: #e8f4f8; padding: 10px; border-radius: 5px; margin-top: 10px; }
                    @media print {
                        body { margin: 0; }
                        .topic-card { page-break-inside: avoid; }
                    }
                </style>
            </head>
            <body>
                ${studyGuideContent}
            </body>
            </html>
        `);
        
        printWindow.document.close();
        setTimeout(() => {
        printWindow.print();
        }, 250);
        this.showNotification('PDF export initiated!', 'success');
    }

    async copyToClipboard() {
        try {
            // Get content from modal if it's open, otherwise from output panel
            let textContent;
            if (this.studyModal.style.display !== 'none' && this.modalContent) {
                textContent = this.modalContent.innerText;
            } else if (this.studyGuide) {
                textContent = this.studyGuide.innerText;
            } else {
                this.showNotification('No study guide to copy', 'error');
                return;
            }
            
            if (!textContent || textContent.trim() === '') {
                this.showNotification('No content to copy', 'error');
                return;
            }
            
            await navigator.clipboard.writeText(textContent);
            this.showNotification('Study guide copied to clipboard!', 'success');
        } catch (error) {
            console.error('Copy error:', error);
            // Fallback for older browsers
            try {
                const textArea = document.createElement('textarea');
                textArea.value = this.studyGuide ? this.studyGuide.innerText : '';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showNotification('Study guide copied to clipboard!', 'success');
            } catch (fallbackError) {
                this.showNotification('Failed to copy to clipboard. Please select and copy manually.', 'error');
            }
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
        
        // Attach event listeners after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.attachFlashcardListeners();
        }, 100);
        
        return html;
    }
    
    attachFlashcardListeners() {
        const container = document.querySelector('.interactive-flashcard-container');
        if (!container) return;
        
        // Flashcard flip on click
        const flashcard = container.querySelector('.interactive-flashcard');
        if (flashcard) {
            flashcard.addEventListener('click', () => {
                flashcard.classList.toggle('flipped');
            });
        }
        
        // Navigation buttons
        const prevBtn = container.querySelector('.flashcard-btn[data-action="prev"]');
        const nextBtn = container.querySelector('.flashcard-btn[data-action="next"]');
        const flipBtn = container.querySelector('.flashcard-btn[data-action="flip"]');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousFlashcard());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextFlashcard());
        }
        if (flipBtn) {
            flipBtn.addEventListener('click', () => this.flipFlashcard());
        }
    }

    createInteractiveFlashcard(topic, index, total) {
        const question = this.generateFlashcardQuestion(topic);
        const answer = this.generateFlashcardAnswer(topic);
        
        return `
            <div class="interactive-flashcard" id="flashcard-${index}" data-flashcard-index="${index}">
                <div class="flashcard-face flashcard-front">
                    <div class="flashcard-question">${question}</div>
                </div>
                <div class="flashcard-face flashcard-back">
                    <div class="flashcard-answer">${answer}</div>
                </div>
            </div>
            <div class="flashcard-controls">
                <div class="flashcard-nav">
                    <button class="flashcard-btn" data-action="prev" ${index === 0 ? 'disabled' : ''}>
                        <i class="fas fa-chevron-left"></i> Previous
                    </button>
                    <div class="flashcard-progress">${index + 1} of ${total}</div>
                    <button class="flashcard-btn" data-action="next" ${index === total - 1 ? 'disabled' : ''}>
                        Next <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <button class="flashcard-btn flashcard-flip-btn" data-action="flip">
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
        
        // Attach event listeners after a short delay to ensure DOM is ready
        setTimeout(() => {
            this.attachQuizListeners();
        }, 100);
        
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
                        <div class="quiz-option" data-question-index="${index}" data-option-index="${i}">
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
                    <button class="btn btn-primary" data-quiz-action="${index === this.quizQuestions.length - 1 ? 'finish' : 'next'}">
                        ${index === this.quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                </div>
            </div>
        `;
    }
    
    attachQuizListeners() {
        const container = document.querySelector('.quiz-container');
        if (!container) return;
        
        // Quiz option selection
        const quizOptions = container.querySelectorAll('.quiz-option');
        quizOptions.forEach(option => {
            option.addEventListener('click', () => {
                const questionIndex = parseInt(option.getAttribute('data-question-index'));
                const optionIndex = parseInt(option.getAttribute('data-option-index'));
                this.selectAnswer(questionIndex, optionIndex);
            });
        });
        
        // Next/Finish button
        const actionBtn = container.querySelector('.btn-primary[data-quiz-action]');
        if (actionBtn) {
            actionBtn.addEventListener('click', () => {
                const action = actionBtn.getAttribute('data-quiz-action');
                if (action === 'finish') {
                    this.finishQuiz();
                } else {
                    this.nextQuizQuestion();
                }
            });
        }
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
            // Reattach listeners after updating
            setTimeout(() => {
                this.attachQuizListeners();
            }, 50);
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
                <button class="btn btn-primary" data-action="restart-quiz">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;
        
        // Attach restart button listener
        const restartBtn = container.querySelector('.btn-primary[data-action="restart-quiz"]');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restartInteractive());
        }
    }

    restartInteractive() {
        this.currentFlashcardIndex = 0;
        this.currentQuizQuestion = 0;
        this.quizAnswers = [];
        this.restartBtn.style.display = 'none';
        
        // Regenerate the current study guide
        this.generateStudyGuide();
    }

    // Tutorial Methods
    startTutorial() {
        this.currentTutorialStep = 0;
        // Reset card position
        this.tutorialCard.style.top = 'auto';
        this.tutorialCard.style.bottom = '2rem';
        this.showTutorialStep(0);
        this.tutorialOverlay.style.display = 'block';
        setTimeout(() => {
            this.tutorialOverlay.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    closeTutorial() {
        this.tutorialOverlay.classList.remove('active');
        setTimeout(() => {
            this.tutorialOverlay.style.display = 'none';
            this.tutorialHighlight.style.width = '0';
            this.tutorialHighlight.style.height = '0';
            this.tutorialHighlight.style.top = '0';
            this.tutorialHighlight.style.left = '0';
            document.body.style.overflow = '';
        }, 400);
    }

    nextTutorialStep() {
        if (this.currentTutorialStep < this.tutorialSteps.length - 1) {
            this.currentTutorialStep++;
            this.showTutorialStep(this.currentTutorialStep);
        } else {
            this.closeTutorial();
        }
    }

    prevTutorialStep() {
        if (this.currentTutorialStep > 0) {
            this.currentTutorialStep--;
            this.showTutorialStep(this.currentTutorialStep);
        }
    }

    showTutorialStep(stepIndex) {
        const step = this.tutorialSteps[stepIndex];
        if (!step) return;

        // Update tutorial card content
        this.tutorialStepNumber.textContent = stepIndex + 1;
        this.tutorialTitle.textContent = step.title;
        this.tutorialDescription.textContent = step.description;
        this.tutorialExample.querySelector('span').textContent = step.example;

        // Show/hide navigation buttons
        this.tutorialPrev.style.display = stepIndex === 0 ? 'none' : 'inline-flex';
        this.tutorialNext.textContent = stepIndex === this.tutorialSteps.length - 1 ? 'Finish' : 'Next';
        this.tutorialNext.innerHTML = stepIndex === this.tutorialSteps.length - 1 
            ? 'Finish <i class="fas fa-check"></i>' 
            : 'Next <i class="fas fa-chevron-right"></i>';

        // Get target element
        let targetElement;
        if (step.element === 'subject') {
            targetElement = this.subjectInput.closest('.form-group');
        } else if (step.element === 'studyType') {
            targetElement = this.studyTypeSelect.closest('.form-group');
        } else if (step.element === 'generateBtn') {
            targetElement = this.generateBtn;
        }

        if (targetElement) {
            // Reset card position first to prevent accumulation
            this.tutorialCard.style.top = '';
            this.tutorialCard.style.bottom = '2rem';
            
            // Scroll to element if needed
            if (step.scrollTo) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }

            // Position highlight box with a slight delay to ensure scroll completes
            setTimeout(() => {
                this.positionHighlight(targetElement);
            }, step.scrollTo ? 600 : 150);
        }
    }

    positionHighlight(element) {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        // Add padding around the element
        const padding = 12;
        const top = rect.top + scrollY - padding;
        const left = rect.left + scrollX - padding;
        const width = rect.width + (padding * 2);
        const height = rect.height + (padding * 2);

        // Set highlight position and size
        this.tutorialHighlight.style.top = `${top}px`;
        this.tutorialHighlight.style.left = `${left}px`;
        this.tutorialHighlight.style.width = `${width}px`;
        this.tutorialHighlight.style.height = `${height}px`;

        // Position tutorial card relative to highlight (using viewport coordinates for fixed positioning)
        // Always reset both properties first to prevent accumulation
        this.tutorialCard.style.top = '';
        this.tutorialCard.style.bottom = '';
        
        const highlightBottom = rect.bottom; // Already viewport-relative
        const highlightTop = rect.top;
        const spaceBelow = window.innerHeight - highlightBottom;
        const spaceAbove = highlightTop;
        const cardHeight = 300; // Approximate card height
        const spacing = 20;

        // Position card below if there's space, otherwise above
        if (spaceBelow > cardHeight + spacing || spaceBelow > spaceAbove) {
            // Position below the highlight
            const topPosition = highlightBottom + spacing;
            // Ensure it doesn't go off screen
            const maxTop = window.innerHeight - cardHeight - spacing;
            this.tutorialCard.style.top = `${Math.min(topPosition, maxTop)}px`;
            this.tutorialCard.style.bottom = '';
        } else {
            // Position above the highlight
            // Calculate bottom position: distance from bottom of viewport to top of highlight, minus spacing
            const bottomPosition = window.innerHeight - highlightTop + spacing;
            // Ensure it doesn't go off screen (minimum bottom position)
            const minBottom = spacing;
            this.tutorialCard.style.bottom = `${Math.max(bottomPosition, minBottom)}px`;
            this.tutorialCard.style.top = '';
        }
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
