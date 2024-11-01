"use strict";
// Quiz Data

const quizData = {
    chemistryQuizData: [
        {
            question: "What is the chemical symbol for gold?",
            answers: [
                { text: "Au", correct: true },
                { text: "Ag", correct: false },
                { text: "Pb", correct: false },
                { text: "Fe", correct: false }
            ]
        },
        {
            question: "Which of the following is a noble gas?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: false },
                { text: "Argon", correct: true },
                { text: "Hydrogen", correct: false }
            ]
        },
        {
            question: "What is the pH of pure water?",
            answers: [
                { text: "7", correct: true },
                { text: "5", correct: false },
                { text: "10", correct: false },
                { text: "3", correct: false }
            ]
        },
        {
            question: "What is the primary component of natural gas?",
            answers: [
                { text: "Ethane", correct: false },
                { text: "Propane", correct: false },
                { text: "Methane", correct: true },
                { text: "Butane", correct: false }
            ]
        },
        {
            question: "Which acid is found in citrus fruits?",
            answers: [
                { text: "Acetic acid", correct: false },
                { text: "Citric acid", correct: true },
                { text: "Lactic acid", correct: false },
                { text: "Sulfuric acid", correct: false }
            ]
        },
        {
            question: "What is the most abundant gas in the Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Carbon Dioxide", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Argon", correct: false }
            ]
        },
        {
            question: "What type of bond involves the sharing of electron pairs between atoms?",
            answers: [
                { text: "Ionic bond", correct: false },
                { text: "Covalent bond", correct: true },
                { text: "Metallic bond", correct: false },
                { text: "Hydrogen bond", correct: false }
            ]
        },
        {
            question: "Which element has the atomic number 1?",
            answers: [
                { text: "Helium", correct: false },
                { text: "Hydrogen", correct: true },
                { text: "Lithium", correct: false },
                { text: "Oxygen", correct: false }
            ]
        },
        {
            question: "What is the process of a solid turning directly into a gas called?",
            answers: [
                { text: "Condensation", correct: false },
                { text: "Sublimation", correct: true },
                { text: "Evaporation", correct: false },
                { text: "Deposition", correct: false }
            ]
        },
        {
            question: "Which of the following is a base?",
            answers: [
                { text: "Hydrochloric acid", correct: false },
                { text: "Sodium hydroxide", correct: true },
                { text: "Acetic acid", correct: false },
                { text: "Sulfuric acid", correct: false }
            ]
        }
    ],

    historyQuizData: [
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Thomas Jefferson", correct: false },
                { text: "George Washington", correct: true },
                { text: "Abraham Lincoln", correct: false },
                { text: "John Adams", correct: false }
            ]
        },
        {
            question: "What year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1905", correct: false },
                { text: "1920", correct: false },
                { text: "1898", correct: false }
            ]
        },
        {
            question: "Which empire was known for its road system and postal service?",
            answers: [
                { text: "Roman Empire", correct: true },
                { text: "Ottoman Empire", correct: false },
                { text: "Mongol Empire", correct: false },
                { text: "Persian Empire", correct: false }
            ]
        },
        {
            question: "Who was the famous queen of Egypt known for her relationships with Julius Caesar and Mark Antony?",
            answers: [
                { text: "Nefertiti", correct: false },
                { text: "Cleopatra", correct: true },
                { text: "Hatshepsut", correct: false },
                { text: "Tutankhamun", correct: false }
            ]
        },
        {
            question: "What was the primary cause of World War I?",
            answers: [
                { text: "Economic Crisis", correct: false },
                { text: "Assassination of Archduke Franz Ferdinand", correct: true },
                { text: "Colonial Rivalries", correct: false },
                { text: "Treaty of Versailles", correct: false }
            ]
        },
        {
            question: "Which movement sought to end racial segregation in the United States?",
            answers: [
                { text: "Women's Suffrage Movement", correct: false },
                { text: "Civil Rights Movement", correct: true },
                { text: "Labor Movement", correct: false },
                { text: "Environmental Movement", correct: false }
            ]
        },
        {
            question: "What ancient civilization is known for its pyramids?",
            answers: [
                { text: "Greece", correct: false },
                { text: "Rome", correct: false },
                { text: "Egypt", correct: true },
                { text: "Mesopotamia", correct: false }
            ]
        },
        {
            question: "Who wrote the Declaration of Independence?",
            answers: [
                { text: "James Madison", correct: false },
                { text: "George Washington", correct: false },
                { text: "Thomas Jefferson", correct: true },
                { text: "Benjamin Franklin", correct: false }
            ]
        },
        {
            question: "What event began the French Revolution?",
            answers: [
                { text: "Storming of the Bastille", correct: true },
                { text: "The Reign of Terror", correct: false },
                { text: "Napoleon's Rise to Power", correct: false },
                { text: "The Declaration of the Rights of Man", correct: false }
            ]
        },
        {
            question: "Which war was fought between the North and South regions in the United States?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Civil War", correct: true },
                { text: "Revolutionary War", correct: false },
                { text: "War of 1812", correct: false }
            ]
        }
    ],

    mathQuizData: [
        {
            question: "What is the square root of 144?",
            answers: [
                { text: "10", correct: false },
                { text: "12", correct: true },
                { text: "14", correct: false },
                { text: "16", correct: false }
            ]
        },
        {
            question: "What is 15% of 200?",
            answers: [
                { text: "20", correct: false },
                { text: "25", correct: false },
                { text: "30", correct: true },
                { text: "35", correct: false }
            ]
        },
        {
            question: "What is the formula for the area of a circle?",
            answers: [
                { text: "πr^2", correct: true },
                { text: "2πr", correct: false },
                { text: "r^2", correct: false },
                { text: "πd", correct: false }
            ]
        },
        {
            question: "If x + 5 = 10, what is x?",
            answers: [
                { text: "3", correct: false },
                { text: "5", correct: false },
                { text: "10", correct: false },
                { text: "5", correct: true }
            ]
        },
        {
            question: "What is the value of π (Pi) to two decimal places?",
            answers: [
                { text: "3.14", correct: true },
                { text: "3.15", correct: false },
                { text: "3.13", correct: false },
                { text: "3.16", correct: false }
            ]
        }
    ],

    computerScienceQuizData: [
        {
            question: "What is the output of the following code: console.log(typeof 'Hello')?",
            answers: [
                { text: "'string'", correct: false },
                { text: "'String'", correct: false },
                { text: "'object'", correct: false },
                { text: "'Hello'", correct: true }
            ]
        },
        {
            question: "Which of the following is a loop construct in JavaScript?",
            answers: [
                { text: "if", correct: false },
                { text: "while", correct: true },
                { text: "define", correct: false },
                { text: "foreach", correct: false }
            ]
        },
        {
            question: "What does CSS stand for?",
            answers: [
                { text: "Cascading Style Sheets", correct: true },
                { text: "Computer Style Sheets", correct: false },
                { text: "Creative Style Sheets", correct: false },
                { text: "Cascading Simple Sheets", correct: false }
            ]
        },
        {
            question: "Which of the following is a programming language?",
            answers: [
                { text: "HTML", correct: false },
                { text: "CSS", correct: false },
                { text: "Python", correct: true },
                { text: "XML", correct: false }
            ]
        },
        {
            question: "What is the purpose of the 'return' statement in a function?",
            answers: [
                { text: "To exit the function", correct: false },
                { text: "To give back a value", correct: true },
                { text: "To loop through a function", correct: false },
                { text: "To declare a function", correct: false }
            ]
        }
    ],

    literatureQuizData: [
        {
            question: "Who wrote 'Pride and Prejudice'?",
            answers: [
                { text: "Charlotte Brontë", correct: false },
                { text: "Jane Austen", correct: true },
                { text: "Emily Brontë", correct: false },
                { text: "Mary Shelley", correct: false }
            ]
        },
        {
            question: "What is the first book of the Harry Potter series?",
            answers: [
                { text: "Harry Potter and the Chamber of Secrets", correct: false },
                { text: "Harry Potter and the Philosopher's Stone", correct: true },
                { text: "Harry Potter and the Prisoner of Azkaban", correct: false },
                { text: "Harry Potter and the Goblet of Fire", correct: false }
            ]
        },
        {
            question: "Which Shakespeare play features the character Iago?",
            answers: [
                { text: "Hamlet", correct: false },
                { text: "Othello", correct: true },
                { text: "Macbeth", correct: false },
                { text: "King Lear", correct: false }
            ]
        },
        {
            question: "What is the main theme of George Orwell's '1984'?",
            answers: [
                { text: "War", correct: false },
                { text: "Love", correct: false },
                { text: "Totalitarianism", correct: true },
                { text: "Friendship", correct: false }
            ]
        },
        {
            question: "Who is the author of 'To Kill a Mockingbird'?",
            answers: [
                { text: "Harper Lee", correct: true },
                { text: "Mark Twain", correct: false },
                { text: "F. Scott Fitzgerald", correct: false },
                { text: "Ernest Hemingway", correct: false }
            ]
        },
        {
            question: "In which novel does the character Jay Gatsby appear?",
            answers: [
                { text: "The Great Gatsby", correct: true },
                { text: "The Catcher in the Rye", correct: false },
                { text: "Moby Dick", correct: false },
                { text: "Pride and Prejudice", correct: false }
            ]
        },
        {
            question: "What is the central conflict in 'Romeo and Juliet'?",
            answers: [
                { text: "Family Feud", correct: true },
                { text: "Political Struggle", correct: false },
                { text: "Class Disparity", correct: false },
                { text: "War", correct: false }
            ]
        },
        {
            question: "Who wrote 'The Odyssey'?",
            answers: [
                { text: "Homer", correct: true },
                { text: "Virgil", correct: false },
                { text: "Sophocles", correct: false },
                { text: "Plato", correct: false }
            ]
        },
        {
            question: "What genre does 'Brave New World' belong to?",
            answers: [
                { text: "Science Fiction", correct: true },
                { text: "Fantasy", correct: false },
                { text: "Historical Fiction", correct: false },
                { text: "Mystery", correct: false }
            ]
        },
        {
            question: "Who is known for the novel 'The Grapes of Wrath'?",
            answers: [
                { text: "John Steinbeck", correct: true },
                { text: "Ray Bradbury", correct: false },
                { text: "Kurt Vonnegut", correct: false },
                { text: "Ernest Hemingway", correct: false }
            ]
        }
    ],

    geographyQuizData: [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false }
            ]
        },
        {
            question: "Which continent is the Sahara Desert located on?",
            answers: [
                { text: "Asia", correct: false },
                { text: "Africa", correct: true },
                { text: "Australia", correct: false },
                { text: "North America", correct: false }
            ]
        },
        {
            question: "What river is the longest in the world?",
            answers: [
                { text: "Amazon River", correct: true },
                { text: "Nile River", correct: false },
                { text: "Yangtze River", correct: false },
                { text: "Mississippi River", correct: false }
            ]
        },
        {
            question: "Which country has the largest land area?",
            answers: [
                { text: "United States", correct: false },
                { text: "China", correct: false },
                { text: "Canada", correct: false },
                { text: "Russia", correct: true }
            ]
        },
        {
            question: "What is the smallest country in the world?",
            answers: [
                { text: "Monaco", correct: false },
                { text: "Nauru", correct: false },
                { text: "Vatican City", correct: true },
                { text: "Malta", correct: false }
            ]
        },
        {
            question: "Which ocean is the largest?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true }
            ]
        },
        {
            question: "What is the primary language spoken in Brazil?",
            answers: [
                { text: "Spanish", correct: false },
                { text: "English", correct: false },
                { text: "Portuguese", correct: true },
                { text: "French", correct: false }
            ]
        },
        {
            question: "What mountain range separates Europe from Asia?",
            answers: [
                { text: "Himalayas", correct: false },
                { text: "Rockies", correct: false },
                { text: "Ural Mountains", correct: true },
                { text: "Andes", correct: false }
            ]
        },
        {
            question: "Which desert is the largest in the world?",
            answers: [
                { text: "Gobi Desert", correct: false },
                { text: "Sahara Desert", correct: false },
                { text: "Antarctic Desert", correct: true },
                { text: "Arabian Desert", correct: false }
            ]
        },
        {
            question: "Which country is both in Europe and Asia?",
            answers: [
                { text: "Turkey", correct: true },
                { text: "Russia", correct: true },
                { text: "Egypt", correct: false },
                { text: "Greece", correct: false }
            ]
        }
    ],

    englishQuizData: [
        {
            question: "What is the synonym of 'happy'?",
            answers: [
                { text: "Sad", correct: false },
                { text: "Joyful", correct: true },
                { text: "Angry", correct: false },
                { text: "Bored", correct: false }
            ]
        },
        {
            question: "Which of the following is a proper noun?",
            answers: [
                { text: "city", correct: false },
                { text: "Paris", correct: true },
                { text: "river", correct: false },
                { text: "tree", correct: false }
            ]
        },
        {
            question: "What is the plural form of 'child'?",
            answers: [
                { text: "Childs", correct: false },
                { text: "Children", correct: true },
                { text: "Childer", correct: false },
                { text: "Childrens", correct: false }
            ]
        },
        {
            question: "Which of the following is an adjective?",
            answers: [
                { text: "Run", correct: false },
                { text: "Beautiful", correct: true },
                { text: "Quickly", correct: false },
                { text: "Happiness", correct: false }
            ]
        },
        {
            question: "Identify the verb in the following sentence: 'She runs every morning.'",
            answers: [
                { text: "She", correct: false },
                { text: "Runs", correct: true },
                { text: "Every", correct: false },
                { text: "Morning", correct: false }
            ]
        },
        {
            question: "What is the past tense of 'go'?",
            answers: [
                { text: "Goes", correct: false },
                { text: "Gone", correct: false },
                { text: "Went", correct: true },
                { text: "Going", correct: false }
            ]
        },
        {
            question: "Which word is a homophone of 'flour'?",
            answers: [
                { text: "Flower", correct: true },
                { text: "Floor", correct: false },
                { text: "Flew", correct: false },
                { text: "Flourish", correct: false }
            ]
        },
        {
            question: "What is the correct form of the adjective in this sentence: 'She is the ___ runner in the race.'",
            answers: [
                { text: "Fast", correct: false },
                { text: "Faster", correct: false },
                { text: "Fastest", correct: true },
                { text: "More Fast", correct: false }
            ]
        },
        {
            question: "Which sentence is grammatically correct?",
            answers: [
                { text: "He go to the store.", correct: false },
                { text: "He goes to the store.", correct: true },
                { text: "He gone to the store.", correct: false },
                { text: "He going to the store.", correct: false }
            ]
        },
        {
            question: "What is an antonym for 'difficult'?",
            answers: [
                { text: "Easy", correct: true },
                { text: "Hard", correct: false },
                { text: "Complex", correct: false },
                { text: "Challenging", correct: false }
            ]
        },
        {
            question: "Which of the following is a compound sentence?",
            answers: [
                { text: "I like to read.", correct: false },
                { text: "I like to read, and I enjoy writing.", correct: true },
                { text: "Reading is fun.", correct: false },
                { text: "He runs fast.", correct: false }
            ]
        },
        {
            question: "What part of speech is 'quickly'?",
            answers: [
                { text: "Noun", correct: false },
                { text: "Adverb", correct: true },
                { text: "Adjective", correct: false },
                { text: "Verb", correct: false }
            ]
        },
        {
            question: "Identify the main idea of the following sentence: 'Despite the rain, the picnic was a success.'",
            answers: [
                { text: "It rained.", correct: false },
                { text: "The picnic was a success.", correct: true },
                { text: "It was cloudy.", correct: false },
                { text: "Everyone was wet.", correct: false }
            ]
        },
        {
            question: "What is the meaning of the idiom 'break the ice'?",
            answers: [
                { text: "To make a hole in ice", correct: false },
                { text: "To make people feel more comfortable", correct: true },
                { text: "To start a fight", correct: false },
                { text: "To end a conversation", correct: false }
            ]
        },
        {
            question: "What punctuation mark is used to indicate a question?",
            answers: [
                { text: "Period", correct: false },
                { text: "Exclamation mark", correct: false },
                { text: "Question mark", correct: true },
                { text: "Comma", correct: false }
            ]
        }
    ],

    biologyQuizData: [
        {
            question: "What is the basic unit of life?",
            answers: [
                { text: "Atom", correct: false },
                { text: "Cell", correct: true },
                { text: "Tissue", correct: false },
                { text: "Organ", correct: false }
            ]
        },
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            answers: [
                { text: "Nucleus", correct: false },
                { text: "Mitochondria", correct: true },
                { text: "Ribosome", correct: false },
                { text: "Golgi Apparatus", correct: false }
            ]
        },
        {
            question: "What is the process by which plants make their food?",
            answers: [
                { text: "Photosynthesis", correct: true },
                { text: "Respiration", correct: false },
                { text: "Transpiration", correct: false },
                { text: "Digestion", correct: false }
            ]
        },
        {
            question: "What type of bond holds the DNA strands together?",
            answers: [
                { text: "Ionic bond", correct: false },
                { text: "Covalent bond", correct: true },
                { text: "Hydrogen bond", correct: false },
                { text: "Metallic bond", correct: false }
            ]
        },
        {
            question: "Which of the following is not a macromolecule?",
            answers: [
                { text: "Carbohydrates", correct: false },
                { text: "Proteins", correct: false },
                { text: "Lipids", correct: false },
                { text: "Water", correct: true }
            ]
        },
        {
            question: "What is the primary function of ribosomes?",
            answers: [
                { text: "Energy production", correct: false },
                { text: "Protein synthesis", correct: true },
                { text: "DNA replication", correct: false },
                { text: "Cell division", correct: false }
            ]
        },
        {
            question: "What structure regulates the entry and exit of substances in and out of the cell?",
            answers: [
                { text: "Cell wall", correct: false },
                { text: "Plasma membrane", correct: true },
                { text: "Cytoplasm", correct: false },
                { text: "Endoplasmic reticulum", correct: false }
            ]
        },
        {
            question: "What is the process of cell division in somatic cells called?",
            answers: [
                { text: "Meiosis", correct: false },
                { text: "Mitosis", correct: true },
                { text: "Fission", correct: false },
                { text: "Budding", correct: false }
            ]
        }
    ],

    socialStudiesQuizData: [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false }
            ]
        },
        {
            question: "Which ancient civilization is known for building pyramids?",
            answers: [
                { text: "Mesopotamia", correct: false },
                { text: "Egypt", correct: true },
                { text: "Greece", correct: false },
                { text: "China", correct: false }
            ]
        },
        {
            question: "What document declared the independence of the United States?",
            answers: [
                { text: "The Constitution", correct: false },
                { text: "The Bill of Rights", correct: false },
                { text: "The Declaration of Independence", correct: true },
                { text: "The Articles of Confederation", correct: false }
            ]
        },
        {
            question: "What was the main cause of World War I?",
            answers: [
                { text: "The assassination of Archduke Franz Ferdinand", correct: true },
                { text: "The sinking of the Titanic", correct: false },
                { text: "The Great Depression", correct: false },
                { text: "The Cold War", correct: false }
            ]
        },
        {
            question: "Which country was the first to grant women the right to vote?",
            answers: [
                { text: "United States", correct: false },
                { text: "New Zealand", correct: true },
                { text: "Canada", correct: false },
                { text: "Australia", correct: false }
            ]
        },
        {
            question: "What is the largest continent by area?",
            answers: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "North America", correct: false },
                { text: "Europe", correct: false }
            ]
        },
        {
            question: "What movement aimed to end racial segregation in the United States?",
            answers: [
                { text: "The Civil Rights Movement", correct: true },
                { text: "The Suffrage Movement", correct: false },
                { text: "The Labor Movement", correct: false },
                { text: "The Green Movement", correct: false }
            ]
        },
        {
            question: "Which ocean is the largest in the world?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true }
            ]
        }
    ],

    politicsQuizData: [
        {
            question: "What is the supreme law of the land?",
            answers: [
                { text: "The Constitution", correct: true },
                { text: "The Declaration of Independence", correct: false },
                { text: "The Bill of Rights", correct: false },
                { text: "The Articles of Confederation", correct: false }
            ]
        },
        {
            question: "How many justices are on the Supreme Court?",
            answers: [
                { text: "7", correct: false },
                { text: "9", correct: true },
                { text: "11", correct: false },
                { text: "13", correct: false }
            ]
        },
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Abraham Lincoln", correct: false },
                { text: "George Washington", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "John Adams", correct: false }
            ]
        },
        {
            question: "What is the political party of the current President?",
            answers: [
                { text: "Democratic", correct: true },
                { text: "Republican", correct: false },
                { text: "Independent", correct: false },
                { text: "Libertarian", correct: false }
            ]
        },
        {
            question: "Which amendment granted women the right to vote?",
            answers: [
                { text: "19th Amendment", correct: true },
                { text: "15th Amendment", correct: false },
                { text: "26th Amendment", correct: false },
                { text: "21st Amendment", correct: false }
            ]
        },
        {
            question: "What is a government system where power is divided between a central authority and constituent political units?",
            answers: [
                { text: "Unitary System", correct: false },
                { text: "Confederation", correct: false },
                { text: "Federal System", correct: true },
                { text: "Monarchy", correct: false }
            ]
        },
        {
            question: "What is the term for a political party's statement of its principles and policies?",
            answers: [
                { text: "Platform", correct: true },
                { text: "Preamble", correct: false },
                { text: "Manifesto", correct: false },
                { text: "Agenda", correct: false }
            ]
        },
        {
            question: "Who is known as the 'Father of Modern Political Science'?",
            answers: [
                { text: "Niccolò Machiavelli", correct: true },
                { text: "John Locke", correct: false },
                { text: "Thomas Hobbes", correct: false },
                { text: "Jean-Jacques Rousseau", correct: false }
            ]
        },
        {
            question: "What is the process of redrawing district boundaries to benefit a political party?",
            answers: [
                { text: "Gerrymandering", correct: true },
                { text: "Filibustering", correct: false },
                { text: "Lobbying", correct: false },
                { text: "Incumbency", correct: false }
            ]
        },
        {
            question: "What is a form of government in which a single entity rules?",
            answers: [
                { text: "Democracy", correct: false },
                { text: "Oligarchy", correct: false },
                { text: "Autocracy", correct: true },
                { text: "Republic", correct: false }
            ]
        }
    ],

    economicsQuizData: [
        {
            question: "What is the basic economic problem?",
            answers: [
                { text: "Scarcity", correct: true },
                { text: "Inflation", correct: false },
                { text: "Unemployment", correct: false },
                { text: "Deflation", correct: false }
            ]
        },
        {
            question: "What does GDP stand for?",
            answers: [
                { text: "Gross Domestic Product", correct: true },
                { text: "General Data Protection", correct: false },
                { text: "Government Debt Payment", correct: false },
                { text: "Global Development Policy", correct: false }
            ]
        },
        {
            question: "Which type of economy is characterized by private ownership of resources?",
            answers: [
                { text: "Command Economy", correct: false },
                { text: "Market Economy", correct: true },
                { text: "Traditional Economy", correct: false },
                { text: "Mixed Economy", correct: false }
            ]
        },
        {
            question: "What is the term for the measure of responsiveness of quantity demanded to a change in price?",
            answers: [
                { text: "Price Elasticity", correct: true },
                { text: "Supply Elasticity", correct: false },
                { text: "Demand Curve", correct: false },
                { text: "Market Equilibrium", correct: false }
            ]
        },
        {
            question: "Which economic theory advocates for minimal government intervention?",
            answers: [
                { text: "Keynesian Economics", correct: false },
                { text: "Monetarism", correct: false },
                { text: "Laissez-faire", correct: true },
                { text: "Socialism", correct: false }
            ]
        },
        {
            question: "What does 'inflation' refer to?",
            answers: [
                { text: "Decrease in prices", correct: false },
                { text: "Increase in prices", correct: true },
                { text: "Stable prices", correct: false },
                { text: "Fluctuation in prices", correct: false }
            ]
        },
        {
            question: "Which of the following is a macroeconomic indicator?",
            answers: [
                { text: "Unemployment Rate", correct: true },
                { text: "Company Revenue", correct: false },
                { text: "Stock Prices", correct: false },
                { text: "Consumer Satisfaction", correct: false }
            ]
        },
        {
            question: "What is the economic concept of 'opportunity cost'?",
            answers: [
                { text: "The cost of producing one more unit", correct: false },
                { text: "The cost of the next best alternative foregone", correct: true },
                { text: "The cost of running a business", correct: false },
                { text: "The cost of labor", correct: false }
            ]
        },
        {
            question: "Which type of market structure is characterized by a single seller?",
            answers: [
                { text: "Monopoly", correct: true },
                { text: "Oligopoly", correct: false },
                { text: "Perfect Competition", correct: false },
                { text: "Monopolistic Competition", correct: false }
            ]
        },
        {
            question: "What is fiscal policy?",
            answers: [
                { text: "Government spending and tax policies", correct: true },
                { text: "Central bank policies", correct: false },
                { text: "Currency exchange rates", correct: false },
                { text: "Trade policies", correct: false }
            ]
        }
    ],

    musicQuizData: [
        {
            question: "What is the highest female singing voice?",
            answers: [
                { text: "Soprano", correct: true },
                { text: "Alto", correct: false },
                { text: "Tenor", correct: false },
                { text: "Bass", correct: false }
            ]
        },
        {
            question: "Which composer is known for the 'Moonlight Sonata'?",
            answers: [
                { text: "Johann Sebastian Bach", correct: false },
                { text: "Ludwig van Beethoven", correct: true },
                { text: "Wolfgang Amadeus Mozart", correct: false },
                { text: "Frédéric Chopin", correct: false }
            ]
        },
        {
            question: "What genre of music did Elvis Presley help popularize?",
            answers: [
                { text: "Jazz", correct: false },
                { text: "Rock and Roll", correct: true },
                { text: "Blues", correct: false },
                { text: "Classical", correct: false }
            ]
        },
        {
            question: "Which instrument is known as the 'king of instruments'?",
            answers: [
                { text: "Piano", correct: false },
                { text: "Violin", correct: false },
                { text: "Organ", correct: true },
                { text: "Guitar", correct: false }
            ]
        },
        {
            question: "Who is known as the 'Queen of Pop'?",
            answers: [
                { text: "Madonna", correct: true },
                { text: "Beyoncé", correct: false },
                { text: "Lady Gaga", correct: false },
                { text: "Taylor Swift", correct: false }
            ]
        },
        {
            question: "What is the name of the musical scale that consists of seven notes?",
            answers: [
                { text: "Pentatonic", correct: false },
                { text: "Diatonic", correct: true },
                { text: "Chromatic", correct: false },
                { text: "Whole Tone", correct: false }
            ]
        },
        {
            question: "What is a symphony?",
            answers: [
                { text: "A type of song", correct: false },
                { text: "A large orchestral composition", correct: true },
                { text: "A musical genre", correct: false },
                { text: "A dance form", correct: false }
            ]
        },
        {
            question: "Who composed the 'Four Seasons'?",
            answers: [
                { text: "Antonio Vivaldi", correct: true },
                { text: "Johann Strauss II", correct: false },
                { text: "Claude Debussy", correct: false },
                { text: "Igor Stravinsky", correct: false }
            ]
        }
    ],

    sportsQuizData: [
        {
            question: "What is the highest governing body in football?",
            answers: [
                { text: "FIFA", correct: true },
                { text: "UEFA", correct: false },
                { text: "NCAA", correct: false },
                { text: "IOC", correct: false }
            ]
        },
        {
            question: "How many players are on a basketball team?",
            answers: [
                { text: "5", correct: true },
                { text: "6", correct: false },
                { text: "7", correct: false },
                { text: "8", correct: false }
            ]
        },
        {
            question: "In which sport would you perform a slam dunk?",
            answers: [
                { text: "Football", correct: false },
                { text: "Basketball", correct: true },
                { text: "Baseball", correct: false },
                { text: "Hockey", correct: false }
            ]
        },
        {
            question: "What is the length of a marathon in miles?",
            answers: [
                { text: "26.2", correct: true },
                { text: "24.5", correct: false },
                { text: "30", correct: false },
                { text: "22", correct: false }
            ]
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            answers: [
                { text: "China", correct: false },
                { text: "Brazil", correct: true },
                { text: "Russia", correct: false },
                { text: "UK", correct: false }
            ]
        },
        {
            question: "Which sport is known as the 'king of sports'?",
            answers: [
                { text: "Basketball", correct: false },
                { text: "Soccer", correct: true },
                { text: "Cricket", correct: false },
                { text: "Rugby", correct: false }
            ]
        },
        {
            question: "In tennis, what is the term for a serve that cannot be returned?",
            answers: [
                { text: "Ace", correct: true },
                { text: "Fault", correct: false },
                { text: "Let", correct: false },
                { text: "Rally", correct: false }
            ]
        },
        {
            question: "What is the maximum score in a single game of bowling?",
            answers: [
                { text: "300", correct: true },
                { text: "250", correct: false },
                { text: "100", correct: false },
                { text: "400", correct: false }
            ]
        }
    ],

    artQuizData: [
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Claude Monet", correct: false }
            ]
        },
        {
            question: "What art movement is Salvador Dalí associated with?",
            answers: [
                { text: "Surrealism", correct: true },
                { text: "Impressionism", correct: false },
                { text: "Cubism", correct: false },
                { text: "Expressionism", correct: false }
            ]
        },
        {
            question: "Which of these is a famous sculpture by Michelangelo?",
            answers: [
                { text: "The Thinker", correct: false },
                { text: "David", correct: true },
                { text: "Venus de Milo", correct: false },
                { text: "The Kiss", correct: false }
            ]
        },
        {
            question: "What technique uses small dots of color to create an image?",
            answers: [
                { text: "Pointillism", correct: true },
                { text: "Fresco", correct: false },
                { text: "Collage", correct: false },
                { text: "Mosaic", correct: false }
            ]
        },
        {
            question: "Who is known for the painting 'Starry Night'?",
            answers: [
                { text: "Claude Monet", correct: false },
                { text: "Vincent van Gogh", correct: true },
                { text: "Henri Matisse", correct: false },
                { text: "Edvard Munch", correct: false }
            ]
        },
        {
            question: "What is the primary medium of a watercolor painting?",
            answers: [
                { text: "Oil", correct: false },
                { text: "Acrylic", correct: false },
                { text: "Water", correct: true },
                { text: "Charcoal", correct: false }
            ]
        },
        {
            question: "What is the term for a painting done on wet plaster?",
            answers: [
                { text: "Fresco", correct: true },
                { text: "Tempera", correct: false },
                { text: "Gouache", correct: false },
                { text: "Pastel", correct: false }
            ]
        },
        {
            question: "What is the name of the art movement that focuses on light and color?",
            answers: [
                { text: "Impressionism", correct: true },
                { text: "Realism", correct: false },
                { text: "Baroque", correct: false },
                { text: "Surrealism", correct: false }
            ]
        }
    ],

    realEstateQuizData: [
        {
            question: "What is the term for a legally binding agreement between a buyer and a seller?",
            answers: [
                { text: "Contract", correct: true },
                { text: "Lease", correct: false },
                { text: "Agreement", correct: false },
                { text: "Deed", correct: false }
            ]
        },
        {
            question: "What is a common method used to determine the market value of a property?",
            answers: [
                { text: "Appraisal", correct: true },
                { text: "Inspection", correct: false },
                { text: "Survey", correct: false },
                { text: "Assessment", correct: false }
            ]
        },
        {
            question: "Which type of loan is typically used to finance a home purchase?",
            answers: [
                { text: "Personal Loan", correct: false },
                { text: "Mortgage", correct: true },
                { text: "Credit Card Loan", correct: false },
                { text: "Auto Loan", correct: false }
            ]
        },
        {
            question: "What does MLS stand for in real estate?",
            answers: [
                { text: "Multiple Listing Service", correct: true },
                { text: "Market Listing System", correct: false },
                { text: "Managed Listing Service", correct: false },
                { text: "Main Listing Service", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of a home inspection?",
            answers: [
                { text: "To estimate the value of the property", correct: false },
                { text: "To assess the condition of the property", correct: true },
                { text: "To negotiate the sale price", correct: false },
                { text: "To finalize the sale", correct: false }
            ]
        },
        {
            question: "What is the term for the increase in a property's value over time?",
            answers: [
                { text: "Depreciation", correct: false },
                { text: "Appreciation", correct: true },
                { text: "Equity", correct: false },
                { text: "Valuation", correct: false }
            ]
        },
        {
            question: "What is the purpose of zoning laws?",
            answers: [
                { text: "To regulate building codes", correct: false },
                { text: "To determine how land can be used", correct: true },
                { text: "To set property tax rates", correct: false },
                { text: "To evaluate property value", correct: false }
            ]
        },
        {
            question: "What is a buyer's agent?",
            answers: [
                { text: "An agent representing the seller", correct: false },
                { text: "An agent representing the buyer", correct: true },
                { text: "An agent for property management", correct: false },
                { text: "An agent for appraisals", correct: false }
            ]
        },
        {
            question: "What does equity in real estate refer to?",
            answers: [
                { text: "The value of the property", correct: false },
                { text: "The difference between the property value and outstanding mortgage", correct: true },
                { text: "The total loan amount", correct: false },
                { text: "The selling price", correct: false }
            ]
        },
        {
            question: "What is the typical duration of a fixed-rate mortgage?",
            answers: [
                { text: "5 years", correct: false },
                { text: "15 years", correct: false },
                { text: "30 years", correct: true },
                { text: "40 years", correct: false }
            ]
        },
        {
            question: "What is an appraisal?",
            answers: [
                { text: "A survey of the property", correct: false },
                { text: "An evaluation of a property's value", correct: true },
                { text: "A legal document for sale", correct: false },
                { text: "A method of financing", correct: false }
            ]
        },
        {
            question: "What is the purpose of a real estate disclosure?",
            answers: [
                { text: "To provide legal advice", correct: false },
                { text: "To inform buyers of potential issues with the property", correct: true },
                { text: "To finalize a sale", correct: false },
                { text: "To appraise property value", correct: false }
            ]
        },
        {
            question: "What does it mean to 'flip' a house?",
            answers: [
                { text: "To rent it out", correct: false },
                { text: "To buy and quickly sell for a profit", correct: true },
                { text: "To renovate and keep", correct: false },
                { text: "To auction it off", correct: false }
            ]
        },
        {
            question: "Which of the following is a common type of real estate?",
            answers: [
                { text: "Commercial", correct: true },
                { text: "Financial", correct: false },
                { text: "Economic", correct: false },
                { text: "Industrial", correct: false }
            ]
        },
        {
            question: "What is the primary role of a real estate agent?",
            answers: [
                { text: "To manage properties", correct: false },
                { text: "To facilitate the buying and selling of properties", correct: true },
                { text: "To appraise property value", correct: false },
                { text: "To handle legal matters", correct: false }
            ]
        },
        {
            question: "What is a closing cost?",
            answers: [
                { text: "The final selling price of a property", correct: false },
                { text: "Fees and expenses paid at the closing of a real estate transaction", correct: true },
                { text: "The cost of home insurance", correct: false },
                { text: "The amount owed on the mortgage", correct: false }
            ]
        },
        {
            question: "What is a lease?",
            answers: [
                { text: "A contract for renting property", correct: true },
                { text: "A type of loan", correct: false },
                { text: "An offer to buy property", correct: false },
                { text: "A deed of ownership", correct: false }
            ]
        },
        {
            question: "What is the term for the practice of obtaining property through adverse possession?",
            answers: [
                { text: "Eminent domain", correct: false },
                { text: "Squatting", correct: true },
                { text: "Trespassing", correct: false },
                { text: "Leasing", correct: false }
            ]
        },
        {
            question: "What is a property title?",
            answers: [
                { text: "A document proving ownership of property", correct: true },
                { text: "A type of loan", correct: false },
                { text: "An agreement to purchase property", correct: false },
                { text: "A tax assessment", correct: false }
            ]
        },
        {
            question: "What is the purpose of a mortgage?",
            answers: [
                { text: "To secure financing for purchasing real estate", correct: true },
                { text: "To assess property value", correct: false },
                { text: "To manage rental properties", correct: false },
                { text: "To finalize a sale", correct: false }
            ]
        },
        {
            question: "What is an escrow account?",
            answers: [
                { text: "An account where funds are held until conditions are met", correct: true },
                { text: "A savings account for home repairs", correct: false },
                { text: "An account for property taxes", correct: false },
                { text: "A loan for buying property", correct: false }
            ]
        }
    ],

    engineeringQuizData: [
        {
            question: "What is the primary focus of civil engineering?",
            answers: [
                { text: "Designing machines", correct: false },
                { text: "Infrastructure and construction", correct: true },
                { text: "Electrical systems", correct: false },
                { text: "Software development", correct: false }
            ]
        },
        {
            question: "What is the unit of force in the SI system?",
            answers: [
                { text: "Joule", correct: false },
                { text: "Newton", correct: true },
                { text: "Watt", correct: false },
                { text: "Pascal", correct: false }
            ]
        },
        {
            question: "What type of engineer designs bridges?",
            answers: [
                { text: "Mechanical Engineer", correct: false },
                { text: "Civil Engineer", correct: true },
                { text: "Electrical Engineer", correct: false },
                { text: "Chemical Engineer", correct: false }
            ]
        },
        {
            question: "What does CAD stand for?",
            answers: [
                { text: "Computer-Aided Design", correct: true },
                { text: "Computer-Aided Development", correct: false },
                { text: "Constructive Application Design", correct: false },
                { text: "Controlled Automated Device", correct: false }
            ]
        },
        {
            question: "Which of the following materials is known for its tensile strength?",
            answers: [
                { text: "Concrete", correct: false },
                { text: "Steel", correct: true },
                { text: "Wood", correct: false },
                { text: "Plastic", correct: false }
            ]
        },
        {
            question: "What is the purpose of a gearbox?",
            answers: [
                { text: "To amplify speed", correct: false },
                { text: "To reduce speed and increase torque", correct: true },
                { text: "To measure power", correct: false },
                { text: "To stabilize the vehicle", correct: false }
            ]
        },
        {
            question: "What is the principle of moments?",
            answers: [
                { text: "Forces acting on a body", correct: false },
                { text: "For every action, there is an equal and opposite reaction", correct: false },
                { text: "The sum of clockwise moments equals the sum of anti-clockwise moments", correct: true },
                { text: "Energy cannot be created or destroyed", correct: false }
            ]
        },
        {
            question: "Which branch of engineering focuses on the design of electronic systems?",
            answers: [
                { text: "Mechanical Engineering", correct: false },
                { text: "Electrical Engineering", correct: true },
                { text: "Civil Engineering", correct: false },
                { text: "Chemical Engineering", correct: false }
            ]
        },
        {
            question: "What is thermodynamics primarily concerned with?",
            answers: [
                { text: "Study of energy and heat", correct: true },
                { text: "Study of motion", correct: false },
                { text: "Study of structures", correct: false },
                { text: "Study of materials", correct: false }
            ]
        },
        {
            question: "What is the primary role of a structural engineer?",
            answers: [
                { text: "To design electrical systems", correct: false },
                { text: "To ensure structures can support loads", correct: true },
                { text: "To design fluid systems", correct: false },
                { text: "To create software algorithms", correct: false }
            ]
        },
        {
            question: "What is the process of heat treatment used for?",
            answers: [
                { text: "To soften metals", correct: false },
                { text: "To alter physical and sometimes chemical properties of a material", correct: true },
                { text: "To measure stress", correct: false },
                { text: "To enhance visual appearance", correct: false }
            ]
        },
        {
            question: "What type of energy is stored in a compressed spring?",
            answers: [
                { text: "Kinetic Energy", correct: false },
                { text: "Potential Energy", correct: true },
                { text: "Thermal Energy", correct: false },
                { text: "Chemical Energy", correct: false }
            ]
        },
        {
            question: "Which type of engineering focuses on the design and construction of buildings?",
            answers: [
                { text: "Mechanical Engineering", correct: false },
                { text: "Civil Engineering", correct: true },
                { text: "Electrical Engineering", correct: false },
                { text: "Aerospace Engineering", correct: false }
            ]
        },
        {
            question: "What is a prototype?",
            answers: [
                { text: "A finalized product", correct: false },
                { text: "An early sample or model of a product", correct: true },
                { text: "A type of software", correct: false },
                { text: "A design document", correct: false }
            ]
        },
        {
            question: "Which law states that pressure and volume are inversely related?",
            answers: [
                { text: "Boyle's Law", correct: true },
                { text: "Charles's Law", correct: false },
                { text: "Newton's Law", correct: false },
                { text: "Avogadro's Law", correct: false }
            ]
        },
        {
            question: "What is the purpose of an engineer's drawing?",
            answers: [
                { text: "To illustrate artistic concepts", correct: false },
                { text: "To convey detailed specifications for manufacturing", correct: true },
                { text: "To provide a general overview", correct: false },
                { text: "To calculate expenses", correct: false }
            ]
        },
        {
            question: "What does an engineer do during a feasibility study?",
            answers: [
                { text: "To design blueprints", correct: false },
                { text: "To assess the practicality of a project", correct: true },
                { text: "To calculate budgets", correct: false },
                { text: "To supervise construction", correct: false }
            ]
        },
        {
            question: "What is the SI unit of pressure?",
            answers: [
                { text: "Pascal", correct: true },
                { text: "Bar", correct: false },
                { text: "Atmosphere", correct: false },
                { text: "Torr", correct: false }
            ]
        },
        {
            question: "Which component is essential in a hydraulic system?",
            answers: [
                { text: "Pump", correct: true },
                { text: "Motor", correct: false },
                { text: "Gearbox", correct: false },
                { text: "Battery", correct: false }
            ]
        },
        {
            question: "What is the primary focus of chemical engineering?",
            answers: [
                { text: "Designing infrastructure", correct: false },
                { text: "Transforming raw materials into valuable products", correct: true },
                { text: "Building mechanical systems", correct: false },
                { text: "Creating software solutions", correct: false }
            ]
        },
        {
            question: "What does the acronym HVAC stand for?",
            answers: [
                { text: "Heating, Ventilation, and Air Conditioning", correct: true },
                { text: "Heating, Value, and Air Conditioning", correct: false },
                { text: "High Voltage Air Conditioning", correct: false },
                { text: "Heating, Ventilation, and Advanced Cooling", correct: false }
            ]
        }
    ],

    healthCareQuizData: [
        {
            question: "What is the primary function of red blood cells?",
            answers: [
                { text: "To fight infection", correct: false },
                { text: "To carry oxygen", correct: true },
                { text: "To clot blood", correct: false },
                { text: "To regulate temperature", correct: false }
            ]
        },
        {
            question: "What is the term for the process of healing a wound?",
            answers: [
                { text: "Homeostasis", correct: false },
                { text: "Regeneration", correct: true },
                { text: "Inflammation", correct: false },
                { text: "Infection", correct: false }
            ]
        },
        {
            question: "What is the normal body temperature in Celsius?",
            answers: [
                { text: "36.1°C", correct: false },
                { text: "37.0°C", correct: true },
                { text: "38.5°C", correct: false },
                { text: "39.0°C", correct: false }
            ]
        },
        {
            question: "What type of doctor specializes in the treatment of children?",
            answers: [
                { text: "Pediatrician", correct: true },
                { text: "Dermatologist", correct: false },
                { text: "Cardiologist", correct: false },
                { text: "Neurologist", correct: false }
            ]
        },
        {
            question: "What is the primary function of the immune system?",
            answers: [
                { text: "To digest food", correct: false },
                { text: "To defend against pathogens", correct: true },
                { text: "To produce energy", correct: false },
                { text: "To circulate blood", correct: false }
            ]
        },
        {
            question: "What is an antibiotic used for?",
            answers: [
                { text: "To treat viral infections", correct: false },
                { text: "To kill bacteria", correct: true },
                { text: "To reduce pain", correct: false },
                { text: "To lower fever", correct: false }
            ]
        },
        {
            question: "What is the largest organ in the human body?",
            answers: [
                { text: "Heart", correct: false },
                { text: "Liver", correct: false },
                { text: "Skin", correct: true },
                { text: "Lung", correct: false }
            ]
        },
        {
            question: "What does CPR stand for?",
            answers: [
                { text: "Cardiopulmonary Resuscitation", correct: true },
                { text: "Cerebral Pressure Regulation", correct: false },
                { text: "Cardiac Pulse Recovery", correct: false },
                { text: "Critical Patient Response", correct: false }
            ]
        },
        {
            question: "Which vitamin is primarily obtained from sunlight?",
            answers: [
                { text: "Vitamin A", correct: false },
                { text: "Vitamin B12", correct: false },
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: true }
            ]
        },
        {
            question: "What is the term for high blood pressure?",
            answers: [
                { text: "Hypotension", correct: false },
                { text: "Hypertension", correct: true },
                { text: "Arrhythmia", correct: false },
                { text: "Atherosclerosis", correct: false }
            ]
        },
        {
            question: "What is a common symptom of diabetes?",
            answers: [
                { text: "Frequent urination", correct: true },
                { text: "Nausea", correct: false },
                { text: "Chest pain", correct: false },
                { text: "Dizziness", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of a vaccine?",
            answers: [
                { text: "To treat infections", correct: false },
                { text: "To prevent diseases", correct: true },
                { text: "To reduce symptoms", correct: false },
                { text: "To speed up recovery", correct: false }
            ]
        },
        {
            question: "What is the medical term for the windpipe?",
            answers: [
                { text: "Bronchus", correct: false },
                { text: "Trachea", correct: true },
                { text: "Esophagus", correct: false },
                { text: "Larynx", correct: false }
            ]
        },
        {
            question: "What is the primary function of the pancreas?",
            answers: [
                { text: "To produce bile", correct: false },
                { text: "To regulate blood sugar", correct: true },
                { text: "To filter blood", correct: false },
                { text: "To transport oxygen", correct: false }
            ]
        },
        {
            question: "What is an ECG used to monitor?",
            answers: [
                { text: "Brain activity", correct: false },
                { text: "Heart rhythm", correct: true },
                { text: "Lung capacity", correct: false },
                { text: "Blood pressure", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of the liver?",
            answers: [
                { text: "To digest food", correct: false },
                { text: "To filter toxins", correct: true },
                { text: "To pump blood", correct: false },
                { text: "To produce insulin", correct: false }
            ]
        },
        {
            question: "What is the common name for the femur?",
            answers: [
                { text: "Thigh bone", correct: true },
                { text: "Arm bone", correct: false },
                { text: "Skull bone", correct: false },
                { text: "Spinal bone", correct: false }
            ]
        },
        {
            question: "What is the medical term for the fear of spiders?",
            answers: [
                { text: "Claustrophobia", correct: false },
                { text: "Arachnophobia", correct: true },
                { text: "Agoraphobia", correct: false },
                { text: "Acrophobia", correct: false }
            ]
        },
        {
            question: "What is the primary role of a pharmacist?",
            answers: [
                { text: "To perform surgeries", correct: false },
                { text: "To dispense medications", correct: true },
                { text: "To diagnose diseases", correct: false },
                { text: "To provide therapy", correct: false }
            ]
        },
        {
            question: "What is a common treatment for allergies?",
            answers: [
                { text: "Antihistamines", correct: true },
                { text: "Antibiotics", correct: false },
                { text: "Analgesics", correct: false },
                { text: "Vaccines", correct: false }
            ]
        },
        {
            question: "What is the term for a healthcare professional who practices dentistry?",
            answers: [
                { text: "Doctor", correct: false },
                { text: "Nurse", correct: false },
                { text: "Dentist", correct: true },
                { text: "Pharmacist", correct: false }
            ]
        },
        {
            question: "What is the term for a medical professional who specializes in heart disorders?",
            answers: [
                { text: "Cardiologist", correct: true },
                { text: "Dermatologist", correct: false },
                { text: "Endocrinologist", correct: false },
                { text: "Neurologist", correct: false }
            ]
        }
    ],

    astrologyQuizData: [
        {
            question: "What is the astrological sign for people born between March 21 and April 19?",
            answers: [
                { text: "Taurus", correct: false },
                { text: "Aries", correct: true },
                { text: "Gemini", correct: false },
                { text: "Pisces", correct: false }
            ]
        },
        {
            question: "What planet rules Scorpio?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Pluto", correct: true },
                { text: "Venus", correct: false },
                { text: "Jupiter", correct: false }
            ]
        },
        {
            question: "Which sign is represented by the Twins?",
            answers: [
                { text: "Leo", correct: false },
                { text: "Gemini", correct: true },
                { text: "Libra", correct: false },
                { text: "Sagittarius", correct: false }
            ]
        },
        {
            question: "What element is associated with Leo?",
            answers: [
                { text: "Water", correct: false },
                { text: "Fire", correct: true },
                { text: "Earth", correct: false },
                { text: "Air", correct: false }
            ]
        },
        {
            question: "Which zodiac sign is known for being balanced and diplomatic?",
            answers: [
                { text: "Capricorn", correct: false },
                { text: "Libra", correct: true },
                { text: "Aquarius", correct: false },
                { text: "Taurus", correct: false }
            ]
        }
    ],

    animalQuizData: [
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false }
            ]
        },
        {
            question: "Which bird is known for its colorful plumage and ability to mimic sounds?",
            answers: [
                { text: "Parrot", correct: true },
                { text: "Sparrow", correct: false },
                { text: "Eagle", correct: false },
                { text: "Owl", correct: false }
            ]
        },
        {
            question: "What is the fastest land animal?",
            answers: [
                { text: "Cheetah", correct: true },
                { text: "Lion", correct: false },
                { text: "Tiger", correct: false },
                { text: "Gazelle", correct: false }
            ]
        },
        {
            question: "Which of the following animals can live both on land and in water?",
            answers: [
                { text: "Frog", correct: true },
                { text: "Dog", correct: false },
                { text: "Cat", correct: false },
                { text: "Elephant", correct: false }
            ]
        },
        {
            question: "What is the primary diet of pandas?",
            answers: [
                { text: "Meat", correct: false },
                { text: "Bamboo", correct: true },
                { text: "Fruits", correct: false },
                { text: "Insects", correct: false }
            ]
        }
    ],

    philosophyQuizData: [
        {
            question: "Who is known as the father of Western philosophy?",
            answers: [
                { text: "Plato", correct: false },
                { text: "Socrates", correct: true },
                { text: "Aristotle", correct: false },
                { text: "Descartes", correct: false }
            ]
        },
        {
            question: "What is the main focus of existentialism?",
            answers: [
                { text: "Objective reality", correct: false },
                { text: "Individual existence and freedom", correct: true },
                { text: "Moral absolutism", correct: false },
                { text: "Collective consciousness", correct: false }
            ]
        },
        {
            question: "Who wrote 'The Republic'?",
            answers: [
                { text: "Aristotle", correct: false },
                { text: "Plato", correct: true },
                { text: "Socrates", correct: false },
                { text: "Nietzsche", correct: false }
            ]
        },
        {
            question: "What does the term 'utilitarianism' refer to?",
            answers: [
                { text: "Ethics based on duty", correct: false },
                { text: "Maximizing happiness for the greatest number", correct: true },
                { text: "Belief in inherent rights", correct: false },
                { text: "Moral relativism", correct: false }
            ]
        },
        {
            question: "What is the primary focus of Stoicism?",
            answers: [
                { text: "Emotions and desires", correct: false },
                { text: "Control over one's reactions", correct: true },
                { text: "Material wealth", correct: false },
                { text: "Sensory experiences", correct: false }
            ]
        },
        {
            question: "Which philosopher is known for the quote 'I think, therefore I am'?",
            answers: [
                { text: "Hume", correct: false },
                { text: "Kant", correct: false },
                { text: "Descartes", correct: true },
                { text: "Locke", correct: false }
            ]
        },
        {
            question: "What is epistemology concerned with?",
            answers: [
                { text: "Nature of reality", correct: false },
                { text: "Study of knowledge", correct: true },
                { text: "Ethics and morality", correct: false },
                { text: "Political theory", correct: false }
            ]
        },
        {
            question: "Who is associated with the concept of the 'Social Contract'?",
            answers: [
                { text: "Hobbes", correct: true },
                { text: "Rousseau", correct: true },
                { text: "Locke", correct: true },
                { text: "Kant", correct: false }
            ]
        },
        {
            question: "Which philosophical school focuses on the analysis of language and meaning?",
            answers: [
                { text: "Logical Positivism", correct: true },
                { text: "Phenomenology", correct: false },
                { text: "Pragmatism", correct: false },
                { text: "Existentialism", correct: false }
            ]
        },
        {
            question: "What does the term 'nihilism' refer to?",
            answers: [
                { text: "Belief in absolute truth", correct: false },
                { text: "Rejection of all religious and moral principles", correct: true },
                { text: "Pursuit of happiness", correct: false },
                { text: "Importance of the individual", correct: false }
            ]
        },
        {
            question: "What does 'metaphysics' study?",
            answers: [
                { text: "Human behavior", correct: false },
                { text: "Nature of reality and existence", correct: true },
                { text: "Political systems", correct: false },
                { text: "Ethical principles", correct: false }
            ]
        },
        {
            question: "Which philosopher is known for the idea of the 'will to power'?",
            answers: [
                { text: "Kant", correct: false },
                { text: "Nietzsche", correct: true },
                { text: "Sartre", correct: false },
                { text: "Hegel", correct: false }
            ]
        },
        {
            question: "What is the primary focus of virtue ethics?",
            answers: [
                { text: "Consequences of actions", correct: false },
                { text: "Moral character", correct: true },
                { text: "Rules and duties", correct: false },
                { text: "Social contracts", correct: false }
            ]
        },
        {
            question: "Which philosopher introduced the concept of 'categorical imperative'?",
            answers: [
                { text: "Hume", correct: false },
                { text: "Kant", correct: true },
                { text: "Mill", correct: false },
                { text: "Nietzsche", correct: false }
            ]
        },
        {
            question: "What is the main idea behind pragmatism?",
            answers: [
                { text: "Truth is absolute", correct: false },
                { text: "Knowledge is based on practical consequences", correct: true },
                { text: "Reality is subjective", correct: false },
                { text: "Emotions guide moral decisions", correct: false }
            ]
        },
        {
            question: "Who wrote 'Critique of Pure Reason'?",
            answers: [
                { text: "Hume", correct: false },
                { text: "Kant", correct: true },
                { text: "Descartes", correct: false },
                { text: "Leibniz", correct: false }
            ]
        },
        {
            question: "Which philosophical tradition emphasizes personal experience as the source of knowledge?",
            answers: [
                { text: "Empiricism", correct: true },
                { text: "Rationalism", correct: false },
                { text: "Idealism", correct: false },
                { text: "Pragmatism", correct: false }
            ]
        },
        {
            question: "What is the central idea of utilitarianism?",
            answers: [
                { text: "Greatest happiness principle", correct: true },
                { text: "Moral absolutism", correct: false },
                { text: "Individual rights", correct: false },
                { text: "Virtue ethics", correct: false }
            ]
        },
        {
            question: "Which philosopher argued for the separation of powers in government?",
            answers: [
                { text: "Montesquieu", correct: true },
                { text: "Locke", correct: false },
                { text: "Rousseau", correct: false },
                { text: "Hobbes", correct: false }
            ]
        },
        {
            question: "What does the term 'empirical' mean?",
            answers: [
                { text: "Based on logic", correct: false },
                { text: "Based on observation and experience", correct: true },
                { text: "Theoretical", correct: false },
                { text: "Idealistic", correct: false }
            ]
        }
    ],

    financeQuizData: [
        {
            question: "What is the term for the amount of money borrowed or invested?",
            answers: [
                { text: "Principal", correct: true },
                { text: "Interest", correct: false },
                { text: "Dividend", correct: false },
                { text: "Capital Gain", correct: false }
            ]
        },
        {
            question: "Which financial statement shows a company's revenues and expenses?",
            answers: [
                { text: "Balance Sheet", correct: false },
                { text: "Income Statement", correct: true },
                { text: "Cash Flow Statement", correct: false },
                { text: "Equity Statement", correct: false }
            ]
        },
        {
            question: "What is the risk-return tradeoff?",
            answers: [
                { text: "Higher risk leads to lower returns", correct: false },
                { text: "Higher risk leads to higher returns", correct: true },
                { text: "There is no correlation", correct: false },
                { text: "Lower risk always guarantees returns", correct: false }
            ]
        },
        {
            question: "What does IPO stand for?",
            answers: [
                { text: "Initial Public Offering", correct: true },
                { text: "Independent Purchase Option", correct: false },
                { text: "Interest Payment Option", correct: false },
                { text: "Investment Policy Overview", correct: false }
            ]
        },
        {
            question: "What is a stock?",
            answers: [
                { text: "A loan taken by a company", correct: false },
                { text: "An ownership share in a company", correct: true },
                { text: "A type of bond", correct: false },
                { text: "A form of cash equivalent", correct: false }
            ]
        },
        {
            question: "What does 'liquidity' refer to in finance?",
            answers: [
                { text: "The ability to pay debts", correct: false },
                { text: "How quickly an asset can be converted to cash", correct: true },
                { text: "The amount of cash on hand", correct: false },
                { text: "The profitability of a company", correct: false }
            ]
        },
        {
            question: "Which of the following is considered a fixed expense?",
            answers: [
                { text: "Utility bills", correct: false },
                { text: "Rent", correct: true },
                { text: "Groceries", correct: false },
                { text: "Entertainment", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of a budget?",
            answers: [
                { text: "To limit spending", correct: false },
                { text: "To track expenses", correct: false },
                { text: "To plan future income and expenditures", correct: true },
                { text: "To increase debt", correct: false }
            ]
        },
        {
            question: "What is the primary function of a central bank?",
            answers: [
                { text: "Regulating currency", correct: true },
                { text: "Managing government debt", correct: false },
                { text: "Setting tax rates", correct: false },
                { text: "Creating laws", correct: false }
            ]
        },
        {
            question: "What is the stock market?",
            answers: [
                { text: "A place where currencies are traded", correct: false },
                { text: "A marketplace for buying and selling shares", correct: true },
                { text: "A type of bank", correct: false },
                { text: "A government agency", correct: false }
            ]
        },
        {
            question: "What is a bond?",
            answers: [
                { text: "A type of stock", correct: false },
                { text: "A loan made by an investor to a borrower", correct: true },
                { text: "A share in a company", correct: false },
                { text: "A currency exchange", correct: false }
            ]
        },
        {
            question: "What is an interest rate?",
            answers: [
                { text: "The fee for using someone else's money", correct: true },
                { text: "The amount of money earned from investments", correct: false },
                { text: "The total amount of debt", correct: false },
                { text: "The profit made by a business", correct: false }
            ]
        },
        {
            question: "What is diversification in investing?",
            answers: [
                { text: "Investing in a single asset", correct: false },
                { text: "Spreading investments across various assets", correct: true },
                { text: "Focusing on high-risk investments", correct: false },
                { text: "Investing only in stocks", correct: false }
            ]
        },
        {
            question: "What is the main purpose of financial markets?",
            answers: [
                { text: "Facilitate buying and selling of securities", correct: true },
                { text: "Create laws", correct: false },
                { text: "Regulate interest rates", correct: false },
                { text: "Control inflation", correct: false }
            ]
        },
        {
            question: "What is inflation?",
            answers: [
                { text: "Increase in prices", correct: true },
                { text: "Decrease in prices", correct: false },
                { text: "Stability in prices", correct: false },
                { text: "Economic recession", correct: false }
            ]
        },
        {
            question: "What does ROI stand for?",
            answers: [
                { text: "Rate of Investment", correct: false },
                { text: "Return on Investment", correct: true },
                { text: "Return on Income", correct: false },
                { text: "Revenue of Investment", correct: false }
            ]
        },
        {
            question: "What is a portfolio?",
            answers: [
                { text: "A collection of investments", correct: true },
                { text: "A single stock", correct: false },
                { text: "A type of bond", correct: false },
                { text: "A bank account", correct: false }
            ]
        },
        {
            question: "What is a mutual fund?",
            answers: [
                { text: "A fund managed by multiple investors", correct: false },
                { text: "A pool of money collected from many investors to invest in a diversified portfolio", correct: true },
                { text: "A government fund", correct: false },
                { text: "A type of stock", correct: false }
            ]
        },
        {
            question: "What is a financial statement?",
            answers: [
                { text: "A report of a company's financial performance", correct: true },
                { text: "A document for tax purposes", correct: false },
                { text: "A legal document", correct: false },
                { text: "An investment prospectus", correct: false }
            ]
        },
        {
            question: "What is the difference between a stock and a bond?",
            answers: [
                { text: "Stocks are equity investments, while bonds are debt investments", correct: true },
                { text: "Bonds offer higher returns than stocks", correct: false },
                { text: "Stocks have fixed returns", correct: false },
                { text: "There is no difference", correct: false }
            ]
        },
        {
            question: "What is market capitalization?",
            answers: [
                { text: "The total value of a company's outstanding shares", correct: true },
                { text: "The total amount of a company's debt", correct: false },
                { text: "The total revenue of a company", correct: false },
                { text: "The total number of employees", correct: false }
            ]
        },
        {
            question: "What is an asset?",
            answers: [
                { text: "Anything of value owned by an individual or entity", correct: true },
                { text: "A type of investment", correct: false },
                { text: "A loan", correct: false },
                { text: "A liability", correct: false }
            ]
        },
        {
            question: "What is a liability?",
            answers: [
                { text: "A debt or obligation owed to another party", correct: true },
                { text: "An asset", correct: false },
                { text: "A source of income", correct: false },
                { text: "A type of investment", correct: false }
            ]
        },
        {
            question: "What is the primary goal of financial management?",
            answers: [
                { text: "Maximizing shareholder value", correct: true },
                { text: "Minimizing expenses", correct: false },
                { text: "Ensuring liquidity", correct: false },
                { text: "Compliance with regulations", correct: false }
            ]
        },
        {
            question: "What is the capital market?",
            answers: [
                { text: "Market for buying and selling stocks and bonds", correct: true },
                { text: "Market for consumer goods", correct: false },
                { text: "Market for real estate", correct: false },
                { text: "Market for foreign exchange", correct: false }
            ]
        },
        {
            question: "What is the difference between a primary market and a secondary market?",
            answers: [
                { text: "Primary market is for new securities, while secondary is for trading existing ones", correct: true },
                { text: "Secondary market is for new securities, while primary is for trading existing ones", correct: false },
                { text: "There is no difference", correct: false },
                { text: "Primary market is less regulated than secondary", correct: false }
            ]
        }
    ],

    psychologyQuizData: [
        {
            question: "What is the main focus of cognitive psychology?",
            answers: [
                { text: "Behavioral responses", correct: false },
                { text: "Mental processes", correct: true },
                { text: "Unconscious mind", correct: false },
                { text: "Social interactions", correct: false }
            ]
        },
        {
            question: "Who is known as the father of psychoanalysis?",
            answers: [
                { text: "Carl Jung", correct: false },
                { text: "Sigmund Freud", correct: true },
                { text: "B.F. Skinner", correct: false },
                { text: "William James", correct: false }
            ]
        },
        {
            question: "What is Maslow's hierarchy of needs?",
            answers: [
                { text: "A theory of personality", correct: false },
                { text: "A framework for understanding human motivation", correct: true },
                { text: "A model of cognitive development", correct: false },
                { text: "A treatment for anxiety", correct: false }
            ]
        },
        {
            question: "What is classical conditioning?",
            answers: [
                { text: "Learning through reinforcement", correct: false },
                { text: "Learning through association", correct: true },
                { text: "Learning through observation", correct: false },
                { text: "Learning through trial and error", correct: false }
            ]
        },
        {
            question: "Which neurotransmitter is commonly associated with mood regulation?",
            answers: [
                { text: "Dopamine", correct: false },
                { text: "Serotonin", correct: true },
                { text: "Norepinephrine", correct: false },
                { text: "Acetylcholine", correct: false }
            ]
        },
        {
            question: "What is the focus of behavioral psychology?",
            answers: [
                { text: "Thought processes", correct: false },
                { text: "Observable behaviors", correct: true },
                { text: "Emotional responses", correct: false },
                { text: "Unconscious motives", correct: false }
            ]
        },
        {
            question: "What is a major criticism of psychoanalysis?",
            answers: [
                { text: "Lack of scientific evidence", correct: true },
                { text: "Too focused on behavior", correct: false },
                { text: "Overemphasis on genetics", correct: false },
                { text: "Neglect of unconscious processes", correct: false }
            ]
        },
        {
            question: "Which psychologist developed the theory of operant conditioning?",
            answers: [
                { text: "B.F. Skinner", correct: true },
                { text: "Carl Rogers", correct: false },
                { text: "Jean Piaget", correct: false },
                { text: "Erik Erikson", correct: false }
            ]
        },
        {
            question: "What is the primary focus of humanistic psychology?",
            answers: [
                { text: "Unconscious motivations", correct: false },
                { text: "Personal growth and self-actualization", correct: true },
                { text: "Behavioral responses", correct: false },
                { text: "Cognitive processes", correct: false }
            ]
        },
        {
            question: "What is the purpose of psychological testing?",
            answers: [
                { text: "To diagnose mental disorders", correct: true },
                { text: "To predict behavior", correct: false },
                { text: "To measure intelligence", correct: false },
                { text: "To evaluate therapy effectiveness", correct: false }
            ]
        },
        {
            question: "What does the term 'cognitive dissonance' refer to?",
            answers: [
                { text: "A feeling of discomfort from holding conflicting beliefs", correct: true },
                { text: "A state of confusion", correct: false },
                { text: "An inability to make decisions", correct: false },
                { text: "A mental disorder", correct: false }
            ]
        },
        {
            question: "What is a common treatment for depression?",
            answers: [
                { text: "Cognitive Behavioral Therapy", correct: true },
                { text: "Exposure Therapy", correct: false },
                { text: "Psychoanalysis", correct: false },
                { text: "Play Therapy", correct: false }
            ]
        },
        {
            question: "What is the main focus of developmental psychology?",
            answers: [
                { text: "Changes in behavior over time", correct: false },
                { text: "Human growth and development across the lifespan", correct: true },
                { text: "The impact of culture on behavior", correct: false },
                { text: "Neurotransmitter functions", correct: false }
            ]
        },
        {
            question: "What is the role of a clinical psychologist?",
            answers: [
                { text: "To conduct research", correct: false },
                { text: "To diagnose and treat mental health issues", correct: true },
                { text: "To teach psychology", correct: false },
                { text: "To develop new therapies", correct: false }
            ]
        },
        {
            question: "What is an example of a psychological disorder?",
            answers: [
                { text: "Generalized Anxiety Disorder", correct: true },
                { text: "Obsessive-Compulsive Behavior", correct: false },
                { text: "Depressive Symptoms", correct: false },
                { text: "Cognitive Functions", correct: false }
            ]
        },
        {
            question: "What is a major focus of social psychology?",
            answers: [
                { text: "Individual behavior", correct: false },
                { text: "Group dynamics and social influences", correct: true },
                { text: "Neurological functions", correct: false },
                { text: "Cognitive processes", correct: false }
            ]
        },
        {
            question: "What is the 'nature vs. nurture' debate about?",
            answers: [
                { text: "The influence of genetics vs. environment on behavior", correct: true },
                { text: "The impact of education on intelligence", correct: false },
                { text: "The role of culture in behavior", correct: false },
                { text: "The effects of parenting styles", correct: false }
            ]
        },
        {
            question: "What is the DSM-5?",
            answers: [
                { text: "A diagnostic manual for mental disorders", correct: true },
                { text: "A therapy technique", correct: false },
                { text: "A personality assessment tool", correct: false },
                { text: "A cognitive development theory", correct: false }
            ]
        },
        {
            question: "What is the purpose of group therapy?",
            answers: [
                { text: "To improve individual behavior", correct: false },
                { text: "To provide support and share experiences", correct: true },
                { text: "To diagnose disorders", correct: false },
                { text: "To replace individual therapy", correct: false }
            ]
        },
        {
            question: "What is the main focus of cognitive-behavioral therapy (CBT)?",
            answers: [
                { text: "Changing negative thought patterns", correct: true },
                { text: "Exploring childhood experiences", correct: false },
                { text: "Improving communication skills", correct: false },
                { text: "Understanding biological factors", correct: false }
            ]
        }
    ],

    physicsQuizData: [
        {
            question: "What is the unit of force?",
            answers: [
                { text: "Joule", correct: false },
                { text: "Newton", correct: true },
                { text: "Pascal", correct: false },
                { text: "Watt", correct: false }
            ]
        },
        {
            question: "What is the speed of light in a vacuum?",
            answers: [
                { text: "300,000 km/s", correct: true },
                { text: "150,000 km/s", correct: false },
                { text: "3,000 km/s", correct: false },
                { text: "30,000 km/s", correct: false }
            ]
        },
        {
            question: "What is the law of universal gravitation?",
            answers: [
                { text: "Every object attracts every other object", correct: true },
                { text: "Energy cannot be created or destroyed", correct: false },
                { text: "For every action, there is an equal and opposite reaction", correct: false },
                { text: "The total energy of a closed system is constant", correct: false }
            ]
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            answers: [
                { text: "9.8 m/s²", correct: true },
                { text: "9.8 km/s²", correct: false },
                { text: "10 m/s²", correct: false },
                { text: "8.9 m/s²", correct: false }
            ]
        },
        {
            question: "What is the formula for kinetic energy?",
            answers: [
                { text: "KE = mv²", correct: false },
                { text: "KE = 1/2 mv²", correct: true },
                { text: "KE = mgh", correct: false },
                { text: "KE = Fd", correct: false }
            ]
        },
        {
            question: "What is the principle of conservation of energy?",
            answers: [
                { text: "Energy cannot be created or destroyed", correct: true },
                { text: "Energy is always lost in a system", correct: false },
                { text: "Energy can only be transformed", correct: false },
                { text: "Energy depends on mass", correct: false }
            ]
        },
        {
            question: "What is the difference between speed and velocity?",
            answers: [
                { text: "Speed is scalar; velocity is vector", correct: true },
                { text: "Speed is vector; velocity is scalar", correct: false },
                { text: "Both are the same", correct: false },
                { text: "Neither has units", correct: false }
            ]
        },
        {
            question: "What is a photon?",
            answers: [
                { text: "A particle of light", correct: true },
                { text: "A type of wave", correct: false },
                { text: "A form of energy", correct: false },
                { text: "An electron", correct: false }
            ]
        },
        {
            question: "What does E=mc² represent?",
            answers: [
                { text: "Energy is equal to mass times the speed of light squared", correct: true },
                { text: "Energy is equal to mass times acceleration", correct: false },
                { text: "Mass is equal to energy times the speed of light", correct: false },
                { text: "Energy is equal to force times distance", correct: false }
            ]
        },
        {
            question: "What is the unit of electric current?",
            answers: [
                { text: "Volt", correct: false },
                { text: "Ohm", correct: false },
                { text: "Ampere", correct: true },
                { text: "Watt", correct: false }
            ]
        },
        {
            question: "What is the law of reflection?",
            answers: [
                { text: "The angle of incidence equals the angle of reflection", correct: true },
                { text: "Light travels in a straight line", correct: false },
                { text: "All light is absorbed", correct: false },
                { text: "Light bends when it passes through a lens", correct: false }
            ]
        },
        {
            question: "What is the difference between an insulator and a conductor?",
            answers: [
                { text: "Insulators resist electric current; conductors allow it", correct: true },
                { text: "Insulators allow electric current; conductors resist it", correct: false },
                { text: "Both are the same", correct: false },
                { text: "Neither conducts electricity", correct: false }
            ]
        },
        {
            question: "What is the formula for gravitational force?",
            answers: [
                { text: "F = ma", correct: false },
                { text: "F = G(m₁m₂/r²)", correct: true },
                { text: "F = mv²", correct: false },
                { text: "F = mgh", correct: false }
            ]
        },
        {
            question: "What is absolute zero?",
            answers: [
                { text: "The lowest possible temperature", correct: true },
                { text: "The freezing point of water", correct: false },
                { text: "Room temperature", correct: false },
                { text: "The boiling point of water", correct: false }
            ]
        },
        {
            question: "What is the principle of buoyancy?",
            answers: [
                { text: "An object in fluid will float if it displaces a volume of fluid equal to its weight", correct: true },
                { text: "Buoyancy is dependent on the object's shape", correct: false },
                { text: "All objects sink in water", correct: false },
                { text: "Buoyancy is unrelated to fluid density", correct: false }
            ]
        },
        {
            question: "What is the main source of energy for the Earth?",
            answers: [
                { text: "The Sun", correct: true },
                { text: "The Moon", correct: false },
                { text: "Geothermal energy", correct: false },
                { text: "Wind", correct: false }
            ]
        },
        {
            question: "What is a supernova?",
            answers: [
                { text: "A stellar explosion", correct: true },
                { text: "A type of black hole", correct: false },
                { text: "A collapsing star", correct: false },
                { text: "A large asteroid", correct: false }
            ]
        },
        {
            question: "What is the formula for density?",
            answers: [
                { text: "Density = Mass/Volume", correct: true },
                { text: "Density = Volume/Mass", correct: false },
                { text: "Density = Mass × Volume", correct: false },
                { text: "Density = Force/Area", correct: false }
            ]
        },
        {
            question: "What is a wave?",
            answers: [
                { text: "A disturbance that transfers energy", correct: true },
                { text: "A type of particle", correct: false },
                { text: "A constant flow of matter", correct: false },
                { text: "A solid object in motion", correct: false }
            ]
        }
    ]
};


// Create the global variables
let currentQuestion = 0;
let totalQuestions = 0; // Total number of questions
let score = 0;
let isWindowClosing = false;

// DOM Elements
const loginContainer = document.querySelector(".loginContainer");
const displayContainer = document.querySelector(".displayContainer");

// Function to remove an element by its ID
function removeElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove(); // Remove the element from the DOM
    }
}
// Function to remove the registration section
function removeRegisterSection() {
    removeElementById("registerSection");
}
// Function to remove the login section
function removeLoginSection() {
    removeElementById("loginSection");
}
// Function to remove the quiz section
function removeQuizSection() {
    removeElementById("quizSection");
}
// Function to remove the score section
function removeScoreSection() {
    removeElementById("scoreSection");
}
// Function to remove the past scores section
function removePastScoresSection() {
    removeElementById("pastScoresSection");
}
// Function to remove the quiz selection section
function removeQuizSelectionSection() {
    removeElementById("quizSelectionSection");
}
// Function to remove all sections dynamically
function removeAllSections() {
    removeRegisterSection();
    removeLoginSection();
    removeQuizSection();
    removeScoreSection();
    removePastScoresSection();
    removeQuizSelectionSection();
    removeElementById("actionButtons"); // Remove the action buttons section
    removeElementById("dialog-dark-rounded"); // Remove the dialog
}
// Function to create and append the registration form dynamically
function createRegisterSection() {
    var _a;
    const registerSection = document.createElement("div");
    registerSection.classList.add("nes-container", "is-rounded", "registeration-section");
    registerSection.id = "registerSection";
    registerSection.innerHTML = `
        <h2 class="nes-text">Register</h2>
        <label for="firstName" class="nes-text">First Name:</label>
        <input type="text" id="firstName" class="nes-input" placeholder="Enter first name" />
        <label for="lastName" class="nes-text">Last Name:</label>
        <input type="text" id="lastName" class="nes-input" placeholder="Enter last name" />
        <label for="email" class="nes-text">Email:</label>
        <input type="email" id="email" class="nes-input" placeholder="Enter email" />
        <label for="registerUsername" class="nes-text">Username:</label>
        <input type="text" id="registerUsername" class="nes-input" placeholder="Enter username" />
        <label for="registerPassword" class="nes-text">Password:</label>
        <input type="password" id="registerPassword" class="nes-input" placeholder="Enter password" />
        <label for="confirmPassword" class="nes-text">Retype Password:</label>
        <input type="password" id="confirmPassword" class="nes-input" placeholder="Retype password" />
        <div class="form-check">
			<input class="form-check-input" type="checkbox" value="" id="registerPasswordView">
			<label class="form-check-label" for="registerPasswordView">
				Show Password
			</label>
		</div>
        <button id="registerButton" class="nes-btn is-success">Register</button>
        <p id="registerError" class="nes-text is-error" style="display:none;"></p>
    `;
    // Append the dynamically created register section to the loginContainer
    (_a = document.querySelector(".loginContainer")) === null || _a === void 0 ? void 0 : _a.appendChild(registerSection);
    // Attach event listener to the register button
    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", validateRegistrationForm);
    // Attach event listener for the Enter key on the register section
    registerSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateRegistrationForm();
        }
    });
    // Retrieve input elements by their IDs and attach event listeners to them
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    // Attach input event listeners to all input fields for clearing error styles
    [firstName, lastName, email, registerUsername, registerPassword, confirmPassword].forEach((field) => {
        field.addEventListener("input", clearErrorStyles);
    });
    const checkbox = loginContainer.querySelector('#registerPasswordView');
    const passwordElement = document.querySelector("#registerPassword");
    const confirmPasswordElement = document.querySelector("#confirmPassword");

    checkbox.addEventListener('change', function () {
        if ($(this).is(':checked')) {
            passwordElement.type = "text";
            confirmPasswordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
            confirmPasswordElement.type = "password";
        }
    });
}
// Validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
/**
 * Validates the registration form and performs necessary checks.
 * 
 * @returns {Promise<void>} - A promise that resolves when the form is successfully validated and the user is registered.
 */
