const loopOrder = [
    { name: "The Blank Slate", file: "blank_slate.html", unlockScore: 0 },
    { name: "The Social Mirror", file: "social_mirror.html", unlockScore: 50 },
    { name: "The Rebel's Paradox", file: "rebels_paradox.html", unlockScore: 100 },
    { name: "The Choice Architect", file: "choice_architect.html", unlockScore: 150 },
    { name: "The Pattern Keeper", file: "pattern_keeper.html", unlockScore: 200 },
    { name: "The Wisdom Paradox", file: "wisdom_paradox.html", unlockScore: 250 }
];

let currentPerspective = null;
let currentContentIndex = 0;
let progressIndicator;
let natureScore = 0;
let nurtureScore = 0;
let totalScore = 0;
let contentPool = [];
let usedContent = [];
let maxContentItems = 8;

let contentDisplay;
let engineCommentary;
let nextButton;
let scoreDisplay;
let unlockStatus;

document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
});

function initializeGame() {
    contentDisplay = document.getElementById('content-display');
    engineCommentary = document.getElementById('engine-commentary');
    nextButton = document.getElementById('next-button');
    scoreDisplay = document.getElementById('current-score');
    unlockStatus = document.getElementById('unlock-status');
    progressIndicator = document.getElementById('progress-indicator');
    
    try {
        contentPool = getLoopContent();
        console.log(`Loaded ${contentPool.length} content items`);
    } catch (error) {
        console.error('Error loading content pool:', error);
        contentDisplay.innerHTML = '<p style="color: red;">Error loading content. Please refresh the page.</p>';
        return;
    }
    
    setupPerspectiveSelection();
    nextButton.addEventListener('click', loadNextContent);
    nextButton.disabled = true;
    updateScoreDisplay();
}

function setupPerspectiveSelection() {
    const chooseLeft = document.getElementById('choose-left');
    const chooseRight = document.getElementById('choose-right');
    
    chooseLeft.addEventListener('click', () => selectPerspective('nature'));
    chooseRight.addEventListener('click', () => selectPerspective('nurture'));
}

function selectPerspective(perspective) {
    currentPerspective = perspective;
    document.getElementById('preference-selection').style.display = 'none';
    nextButton.disabled = false;
    
    let perspectiveMessage = getPerspectiveMessage(perspective);
    
    contentDisplay.innerHTML = `
        <div class="perspective-intro">
            <p><strong>${perspectiveMessage}</strong></p>
            <p>Click "Explore the Next Angle" to begin your developmental journey.</p>
        </div>
    `;
    
    engineCommentary.innerHTML = '<p><em>The Engine begins analyzing how this very choice reflects your own developmental history...</em></p>';
}

function getPerspectiveMessage(perspective) {
    const title = document.title.toLowerCase();
    
    if (title.includes('blank slate')) {
        return perspective === 'nature' 
            ? "You've chosen the Genetic Blueprint perspective. You believe babies arrive with inborn temperaments, cognitive styles, and personality tendencies that shape their entire developmental trajectory."
            : "You've chosen the Environmental Shaping perspective. You see infants as highly malleable, with experiences and caregiving quality fundamentally sculpting brain development and personality formation.";
    } else if (title.includes('social mirror')) {
        return perspective === 'nature'
            ? "You've chosen the Innate Foundation perspective. You believe children's core personality and abilities emerge from genetic programming, with culture simply providing the context for expression."
            : "You've chosen the Cultural Transmission perspective. You see childhood as when society actively shapes identity, values, and cognitive patterns through systematic cultural programming.";
    } else if (title.includes('rebel')) {
        return perspective === 'nature'
            ? "You've chosen the Genetic Individualism perspective. You believe teenage rebellion reflects inborn drives for independence and identity that emerge regardless of social context."
            : "You've chosen the Social Construction perspective. You see adolescent identity formation as largely shaped by cultural expectations, peer influence, and available social scripts for 'becoming an adult.'";
    } else if (title.includes('choice architect')) {
        return perspective === 'nature'
            ? "You've chosen the Genetic Destiny perspective. You believe young adult choices primarily express inborn personality traits, interests, and cognitive patterns that were always there waiting to emerge."
            : "You've chosen the Environmental Culmination perspective. You see early adulthood as when all previous environmental influences converge to shape major life decisions and directions.";
    } else if (title.includes('pattern keeper')) {
        return perspective === 'nature'
            ? "You've chosen the Genetic Stability perspective. You believe midlife personality patterns reflect stable genetic programming that becomes increasingly evident with age."
            : "You've chosen the Lifelong Plasticity perspective. You see midlife as demonstrating the brain's continued capacity for change through new experiences, relationships, and conscious effort.";
    } else if (title.includes('wisdom paradox')) {
        return perspective === 'nature'
            ? "You've chosen the Genetic Wisdom perspective. You believe elder insights reflect the flowering of inborn cognitive and emotional capacities that mature over time."
            : "You've chosen the Experiential Wisdom perspective. You see elder wisdom as the accumulated result of a lifetime of environmental learning, cultural transmission, and reflective processing.";
    }
    
    return perspective === 'nature'
        ? "You've chosen the Nature perspective. You believe genetic inheritance provides the primary blueprint for development, with environment simply allowing genetic potential to unfold."
        : "You've chosen the Nurture perspective. You see environmental experiences as the primary sculptor of development, with genetics providing only basic raw material.";
}

