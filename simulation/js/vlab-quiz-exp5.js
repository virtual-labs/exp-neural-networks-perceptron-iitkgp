var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
	"questions": [
        {// Question 4
            "q": "Which of the following is not the promise of artificial neural network?",
            "a": [
                {"option": "It can explain result", "correct": true},
                {"option": "It can survive the failure of some nodes", "correct": false},
                {"option": "It has inherent parallelism", "correct": false},
                {"option": "It can handle noise", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4
            "q": "A perceptron adds up all the weighted inputs it receives, and if it exceeds a certain value, it outputs a 1, otherwise it just outputs a 0.",
            "a": [
                {"option": "True", "correct": true},
                {"option": "False", "correct": false},
                {"option": "Sometimes &#45 it can also output intermediate values as well", "correct": false},
                {"option": "Can&#39t say", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "Which of the following is an application of NN (Neural Network)? ",
            "a": [
                {"option": "Sales forecasting ", "correct": false},
                {"option": " Data validation ", "correct": false},
                {"option": "Risk management", "correct": false},
                {"option": "All of the mentioned ", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which is true for neural networks?",
            "a": [
                {"option": "It has set of nodes and connections", "correct": false},
                {"option": "Each node computes it&#39s weighted input", "correct": false},
                {"option": "Node could be in excited state or non &#45 excited state", "correct": false},
                {"option": " All of the mentioned ", "correct":true } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Neural Networks are complex ______________ with many parameters.",
            "a": [
                {"option": "Linear Functions", "correct": true},
                {"option": "Nonlinear Functions", "correct": false},
                {"option": "Discrete Functions", "correct":false},
                {"option": "Exponential Functions", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};// JavaScript Document