async function validateRegistrationForm() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    const fields = [
        { element: firstName, name: "First Name" },
        { element: lastName, name: "Last Name" },
        { element: email, name: "Email" },
        { element: registerUsername, name: "Username" },
        { element: registerPassword, name: "Password" },
        { element: confirmPassword, name: "Confirm Password" },
    ];
    // Reset previous error styles
    resetErrorStyles(fields);
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none";
    // Basic validation
    for (const field of fields) {
        const value = field.element.value.trim();
        if (!value) {
            showError(`${field.name} is required.`, field.element);
            return;
        }
    }
    const userEmail = email.value.trim();
    if (!validateEmail(userEmail)) {
        showError("Please enter a valid email address.", email);
        return;
    }
    const password = registerPassword.value.trim();
    const confirmPwd = confirmPassword.value.trim();
    if (!isValidPassword(password)) {
        showError("Password must be at least 8 characters long and contain at least one symbol.", registerPassword);
        return;
    }
    if (password !== confirmPwd) {
        showError("Passwords do not match.", registerPassword);
        showError("Passwords do not match.", confirmPassword);
        return;
    }
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (isUsernameTaken(registerUsername.value.trim(), users)) {
        showError("Username already exists.", registerUsername);
        return;
    }
    // Register the new user
    await registerUser(fields);
}
function resetErrorStyles(fields) {
    fields.forEach((field) => {
        field.element.classList.remove("is-error");
    });
}
function showError(message, field) {
    const registerError = document.getElementById("registerError");
    registerError.textContent = message;
    registerError.style.display = "block";
    field.classList.add("is-error");
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
}
function isUsernameTaken(username, users) {
    return users.some((user) => user.username === username);
}
function getRegisterFormFields() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const registerUsername = document.getElementById("registerUsername");
    const registerPassword = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    return { firstName, lastName, email, registerUsername, registerPassword, confirmPassword };
}
/**
 * Registers a new user and updates the user interface.
 * 
 * @param {Array} fields - An array of input fields containing user information.
 * The expected order of fields is: firstName, lastName, email, username, and password.
 * 
 * @returns {Promise<void>} - A promise that resolves when the user registration and UI update are complete.
 */
