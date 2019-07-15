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
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase;
        randomPhrase.addPhraseToDisplay();
    }

    /**
     * Handels keyboard clicks
     * @param (htmlButtonElement) button that the user clicks
     */
    handleInteraction() {
        
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
        if (gameWon) {
            message = 'Congratulations! You win the game!';
            outcome = 'win'
        } else {
            message = 'Bummer! Refresh and try again!';
            outcome = 'lose'
        }
        
        document.getElementById('overlay').style.display = 'flex';
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('btn__reset').classList.remove('start');
        document.getElementById('btn__reset').classList.add(outcome);
    }
}