function loadNextContent() {
    if (!currentPerspective) {
        alert('Please select a perspective first.');
        return;
    }
    
    if (usedContent.length >= maxContentItems) {
        showLoopCompletion();
        return;
    }
    
    const nextContent = getNextContentItem();
    
    if (!nextContent) {
        showLoopCompletion();
        return;
    }
    
    displayContent(nextContent);
    usedContent.push(nextContent);
    currentContentIndex++;
    updateProgressDisplay();
}

function getNextContentItem() {
    let availableContent = contentPool.filter(item => 
        !usedContent.includes(item)
    );
    
    if (availableContent.length === 0) {
        return null;
    }
    
    let preferredContent = availableContent.filter(item => 
        item.stance === currentPerspective || item.stance === 'neutral'
    );
    
    if (preferredContent.length === 0) {
        preferredContent = availableContent;
    }
    
    return preferredContent[Math.floor(Math.random() * preferredContent.length)];
}

function displayContent(content) {
    let html = '';
    
    switch (content.type) {
        case 'tf_question':
            html = createTrueFalseQuestion(content);
            break;
        case 'mc_question':
            html = createMultipleChoiceQuestion(content);
            break;
        case 'video':
            html = createVideoContent(content);
            break;
        case 'factoid':
            html = createFactoidContent(content);
            break;
        default:
            html = '<p>Unknown content type</p>';
    }
    
    contentDisplay.innerHTML = html;
    engineCommentary.innerHTML = `<p><em>${content.engine_commentary}</em></p>`;
    
    if (content.type.includes('question')) {
        nextButton.disabled = true;
    } else {
        updateScoreForNonQuestion(content.value, content.stance);
        nextButton.disabled = false;
    }
}

function createTrueFalseQuestion(content) {
    return `
        <div class="question-content">
            <h3>Consider This:</h3>
            <p class="question-text">${content.question}</p>
            <div class="answer-buttons">
                <button class="answer-btn" onclick="answerTrueFalse(true, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">TRUE</button>
                <button class="answer-btn" onclick="answerTrueFalse(false, ${content.correct_answer}, ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">FALSE</button>
            </div>
            <div id="feedback-area"></div>
        </div>
    `;
}

function createMultipleChoiceQuestion(content) {
    let optionsHtml = '';
    for (let key in content.options) {
        optionsHtml += `<button class="answer-btn" onclick="answerMultipleChoice('${key}', '${content.correct_answer_key}', ${content.value}, '${content.stance}', \`${content.correct_feedback.replace(/`/g, '\\`')}\`, \`${content.incorrect_feedback.replace(/`/g, '\\`')}\`)">${key}: ${content.options[key]}</button>`;
    }
    
    return `
        <div class="question-content">
            <h3>Consider This Question:</h3>
            <p class="question-text">${content.question}</p>
            <div class="answer-buttons">
                ${optionsHtml}
            </div>
            <div id="feedback-area"></div>
        </div>
    `;
}