async function registerUser(fields) {
    // Hash the password before storing it
    const hashedPassword = await hashPassword(fields[4].element.value.trim());

    const newUser = {
        id: generateUniqueId(),
        firstName: fields[0].element.value.trim(),
        lastName: fields[1].element.value.trim(),
        username: fields[3].element.value.trim(),
        password: hashedPassword, // Store the hashed password
    };

    // Retrieve existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Update the UI to transition from registration to login
    const registerSection = document.getElementById("registerSection");
    const loginSection = document.getElementById("loginSection");
    registerSection.style.display = "none";
    loginSection.style.display = "block"; // Go to login after registration
}
/**
 * Hashes a password using the SHA-256 algorithm.
 * 
 * @param {string} password - The password to be hashed.
 * 
 * @returns {Promise<string>} - A promise that resolves to the hashed password as a hexadecimal string.
 */
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
}
// Function to generate a unique ID
function generateUniqueId() {
    return "user_" + (Math.floor(Math.random() * 1650) + 256); // Simple unique ID
}
/**
 * Removes error classes and hides the registration error message.
 * 
 * This function is called when the user interacts with the registration form fields.
 * It ensures that any previous error styles are cleared and the error message is hidden.
 * 
 * @returns {void}
 */
function clearErrorStyles() {
    const { firstName, lastName, email, registerUsername, registerPassword, confirmPassword } = getRegisterFormFields();
    const fields = [
        firstName,
        lastName,
        email,
        registerUsername,
        registerPassword,
        confirmPassword,
    ];

    // Remove error class from all fields
    fields.forEach((field) => field.classList.remove("is-error"));

    // Hide error message
    const registerError = document.getElementById("registerError");
    registerError.style.display = "none";
}
// Function to create and append the login form dynamically
function createLoginSection() {
    var _a;
    const loginSection = document.createElement("div");
    loginSection.classList.add("nes-container", "is-rounded", "login-section");
    loginSection.id = "loginSection";
    loginSection.innerHTML = `
        <h2 class="nes-text">Login</h2>
        <label for="loginUsername" class="nes-text">Username:</label>
        <input type="text" id="loginUsername" class="nes-input" placeholder="Enter username" />
        <label for="loginPassword" class="nes-text">Password:</label>
        <input type="password" id="loginPassword" class="nes-input" placeholder="Enter password" />
        <div class="form-check">
			<input class="form-check-input" name="checkbox" type="checkbox" value="" id="loginPasswordView">
			<label class="form-check-label" for="loginPasswordView">
				Show Password
			</label>
		</div>
        <button id="loginButton" class="nes-btn is-primary">Login</button>
        <p id="loginError" class="nes-text is-error" style="display:none;">Incorrect username or password.</p>
    `;
    loginContainer.appendChild(loginSection);
    (_a = document.querySelector("#loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", validateLoginForm);
    loginSection.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            validateLoginForm();
        }
    });
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    // Attach the same event listener to both login input fields
    [loginUsername, loginPassword].forEach((field) => {
        field.addEventListener("input", clearLoginErrorStyles);
    });
    const checkbox = loginContainer.querySelector('#loginPasswordView');

    const passwordElement = document.querySelector("#loginPassword");
    checkbox.addEventListener('change', function () {
        if ($(this).is(':checked')) {
            passwordElement.type = "text";
        }
        else {
            passwordElement.type = "password";
        }
    });
}
// Validate login form
async function validateLoginForm() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();
    // Reset error styles for both fields
    const fields = [loginUsername, loginPassword];
    fields.forEach((field) => field.classList.remove("is-error"));
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
    // Check if either field is blank
    if (!username || !password) {
        loginError.textContent = "Please enter both username and password.";
        loginError.style.display = "block";
        // Add 'is-error' class to empty fields
        fields.forEach((field) => {
            if (!field.value.trim()) {
                field.classList.add("is-error");
            }
        });
        return;
    }
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Hash the entered password for comparison
    const hashedPassword = await hashPassword(password);
    // Find the user with matching username and hashed password
    const user = users.find((user) => user.username === username && user.password === hashedPassword);
    // Login logic
    if (user) {
        handleLoginSuccess(user); // On successful login
    }
    else {
        handleLoginError("Incorrect username or password."); // On login failure
    }
}
function getLoginFormFields() {
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    return { loginUsername, loginPassword };
}
// Helper function to handle login errors
function handleLoginError(message) {
    const loginError = document.getElementById("loginError");
    loginError.textContent = message;
    loginError.style.display = "block";
    const { loginUsername, loginPassword } = getLoginFormFields();
    [loginUsername, loginPassword].forEach((field) => field.classList.add("is-error"));
}
/**
 * Handles the successful login by setting the current session user's data in local storage,
 * hiding any previous login error, and loading the quiz.
 * 
 * @param {Object} user - The user object representing the logged-in user.
 * The object should have properties: id, firstName, lastName, and username.
 * 
 * @returns {void}
 */
