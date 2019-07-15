/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phrases = ['Life is like a box of chocolates', 
                        'You Cannot Have Your Cake And Eat It Too',
                        'Beauty Is In The Eye Of The Beholder',
                        'Curiosity Killed The Cat',
                        'How Do You Like Them Apples']
        let phraseObjects = [];
        
        phrases.forEach(phrase => {phraseObjects.push(new Phrase(phrase))});
        return phraseObjects;
    };

    /**
     * Randomly retrieves one of the phrases
     * @return {Object} Phrase to be used 
     */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum]; 
    }

    /**
     * Begins game by selecting a random phrase and displaying it
     * @param {htmlButtonElement} button - used to remove win or lose class
     */
    startGame(button) {
        document.getElementById('overlay').style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
        button.classList.remove('win');
        button.classList.remove('lose');
    }

    /**
     * Handles keyboard clicks
     * @param (htmlButtonElement) button - that the user clicks
     */
    handleInteraction(button) {
        button.disabled = true;
        const selectedLetter = this.activePhrase.checkLetter(button.textContent);
        let winCheck;
        // Checks if clicked button letter is in phrase
        if (!selectedLetter) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            winCheck = this.checkForWin();
            // if true player wins
            if (winCheck) {
                this.gameOver(true);
            }
        }
    }

    /**
     * Checks if player won
     * @return {boolean} true if won, false if it wasn't
     */
    checkForWin() {
        const htmlLetters = document.querySelectorAll('#phrase .letter');
        let correctLetters = [];
        htmlLetters.forEach(charater => {
            if (charater.classList[2] === 'show') {
                correctLetters.push(charater);
            }
        })
        if (correctLetters.length === htmlLetters.length) {
            return true;
        }
        return false;
    }

    /**
     * Adds to missed 
     * Removes life from scoreboard
     * Checks for remaining lives and ends game if there are none
     */
    removeLife() {
        this.missed += 1;
        const scoreboard = document.querySelector('#scoreboard ol');
        scoreboard.removeChild(scoreboard.lastElementChild);
        if (this.missed === 5) {
            // Player lose, game over
            this.gameOver(false);
        }
    }

    /**
     * Displays the game over message
     * @param {boolean} gameWon - weather the player wins or not
     */
    gameOver(gameWon) {
        let message = '';
        let outcome = '';
        let oldPhrase = document.querySelectorAll('#phrase ul li');
        let keys = document.querySelectorAll('.key');
        let scoreboard = document.querySelector('#scoreboard ol');
        this.missed = 0;


        if (gameWon) {
            message = 'Congratulations! You win the game!';
            outcome = 'win';
        } else {
            message = 'Bummer. :( Try again!';
            outcome = 'lose';
        }
        
        // Opens overlay and endgame message
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('overlay').classList.add('animated');
        document.getElementById('overlay').classList.add('jackInTheBox');
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('btn__reset').classList.remove('start');
        document.getElementById('btn__reset').classList.add(outcome);

        // Clears current board and creates new game
        oldPhrase.forEach(charater => {
            charater.remove();
        });
        keys.forEach(key => {
            key.disabled = false;
            key.classList.remove('wrong');
            key.classList.remove('chosen');
        });

        // Removes all remaining hearts
        document.querySelectorAll('.tries').forEach(heart => heart.remove())

        // Reappends new hearts
        for (let i = 0; i < 5; i++) {
            let newHeart = document.createElement('li');
            newHeart.className = 'tries';
            newHeart.innerHTML = (`<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`);
            scoreboard.appendChild(newHeart);
        }
    }
}