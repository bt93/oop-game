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
     * Randomly retrieves one of the phrases at random
     * @return {Object} Phrase to be used 
     */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum].phrase; 
    }
}