function handleLoginSuccess(user) {
    // Set current session user
    sessionStorage.setItem("currentUserId", user.id);
    sessionStorage.setItem("firstName", user.firstName);
    sessionStorage.setItem("lastName", user.lastName);
    sessionStorage.setItem("username", user.username);

    const loginError = document.getElementById("loginError");
    loginError.style.display = "none"; // Hide any previous error

    // Load user data and proceed to the quiz
    loadQuiz(); // Proceed to quiz section
}
/**
 * Removes error classes and hides the login error message.
 * 
 * @returns {void}
 */
function clearLoginErrorStyles() {
    const { loginUsername, loginPassword } = getLoginFormFields();
    const fields = [loginUsername, loginPassword];

    // Remove error class from both fields
    fields.forEach((field) => field.classList.remove("is-error"));

    // Hide error message
    const loginError = document.getElementById("loginError");
    loginError.style.display = "none";
}
/**
 * Adds an event listener to the logout button, which clears the quiz progress,
 * removes all sections, creates the registration and login sections, clears the welcome message,
 * and clears all data from local storage when clicked.
 * 
 * @returns {void}
 */
function logoutEventListener() {
    var _a;
    (_a = document.querySelector("#logoutButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        localStorage.removeItem("quizProgress"); // Remove any quiz progress
        // Redirect to the login page
        removeAllSections();
        createRegisterSection();
        createLoginSection();
        const welcomeMessage = document.getElementById("welcomeMessage");
        if (welcomeMessage) {
            welcomeMessage.textContent = ""; // Clear welcome message
        }
        sessionStorage.clear();
    });
}

