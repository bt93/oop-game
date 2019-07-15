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
        splitPhrase.forEach(letter => {
            let li = document.createElement('li');
            li.textContent = letter;
            if (letter === ' ') {
                li.className = 'space'
            } else {
                li.className = `hide letter ${letter}`;
            }
            phraseHolder.appendChild(li);
        });
    }
}