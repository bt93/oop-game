/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();

/**
 * Click event on button that starts the game
 */
document.getElementById('btn__reset').addEventListener('click', e => game.startGame());