function createQuizSelection() {
    const quizSelectionSection = document.createElement("div");
    quizSelectionSection.classList.add("nes-container", "is-rounded", "quiz-selection-section");
    quizSelectionSection.id = "quizSelectionSection";
    quizSelectionSection.innerHTML = `
        <h2 class="nes-text">Select a Quiz</h2>
        <div id="quizOptions">
            <button id="artQuiz_Button" class="nes-btn humanities">Art Quiz</button>
            <button id="astrologyQuiz_Button" class="nes-btn humanities">Astrology Quiz</button>
            <button id="literatureQuiz_Button" class="nes-btn humanities">Literature Quiz</button>
            <button id="englishQuiz_Button" class="nes-btn humanities">English Quiz</button>
            <button id="historyQuiz_Button" class="nes-btn humanities">History Quiz</button>
            <button id="geographyQuiz_Button" class="nes-btn humanities">Geography Quiz</button>
            <button id="philosophyQuiz_Button" class="nes-btn humanities">Philosophy Quiz</button>
            <button id="socialStudiesQuiz_Button" class="nes-btn humanities">Social Studies Quiz</button>

            <button id="sportsQuiz_Button" class="nes-btn entertainment">Sports Quiz</button>
            <button id="animalQuiz_Button" class="nes-btn entertainment">Animals Quiz</button>
            <button id="musicQuiz_Button" class="nes-btn entertainment">Music Quiz</button>

            <button id="chemistryQuiz_Button" class="nes-btn sciences">Chemistry Quiz</button>
            <button id="psychologyQuiz_Button" class="nes-btn sciences">Psychology Quiz</button>
            <button id="physicsQuiz_Button" class="nes-btn sciences">Physics Quiz</button>
            <button id="biologyQuiz_Button" class="nes-btn sciences">Biology Quiz</button>
            <button id="healthCareQuiz_Button" class="nes-btn sciences">Health Care Quiz</button>

            <button id="mathQuiz_Button" class="nes-btn technology">Math Quiz</button>
            <button id="computerScienceQuiz_Button" class="nes-btn technology">Computer Science Quiz</button>
            <button id="engineeringQuiz_Button" class="nes-btn technology">Engineering Quiz</button>

            <button id="politicsQuiz_Button" class="nes-btn social-studies">Politics Quiz</button>
            <button id="economicsQuiz_Button" class="nes-btn social-studies">Economics Quiz</button>
            <button id="financeQuiz_Button" class="nes-btn social-studies">Finance Quiz</button>
            <button id="realEstateQuiz_Button" class="nes-btn social-studies">Real Estate Quiz</button>
        </div>
    `;
    displayContainer.appendChild(quizSelectionSection);
    const Quiz_Buttons = document.querySelectorAll(".quiz-selection-section button");
    Quiz_Buttons.forEach((button) => button.addEventListener("click", () => {
        sessionStorage.setItem("quizId", button.id);
        let quizData = button.id.split("_")[0].concat("Data");
        sessionStorage.setItem("quizData", quizData);

        const tempArray = sessionStorage.getItem("quizId").split("_")[0].split(/(?=[A-Z])/);
        if (tempArray) {
            tempArray[0] = tempArray[0].charAt(0).toUpperCase() + tempArray[0].slice(1);
            const quiz_type = tempArray.join(" ");

            sessionStorage.setItem("quizType", quiz_type);
        }

        // Load user progress in the quiz
        loadProgress();
    }));
}
// Function to create and append the quiz section dynamically
function createQuizSection() {
    const quizSection = document.createElement("div");
    quizSection.classList.add("nes-container", "is-rounded", "quiz-section");
    quizSection.id = "quizSection";
    quizSection.innerHTML = `
        <div class="question-container">
            <p id="question"></p>
        </div>
        <div id="answers"></div>
        <progress class="nes-progress is-pattern" value="50" max="100" id="quizProgressBar"></progress>
    `;
    displayContainer.appendChild(quizSection);
}
// Function to create and append the score section dynamically
function createScoreSection() {
    var _a;
    const scoreSection = document.createElement("div");
    scoreSection.classList.add("nes-container", "is-rounded", "view-last-score");
    scoreSection.id = "scoreSection";
    scoreSection.innerHTML = `
        <h2 class="nes-text">Quiz Completed!</h2>
        <p id="scoreMessage"></p>
        <button id="retryButton" class="nes-btn is-warning retry-button">Retry Quiz</button>
    `;
    displayContainer.appendChild(scoreSection);
    (_a = document.querySelector("#retryButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => returnToBeginning());
}
// Function to create the past scores section dynamically
function createPastScoresSection() {
    var _a;
    const pastScoresSection = document.createElement("div");
    pastScoresSection.classList.add("nes-container", "is-rounded", "view-score-history");
    pastScoresSection.id = "pastScoresSection";
    pastScoresSection.innerHTML = `
        <h2 class="nes-text">Past Scores</h2>
        <table id="pastScores" class="scores-table" style="width: 100%; border-collapse: collapse;"></table>
        <button id="backButton" class="nes-btn">Back to Quiz</button>
    `;
    displayContainer.appendChild(pastScoresSection);
    const currentUserId = sessionStorage.getItem("currentUserId");
    (_a = document.querySelector("#backButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("pastScoresSection");
        if (checkProgressAtEnd(currentUserId)) {
            showScore();
        }
        else {
            loadQuiz();
        }
    });
}
// Function to create and append the action buttons dynamically
function createActionButtons() {
    removeElementById("actionButtons");
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
    `;
    displayContainer.appendChild(actionButtons);
    logoutEventListener();
}
/**
 * Creates and appends buttons for viewing and resetting past scores.
 * 
 * @returns {void}
 */
function createScoresButtons() {
    var _a, _b;

    // Remove existing action buttons
    removeElementById("actionButtons");

    // Create new action buttons section
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="viewScoresButton" class="nes-btn is-success">View Past Scores</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
    `;

    // Append the action buttons section to the display container
    displayContainer.appendChild(actionButtons);

    // Add event listeners for the logout button, view scores button, and reset scores button
    logoutEventListener();

    // Add event listener for the "View Past Scores" button
    (_a = document.querySelector("#viewScoresButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        removeElementById("quizSelectionSection");
        createSortButtons();
    });

    // Add event listener for the "Reset All Scores" button
    (_b = document.querySelector("#resetScoresButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}
/**
 * Creates and appends buttons for sorting past scores.
 * 
 * @returns {void}
 */
function createSortButtons() {
    var _a, _b, _c;

    // Remove existing action buttons
    removeElementById("actionButtons");

    // Create new action buttons section
    const actionButtons = document.createElement("section");
    actionButtons.id = "actionButtons";
    actionButtons.className = "buttonGroup";
    actionButtons.innerHTML = `
        <button id="logoutButton" class="nes-btn is-warning">Logout</button>
        <button id="resetScoresButton" class="nes-btn is-error">Reset All Scores</button>
        <button id="sortByQuizButton" class="nes-btn is-primary">Sort by Quiz</button>
        <button id="sortByDateButton" class="nes-btn is-primary">Sort by Date</button>
        <button id="sortByScoreButton" class="nes-btn is-primary">Sort by Score</button>
    `;

    // Append the action buttons section to the display container
    displayContainer.appendChild(actionButtons);

    // Add event listeners for the logout button, reset scores button, and sort buttons
    logoutEventListener();

    // Get the current user ID
    const currentUserId = sessionStorage.getItem("currentUserId");;

    // Construct the key for the user's scores in local storage
    const userScoresKey = `quizScores_${currentUserId}`;

    // Retrieve the user's past scores from local storage
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");

    // Render the past scores in a table format
    renderScores(pastScores);

    // Add event listener for the "Sort by Quiz" button
    (_a = document.querySelector("#sortByQuizButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // Sort past scores by quiz name (alphabetically)
        const sortedByQuiz = [...pastScores].sort((a, b) => a.quiz.localeCompare(b.quiz));

        // Render the sorted scores
        renderScores(sortedByQuiz);
    });

    // Add event listener for the "Sort by Date" button
    (_a = document.querySelector("#sortByDateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // Sort past scores by date (newest to oldest)
        const sortedByDate = [...pastScores].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Render the sorted scores
        renderScores(sortedByDate);
    });

    // Add event listener for the "Sort by Score" button
    (_b = document.querySelector("#sortByScoreButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        // Sort past scores by score (highest to lowest)
        const sortedByPercentage = [...pastScores].sort((a, b) => {
            const percentageA = (a.score / a.total) * 100;
            const percentageB = (b.score / b.total) * 100;
            return percentageB - percentageA; // Sort by percentage (highest first)
        });

        // Render the sorted scores
        renderScores(sortedByPercentage);
    });

    // Add event listener for the "Reset All Scores" button
    (_c = document.querySelector("#resetScoresButton")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        // Show the confirmation dialog
        createDialog();
    });
}

/**
 * Renders the past scores in a table format.
 * 
 * @param {Array} pastScores - An array of objects representing past scores.
 * Each object should have properties: score, total, and date.
 * 
 * @returns {void}
 */
function renderScores(pastScores) {
    // Remove existing sections
    removeElementById("quizSection");
    removeElementById("scoreSection");
    removeElementById("pastScoresSection");
    // Create the past scores section dynamically
    createPastScoresSection();
    // Create table headers and rows for the scores
    const tableHeaders = `
        <tr>
            <th>Quiz</th>
            <th>Score</th>
            <th>Percentage</th>
            <th class="scoreDate">Date</th>
        </tr>`;
    const tableRows = pastScores
        .map(({ score, total, quiz, date }) => {
            const percentage = ((score / total) * 100).toFixed(2); // Calculate percentage
            const formattedDate = formatDate(date);
            return `
                <tr>
                    <td>${quiz}</td>
                    <td>${score} / ${total}</td>
                    <td class="scorePercentage">${percentage}%</td>
                    <td class="scoreDate">${formattedDate}</td>
                </tr>`;
        })
        .join("");
    // Insert the table into the #pastScores element
    const pastScoresElement = document.querySelector("#pastScores");
    pastScoresElement.innerHTML = `
        ${tableHeaders}
        ${tableRows}
    `;
}
/**
 * Formats a date string to the mm/dd/yy format.
 * 
 * @param {string} dateString - The date string to be formatted.
 * The string should be in a valid date format.
 * 
 * @returns {string} - The formatted date string in mm/dd/yy format.
 */
function formatDate(dateString) {
    const date = new Date(dateString); // Convert the string to a Date object
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // getMonth() returns 0-11, so add 1
    const day = date.getDate().toString().padStart(2, "0"); // Add leading 0 if necessary
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year (yy)
    return `${month}/${day}/${year}`; // Return in mm/dd/yy format
}

/**
 * Creates a dialog for confirming the reset of past scores.
 * 
 * @returns {void}
 */
function createDialog() {
    var _a, _b;
    const dialog = document.createElement("dialog");
    dialog.classList.add("nes-dialog", "nes-container", "is-rounded", "is-dark");
    dialog.id = "dialog-dark-rounded";
    dialog.innerHTML = `
        <form method="dialog">
            <p class="title">Confirmation</p>
            <p>Are you sure you want to reset all past scores?</p>
            <menu class="dialog-menu">
                <button class="nes-btn" id="cancel-btn" type="button">Cancel</button>
                <button class="nes-btn is-primary" id="resetConfirm" type="button">Confirm</button>
            </menu>
        </form>
    `;
    displayContainer.appendChild(dialog);
    // Register the dialog with the polyfill if necessary
    if (typeof dialog.showModal !== 'function') {
        dialogPolyfill.registerDialog(dialog);
    }
    // Show the dialog
    dialog.showModal();
    // Add event listener for the Confirm button
    (_a = document.getElementById("resetConfirm")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const currentUserId = sessionStorage.getItem("currentUserId");;
        localStorage.removeItem(`quizScores_${currentUserId}`); // Clear the quiz scores
        sessionStorage.removeItem("quizData");
        sessionStorage.removeItem("quizId");
        removeAllSections();
        dialog.close(); // Close the dialog
        returnToBeginning();
    });
    // Add event listener for the Cancel button
    (_b = document.querySelector('#cancel-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        removeElementById('dialog-dark-rounded'); // Close the dialog
    });
}
/**
 * Resets the quiz variables and returns the user to the beginning of the quiz.
 * 
 * @returns {void}
 */
function returnToBeginning() {
    // Reset quiz variables
    currentQuestion = 0;
    score = 0;
    const currentUserId = sessionStorage.getItem("currentUserId");;
    const userProgressKey = `quizProgress_${currentUserId}`;
    localStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score }));
    localStorage.setItem("quizProgress", String(0));
    // Update the UI
    removeElementById("scoreSection");
    createActionButtons();
    // Display the first question
    loadQuiz();
}
/**
 * Loads the quiz and initializes the user interface based on the user's login status.
 * 
 * @returns {boolean} - Returns true if the quiz is successfully loaded, false otherwise.
 */
