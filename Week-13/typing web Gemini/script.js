document.addEventListener('DOMContentLoaded', () => {
    // Word list remains the same
    const wordsList = [
        "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not",
        "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they",
        "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there",
        "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
        "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "person",
        "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then",
        "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use",
        "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because",
        "any", "these", "give", "day", "most", "us", "code", "project", "keyboard", "developer"
    ];

    // DOM Elements
    const wordsContainer = document.getElementById('words-container');
    const wpmDisplay = document.getElementById('wpm');
    const accuracyDisplay = document.getElementById('accuracy');
    const timerDisplay = document.getElementById('timer');
    const restartBtn = document.getElementById('restart-btn');
    const caret = document.getElementById('caret');
    const timeDisplay = document.getElementById('current-time');
    const resultsScreen = document.getElementById('results-screen');
    const resultsWpm = document.getElementById('results-wpm');
    const resultsAccuracy = document.getElementById('results-accuracy');
    const timeOptions = document.querySelector('.time-options');

    // Game state
    let wordSpans;
    let timer;
    let testDuration = 60; 
    let timeLeft = testDuration;
    let testActive = false;
    let currentIndex = 0;
    let correctChars = 0;
    let incorrectChars = 0;

    // --- Functions ---

    function startNewTest() {
        resultsScreen.style.display = 'none';
        wordsContainer.classList.remove('blurred');
        wordsContainer.innerHTML = ''; 
        clearInterval(timer);
        
        testActive = false;
        timeLeft = testDuration;
        currentIndex = 0;
        correctChars = 0;
        incorrectChars = 0;

        timerDisplay.textContent = `${timeLeft}s`;
        wpmDisplay.textContent = '0';
        accuracyDisplay.textContent = '100%';
        
        // Generate a fixed paragraph for this mode
        const wordsToDisplay = generateRandomWords(25); // A fixed paragraph of 25 words
        wordsToDisplay.forEach((word, wordIndex) => {
            word.split('').forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                wordsContainer.appendChild(charSpan);
            });
            // Add a space after each word except the last one
            if (wordIndex < wordsToDisplay.length - 1) {
                const spaceSpan = document.createElement('span');
                spaceSpan.textContent = ' ';
                wordsContainer.appendChild(spaceSpan);
            }
        });
        
        wordSpans = wordsContainer.querySelectorAll('span');
        wordSpans[0].classList.add('active');
        
        updateCaretPosition();
    }

    function generateRandomWords(count) {
        const selectedWords = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * wordsList.length);
            selectedWords.push(wordsList[randomIndex]);
        }
        return selectedWords;
    }

    function handleKeyPress(e) {
        if (!testActive && timeLeft === 0) return; // Stop input if test is over

        if (!testActive) {
            startTimer();
        }
        
        const typedChar = e.key;
        if (typedChar.length > 1 && typedChar !== 'Backspace') return;

        const currentSpan = wordSpans[currentIndex];
        const expectedChar = currentSpan.textContent;

        if (typedChar === 'Backspace') {
            if (currentIndex > 0) {
                currentIndex--;
                if (wordSpans[currentIndex].classList.contains('incorrect')) {
                    incorrectChars--;
                } else {
                    correctChars--;
                }
                wordSpans[currentIndex].classList.remove('correct', 'incorrect');
                if(wordSpans[currentIndex+1]) {
                    wordSpans[currentIndex+1].classList.remove('active');
                }
            }
        } else {
            if (typedChar === expectedChar) {
                currentSpan.classList.add('correct');
                correctChars++;
            } else {
                currentSpan.classList.add('incorrect');
                incorrectChars++;
            }
            currentIndex++;
        }
        
        // Remove active class from previous character
        currentSpan.classList.remove('active');
        
        // Check if the game should end
        if (currentIndex === wordSpans.length) {
            endTest();
            updateCaretPosition(); // Move caret to the very end
            return; // Stop further execution
        }
        
        // Add active class to the next character
        if (currentIndex < wordSpans.length) {
            wordSpans[currentIndex].classList.add('active');
        }

        updateCaretPosition();
        updateStats();
    }

    function startTimer() {
        testActive = true;
        timer = setInterval(() => {
            if (!testActive) {
                 clearInterval(timer);
                 return;
            }
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;
            updateStats();
            if (timeLeft === 0) {
                endTest();
            }
        }, 1000);
    }

    function endTest() {
        if (!testActive) return; // Prevent endTest from running twice
        testActive = false;
        clearInterval(timer);
        wordsContainer.classList.add('blurred');
        
        // Final update to stats before showing results
        updateStats(); 
        
        const finalWpm = wpmDisplay.textContent;
        const finalAccuracy = accuracyDisplay.textContent;
        
        resultsWpm.textContent = finalWpm;
        resultsAccuracy.textContent = finalAccuracy;
        resultsScreen.style.display = 'flex';
    }

    function updateStats() {
        const timeElapsed = (testDuration - timeLeft) / 60;
        if (timeElapsed > 0) {
            const netWpm = Math.round((correctChars / 5) / timeElapsed);
            wpmDisplay.textContent = Math.max(0, netWpm);
        }

        const totalTyped = correctChars + incorrectChars;
        const accuracy = totalTyped === 0 ? 100 : ((correctChars / totalTyped) * 100).toFixed(1);
        accuracyDisplay.textContent = `${accuracy}%`;
    }

    function updateCaretPosition() {
        // If test is over, place caret after the last character
        if (currentIndex === wordSpans.length) {
            const lastSpan = wordSpans[currentIndex - 1];
            const spanRect = lastSpan.getBoundingClientRect();
            const containerRect = wordsContainer.getBoundingClientRect();
            caret.style.left = `${spanRect.right - containerRect.left}px`;
            caret.style.top = `${spanRect.top - containerRect.top}px`;
            return;
        }

        const currentSpan = wordSpans[currentIndex];
        const spanRect = currentSpan.getBoundingClientRect();
        const containerRect = wordsContainer.getBoundingClientRect();
        caret.style.left = `${spanRect.left - containerRect.left}px`;
        caret.style.top = `${spanRect.top - containerRect.top}px`;
    }

    function displayCurrentTime() {
        const options = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const formatter = new Intl.DateTimeFormat([], options);
        timeDisplay.textContent = formatter.format(new Date());
    }

    // --- Event Listeners ---
    document.addEventListener('keydown', handleKeyPress);
    restartBtn.addEventListener('click', startNewTest);

    timeOptions.addEventListener('click', (e) => {
        if (e.target.classList.contains('time-btn')) {
            testDuration = parseInt(e.target.dataset.time);
            timeOptions.querySelectorAll('.time-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            startNewTest();
        }
    });

    // --- Initial Load ---
    startNewTest();
    setInterval(displayCurrentTime, 1000);
});