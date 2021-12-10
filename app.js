// import functions and grab DOM elements
import { renderGhost } from './render-utils.js';

const defeatedNumEl = document.querySelector('#defeated-number');
const dogImgEl = document.querySelector('#dog-img');
const dogHPEl = document.querySelector('#dog-hp');
const ghostsEl = document.querySelector('.ghosts');
const form = document.querySelector('form');




// let state
let defeatedGhostsCount = 0;
let playerHP = 10;
let ghosts = [
    { name: 'Ron', hp: 2 },
    { name: 'Belinda', hp: 4 }
];


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


  // - New goblin form
  //  On Submit . . .
form.addEventListener('submit', (e) => {
    e.preventDefault();
  // User has supplied a name and submitted the form
    const data = new FormData(form);

    const ghostName = data.get('ghost-name');

  //     Make a new goblin object with that user input
    const newGhost = {
        name: ghostName,
        hp: 3
    };

  //     Add that object to the array of goblins in state
    ghosts.push(newGhost);

    // display new ghosts in the DOM
    displayGhosts();
  
});


function displayGhosts() {
// clear out the ghosts in DOM 
    ghostsEl.textContent = '';

// loop through the ghosts
    for (let ghost of ghosts) {

        const eachGhost = renderGhost(ghost);

        if (ghost.hp > 0) {
            eachGhost.addEventListener('click', () => {
                if (Math.random() < .5) { 
                    ghost.hp--;
                    alert(`You zapped ${ghost.name}!`);
                } else {
                    alert(`You tried to strike ${ghost.name} but missed, try again!`);
                }

                if (Math.random() < .3) {
                    playerHP--;
                    alert(`You got spooked by ${ghost.name}!`);
                } else {
                    alert(`${ghost.name} tried to scare you but you're one tough doggie!`);
                }

                if (playerHP === 0) {
                    dogImgEl.classList.add('game-over');
                    alert('GAME OVER :(');
                }

                if (ghost.hp === 0) {
                    defeatedGhostsCount++;
                }

                dogHPEl.textContent = playerHP;
                defeatedNumEl.textContent = defeatedGhostsCount;

                displayGhosts();
            });

        }

        ghostsEl.append(eachGhost);
       
    }

}


displayGhosts();