function loadQuiz() {
    const currentUserId = sessionStorage.getItem("currentUserId");;
    if (!currentUserId) {
        // If no user is logged in, show the login section
        createRegisterSection();
        createLoginSection();
        return true;
    }
    // Retrieve users and find the current user
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((user) => user.id === currentUserId);
    if (!foundUser) {
        createRegisterSection();
        createLoginSection();
        console.error("User not found!");
        return false;
    }
    const { firstName } = foundUser;
    // Check if the user has logged in before
    const hasLoggedInBefore = localStorage.getItem("hasLoggedInBefore");
    // Display a welcome message based on the user's login history
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        if (hasLoggedInBefore) {
            welcomeMessage.textContent = `Welcome back, ${firstName}!`;
        }
        else {
            welcomeMessage.textContent = `Welcome, ${firstName}!`;
            localStorage.setItem("hasLoggedInBefore", "true"); // Mark user as logged in for future
        }
    }
    removeElementById("registerSection");
    removeElementById("loginSection");

    const userScoresKey = `quizScores_${currentUserId}`;

    if (localStorage.getItem(userScoresKey)) {
        createScoresButtons();
    }
    else {
        createActionButtons();
    }

    createQuizSelection();
    return true;
}
/**
 * Loads the quiz progress from local storage and updates the current question and score.
 * If no progress is found, initializes the current question and score to 0.
 * 
 * @returns {void}
 */
