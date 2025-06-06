const always = [
    'What is your favourite rule from our server rules?',
];

const questionsObjects = [
    {
        select: 'System',
        id: 'isSystem',
        questions: [
            'What is your opinion on endogenic vs. traumagenic systems?',
            'What is the difference between OSDD and DID?',
            'What made you realise you are a system?',
        ],
    },
    {
        select: 'Questioning',
        id: 'isQuestioning',
        questions: [
            'What are some disrespectful things to say to a system?',
            'What does Plurality mean to you?',
            'What made you begin to suspect you may be a system?',
        ],
    },
    {
        select: 'Singlet [Non - System]',
        id: 'isSinglet',
        questions: [
            'Why are you interested in joining a system - focused server?',
            'What is your experience with the OSDD / DID community?',
            'What does the acronym DID stand for? Please also define it in your own words.',
        ],
    },
];

const postscripts = [
    'Please answer these questions by sending a message in this thread',
];

/**
 * Builds questions for verification prompt, altering the question list based on the id passed
 * @param {string} id Id of option, should match an option from prompt select select menu
 * @returns {string[]} An array of formatted questions
 */
function formatQuestions(id) {
    let questions = always;

    const questionsForId = (
        questionsObjects.find((questionObject) => questionObject.id === id).questions
    );
    if (questionsForId) {
        questions = questions.concat(questionsForId);
    }

    return questions
        .map((questionText, index) => `${index + 1}. ${questionText}`)
        .concat(postscripts.map((postscript) => `> ${postscript}`));
}

/**
 * Builds options for the pre-verification question select select menu
 * @returns {APISelectMenuOption[]} Options for a select menu
 */
function buildOptions() {
    return questionsObjects.map((questionObj) => ({
        label: questionObj.select,
        description: `Do you identify as ${questionObj.select}`,
        value: questionObj.id,
    }));
}

export {
    formatQuestions,
    buildOptions,
};
