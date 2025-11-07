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

        if (specializedTemplates && specializedTemplates.length > 0) {
            return specializedTemplates;
        }

        const templates = [
            {
                type: 'multiple-choice',
                question: `Which fact about ${topicName} is correct?`,
                options: [
                    `${topicName} builds on prerequisite concepts and has key definitions you must memorize accurately.`,
                    `${topicName} has no relationship to other topics in the course.`,
                    `${topicName} is based entirely on opinion and has no factual basis.`,
                    `${topicName} never appears on written assessments.`
                ],
                correctAnswer: 0,
                explanation: `${topicName} connects to other ideas in the course and requires clear, factual understanding.`
            },
            {
                type: 'multiple-choice',
                question: `Which question would help you check your mastery of ${topicName}?`,
                options: [
                    `Can I explain ${topicName} in my own words and apply it to a new example?`,
                    `Can I avoid practicing ${topicName} and still succeed?`,
                    `Can I rely only on memorizing the heading "${topicName}"?`,
                    `Can I ignore how ${topicName} connects to exam questions?`
                ],
                correctAnswer: 0,
                explanation: `When you can teach ${topicName} using your own example, you understand it at exam level.`
            },
            {
                type: 'essay',
                question: `Summarize the key components of ${topicName} that you must be able to explain on an assessment.`,
                answer: `Identify the core definition of ${topicName}, list the supporting facts or formulas, and describe how to apply them to common exam scenarios.`
            },
            {
                type: 'essay',
                question: `Create a high-yield reference sheet for ${topicName}.`,
                answer: `Include a concise definition, the essential formulas or relationships, and one original example that shows how to use ${topicName}.`
            }
        ];

        if (difficulty === 'advanced') {
            templates.push({
                type: 'essay',
                question: `Compare ${topicName} to another advanced concept and explain how they reinforce each other.`,
                answer: `Point out a related advanced topic, explain the connection, and show how mastering ${topicName} improves your reasoning or calculations for both topics.`
            });
        }

        return templates;
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

            return templates;
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

            return templates;
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

            return templates;
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

            return templates;
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

            return templates;
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

            return templates;
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

            return templates;
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

        return generalChemistry;
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

            return this.cloneQuestion(chemPrompts[index % chemPrompts.length]);
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

        return this.cloneQuestion(prompts[index % prompts.length]);
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
            practiceQuestions: this.generatePracticeQuestions(topic, difficulty, this.subjectInput.value.trim())
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