function loadProgress() {
    if (!document.querySelector("#quizSection")) {
        createQuizSection();
    }

    // Get the current user ID from local storage
    const currentUserId = sessionStorage.getItem("currentUserId");;

    // Construct the key for the user's progress in local storage
    const userProgressKey = `quizProgress_${currentUserId}`;

    // Retrieve the progress data from local storage
    const progressData = localStorage.getItem(userProgressKey);

    // If progress data is found, update the current question and score
    if (progressData) {
        const { currentQuestion: savedQuestion, score: savedScore } = JSON.parse(progressData);
        currentQuestion = savedQuestion;
        score = savedScore;
    }
    // If no progress data is found, initialize the current question and score to 0
    else {
        currentQuestion = 0; // Start from the beginning if no progress is saved
        score = 0;
    }

    // Display the first question in the quiz
    displayQuestion();
}
/**
 * Displays the current question in the quiz.
 * 
 * @returns {void}
 */
function displayQuestion() {
    removeElementById("quizSelectionSection");
    // Get the selected quiz data from local storage and retrieve the current question data from variable
    const selection = sessionStorage.getItem("quizData");
    const currentQuiz = quizData[selection];
    const currentQuizData = currentQuiz[currentQuestion];
    totalQuestions = currentQuiz.length;

    // Display the action buttons and show the logout button
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    // Set the question text
    questionEl.textContent = currentQuizData.question;
    // Efficient shuffling using Fisher-Yates
    const shuffledAnswers = shuffle(currentQuizData.answers);

    // If there are more buttons than answers, remove the excess ones
    while (answersEl.children.length > shuffledAnswers.length) {
        answersEl.removeChild(answersEl.lastChild);
    }
    // Add or update buttons
    shuffledAnswers.forEach((answer, index) => {
        let button;
        if (answersEl.children[index]) {
            // Reuse existing button
            button = answersEl.children[index];
        }
        else {
            // Create new button if necessary
            button = document.createElement("button");
            button.classList.add("nes-btn");
            answersEl.appendChild(button);
        }
        // Update the button text
        button.textContent = answer.text;
        // Remove any previous event listeners and add a new one
        const newButton = button.cloneNode(true); // Clean up old event listeners
        button.replaceWith(newButton); // Replace old button with new one
        newButton.addEventListener("click", () => checkAnswer(shuffledAnswers, index));
    });
    // Update the progress bar
    updateProgressBar();
}
/**

 * Updates the progress bar with the current quiz progress.
 * 
 * @returns {void}
 */