function createVideoContent(content) {
    return `
        <div class="video-content">
            <h3>${content.title}</h3>
            <div class="video-wrapper">
                <iframe src="${content.url}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="content-value">Insight Value: +${content.value} points</p>
        </div>
    `;
}

function createFactoidContent(content) {
    return `
        <div class="factoid-content">
            <h3>Developmental Insight:</h3>
            <p class="factoid-text">${content.text}</p>
            <p class="content-value">Insight Value: +${content.value} points</p>
        </div>
    `;
}

function answerTrueFalse(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function answerMultipleChoice(userAnswer, correctAnswer, value, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = userAnswer === correctAnswer;
    showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance);
}

function showFeedback(isCorrect, correctFeedback, incorrectFeedback, value, stance) {
    const feedbackArea = document.getElementById('feedback-area');
    
    const earnedPoints = isCorrect ? value : Math.floor(value / 2);
    totalScore += earnedPoints;
    
    if (stance === 'nature') {
        natureScore += earnedPoints;
    } else if (stance === 'nurture') {
        nurtureScore += earnedPoints;
    }
    
    const feedbackClass = isCorrect ? 'correct-feedback' : 'incorrect-feedback';
    const feedbackText = isCorrect ? correctFeedback : incorrectFeedback;
    
    feedbackArea.innerHTML = `
        <div class="${feedbackClass}">
            <p><strong>${isCorrect ? 'Developmental Insight!' : 'Consider this:'}</strong></p>
            <p>${feedbackText}</p>
            <p class="points-earned">+${earnedPoints} Development Points</p>
        </div>
    `;
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => btn.disabled = true);
    
    nextButton.disabled = false;
    updateScoreDisplay();
}

function updateScoreForNonQuestion(value, stance) {
    totalScore += value;
    
    if (stance === 'nature') {
        natureScore += value;
    } else if (stance === 'nurture') {
        nurtureScore += value;
    }
    
    updateScoreDisplay();
}

function updateProgressDisplay() {
    if (progressIndicator) {
        const percentage = Math.round((currentContentIndex / maxContentItems) * 100);
        const currentLoopName = getCurrentLoopName();
        progressIndicator.textContent = `${currentLoopName}: ${currentContentIndex}/${maxContentItems} (${percentage}%)`;
    }
}

function updateScoreDisplay() {
    if (scoreDisplay) {
        scoreDisplay.textContent = `Development Score: ${totalScore}`;
    }
}

function getCurrentLoopName() {
    const title = document.title.toLowerCase();
    
    if (title.includes('blank slate')) return 'Loop 4.1';
    if (title.includes('social mirror')) return 'Loop 4.2';
    if (title.includes('rebel')) return 'Loop 4.3';
    if (title.includes('choice architect')) return 'Loop 4.4';
    if (title.includes('pattern keeper')) return 'Loop 4.5';
    if (title.includes('wisdom paradox')) return 'Loop 4.6';
    
    return 'Development Loop';
}

function getNextLoop() {
    const currentTitle = document.title.toLowerCase();
    
    if (currentTitle.includes('blank slate')) {
        return { name: "The Social Mirror", file: "social_mirror.html" };
    } else if (currentTitle.includes('social mirror')) {
        return { name: "The Rebel's Paradox", file: "rebels_paradox.html" };
    } else if (currentTitle.includes('rebel')) {
        return { name: "The Choice Architect", file: "choice_architect.html" };
    } else if (currentTitle.includes('choice architect')) {
        return { name: "The Pattern Keeper", file: "pattern_keeper.html" };
    } else if (currentTitle.includes('pattern keeper')) {
        return { name: "The Wisdom Paradox", file: "wisdom_paradox.html" };
    }
    
    return null; // Last loop
}

