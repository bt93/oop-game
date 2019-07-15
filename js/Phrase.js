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
            let li = document.createElement('li');
            li.textContent = charater;
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
     */
    checkLetter(letter) {
        const checkedLetter = this.phrase.includes(letter);
        if (checkedLetter) {
            // Display the letter(s)
            console.log(true);
        } else {
            // Remove life
            console.log(false);
        }
    }
}