function updateProgressBar() {
    const progressBar = document.getElementById("quizProgressBar");
    const progressValue = ((currentQuestion + 1) / totalQuestions) * 100; // Calculate percentage
    progressBar.value = progressValue; // Update the value of the progress bar

    // Save current progress in session storage
    const currentUserId = sessionStorage.getItem("currentUserId");;
    const userProgressKey = `quizProgress_${currentUserId}`;
    localStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score })); // Store progress
}
/**
 * Checks the selected answer and updates the score and current question index.
 * Stores progress only at the end of the quiz.
 * 
 * @param {Object} selected - The selected answer object.
 * It should have a property 'correct' indicating whether the answer is correct.
 * 
 * @returns {void}
 */
function checkAnswer(shuffledAnswers, selected) {
    // Increment score if the selected answer is correct
    if (true === shuffledAnswers[selected].correct) {
        score++;
    }
    // Update the current question index
    currentQuestion++;
    // Store progress only at the end of the quiz
    if (currentQuestion < totalQuestions) {
        displayQuestion(); // Show the next question
    }
    else {
        showScore(); // Display final score
        if (currentQuestion == totalQuestions) {
            currentQuestion = 0;
            score = 0;
        }
        localStorage.setItem("quizProgress", String(currentQuestion));
    }
}
/**
 * Shuffles an array using the Fisher-Yates algorithm and a random sort shuffle.
 * 
 * @param {Array} array - The array to be shuffled.
 * 
 * @returns {Array} - The shuffled array.
 */
const shuffle = (array) => {
    // Step 1: Fisher-Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Step 2: Random sort shuffle
    return array
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};
/**

 * Displays the final score of the quiz and updates the user's past scores.
 * 
 * @returns {void}
 */
function showScore() {
    removeAllSections();
    // Display the score section
    createScoresButtons();
    createScoreSection();
    // Get the current user ID
    const currentUserId = sessionStorage.getItem("currentUserId");;
    if (!currentUserId) {
        console.error("No current user ID found.");
        return;
    }
    // Retrieve and update past scores for the current user
    const userScoresKey = `quizScores_${currentUserId}`;
    const pastScores = JSON.parse(localStorage.getItem(userScoresKey) || "[]");

    const selection = sessionStorage.getItem("quizData");
    const currentQuiz = quizData[selection];

    if (checkProgressAtEnd(currentUserId)) {
        // Add the new score with the current timestamp
        const timestamp = new Date().toLocaleString();
        pastScores.push({ score: score, total: currentQuiz.length, quiz: sessionStorage.getItem("quizType"), date: timestamp });
        // Update localStorage with the new scores
        localStorage.setItem(userScoresKey, JSON.stringify(pastScores));
        // Sort the past scores by date (most recent first)
        pastScores.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        // Get the most recent score (which will be the first after sorting)
        const mostRecentScore = pastScores[0];
        // Update the score message with the most recent score
        const scoreMessageEl = document.getElementById("scoreMessage");
        if (scoreMessageEl) {
            scoreMessageEl.textContent = `Most Recent Score: ${mostRecentScore.score} out of ${mostRecentScore.total} on ${mostRecentScore.date}`;
        }
    }
    const quizProgress = localStorage.getItem(`quizProgress_${currentUserId}`);
    if (quizProgress) {
        currentQuestion = 0;
        score = 0;
        const userProgressKey = `quizProgress_${currentUserId}`;
        localStorage.setItem(userProgressKey, JSON.stringify({ currentQuestion, score }));
    }
}
/**
 * Checks if the user has reached the end of the quiz based on their progress.
 * 
 * @param {string} currentUserId - The ID of the current user.
 * 
 * @returns {boolean} - Returns true if the user has reached the end of the quiz, false otherwise.
 * The function retrieves the current quiz progress from local storage and checks if the user's current question index
 * is equal to the total number of questions minus one.
 */
function checkProgressAtEnd(currentUserId) {
    // Retrieve current quiz progress
    const quizProgress = localStorage.getItem(`quizProgress_${currentUserId}`);
    if (quizProgress && JSON.parse(quizProgress).currentQuestion == totalQuestions - 1) {
        JSON.parse(quizProgress).currentQuestion = 0;
        return true;
    }
    return false;
}
// Initial load
window.addEventListener("load", () => {
    loadQuiz();
});
//# sourceMappingURL=index.js.map