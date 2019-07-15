/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display the phrase 
     */
    addPhraseToDisplay() {
        const phraseHolder = document.querySelector('#phrase ul');
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach(charater => {
            // create new li and add charater
            let li = document.createElement('li');
            li.textContent = charater;
            // check if empty string
            if (charater === ' ') {
                li.className = 'space'
            } else {
                li.className = `hide letter ${charater}`;
            }
            phraseHolder.appendChild(li);
        });
    }

    /**
     * Checks if the letter is in the phrase
     * @param (string) letter - letter being checked
     * @return {boolean} - whether litter is within phrase
     */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * Displays the matched letter in the phrase
     * @param (string) letter - letter being displayed
     */
    showMatchedLetter(letter) {
        const htmlLetters = document.querySelectorAll('#phrase .letter');
        htmlLetters.forEach(charater => {
            if (charater.textContent === letter) {
                charater.classList.remove('hide');
                charater.classList.add('show');
                charater.classList.add('animated');
                charater.classList.add('tada');
            }
        });
    }
}