function getPersonalizedMessage() {
    const ratio = natureScore / (nurtureScore + 1); // Avoid division by zero
    
    if (ratio > 1.5) {
        return "Your responses suggest a strong belief in genetic/biological influences on development. You see inherent traits as powerful forces shaping life trajectories.";
    } else if (ratio < 0.67) {
        return "Your responses suggest a strong belief in environmental influences on development. You see experiences and contexts as primary shapers of who we become.";
    } else {
        return "Your responses suggest a balanced perspective, recognizing both genetic and environmental influences as important collaborative forces in development.";
    }
}

function showLoopCompletion() {
    const currentLoopName = getCurrentLoopName() + ': ' + getCurrentLoopTitle();
    const nextLoop = getNextLoop();
    
    contentDisplay.innerHTML = `
    <style>
    /* FRONTIER Hub Navigation Styles for Nature vs Nurture */
    .completion-actions {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 30px 0;
        align-items: center;
    }
    
    .begin-again-btn {
        background: linear-gradient(45deg, #2E8B57, #FF6B9D);
        color: #ffffff;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        font-size: 1.1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .begin-again-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(46, 139, 87, 0.4);
    }
    
    .explore-all-loops {
        display: inline-block;
        background: linear-gradient(45deg, #d4af37, #ffd700);
        color: #1a1a2e;
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
    }
    
    .explore-all-loops:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        text-decoration: none;
        color: #1a1a2e;
    }
    
    .frontier-motto {
        margin-top: 30px;
        padding: 20px;
        background: rgba(212, 175, 55, 0.1);
        border-radius: 15px;
        border: 2px solid rgba(212, 175, 55, 0.3);
    }
    
    .frontier-motto p {
        color: #d4af37;
        font-style: italic;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }
    </style>
    
    <div class="completion-content">
        <h3>🌱 Loop Complete: ${currentLoopName}</h3>
        <p><strong>Your Final Score: ${totalScore} points</strong></p>
        
        <div class="belief-analysis">
            <h4>Your Developmental Leanings:</h4>
            <ul>
                <li>Nature Conviction: ${natureScore} points</li>
                <li>Nurture Conviction: ${nurtureScore} points</li>
            </ul>
        </div>
            
      <div class="journey-complete">
    <h4>🧠 Developmental Exploration Complete!</h4>
    <p>You have explored this stage of the nature vs nurture debate.</p>
    <p>The Engine appreciates your thoughtful engagement with these developmental questions.</p>
</div>

<div class="navigation-buttons" style="margin-top: 30px; text-align: center;">
    <button onclick="window.location.href='index.html'" class="nav-button" style="margin: 10px; padding: 12px 24px; background: rgba(255,255,255,0.2); color: #2C3E50; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; cursor: pointer;">← Return to Engine</button>
    ${nextLoop ? `<button onclick="window.location.href='${nextLoop.file}'" class="nav-button" style="margin: 10px; padding: 12px 24px; background: linear-gradient(45deg, #FF6B9D, #4ECDC4); color: white; border: none; border-radius: 8px; cursor: pointer;">Next Loop: ${nextLoop.name} →</button>` : `
    <div class="completion-actions">
        <button onclick="window.location.href='index.html'" class="begin-again-btn">🔄 Explore Development Again</button>
        <a href="https://unity-loops.com/hub" class="explore-all-loops">
            🏛️ Explore All 6 Consciousness Loops
        </a>
    </div>
    
    <div class="frontier-motto">
        <p>"It's Loops All the Way Down"</p>
    </div>
    `}
</div>
    `;
    
    engineCommentary.innerHTML = `
        <p><em>The Engine has analyzed your developmental journey through this stage. ${getPersonalizedMessage()}</em></p>
    `;
    
    nextButton.style.display = 'none';
}

function getCurrentLoopTitle() {
    const title = document.title.toLowerCase();
    
    if (title.includes('blank slate')) return 'The Blank Slate';
    if (title.includes('social mirror')) return 'The Social Mirror';
    if (title.includes('rebel')) return 'The Rebel\'s Paradox';
    if (title.includes('choice architect')) return 'The Choice Architect';
    if (title.includes('pattern keeper')) return 'The Pattern Keeper';
    if (title.includes('wisdom paradox')) return 'The Wisdom Paradox';
    
    return 'Development Stage';
}
