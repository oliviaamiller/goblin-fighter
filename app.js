// import functions and grab DOM elements
import { renderGhost } from './render-utils.js';

const defeatedNumEl = document.querySelector('#defeated-number');
const dogImgEl = document.querySelector('#dog-img');
const dogHPEl = document.querySelector('#dog-hp');
// const dogStrengthEl = document.querySelector('#dog-strength');
const ghostsEl = document.querySelector('.ghosts');
const form = document.querySelector('form');


// let state
let defeatedGhostsCount = 0;
let playerHP = 10;
// let playerStrength = 0;
let ghosts = [
    { 
        name: 'Ron', 
        hp: 2, 
        // strength: 1,
        // agility: 2,
        // dexterity: 1,
    },
    { 
        name: 'Belinda', 
        hp: 4,
        // strength: 2,
        // agility: 1,
        // dexterity: 2,
    }
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
        hp: 3,
        strength: Math.ceil(Math.random() * 3),
        agility: Math.ceil(Math.random() * 2),
        dexterity: Math.ceil(Math.random() * 2),
    };

  //     Add that object to the array of goblins in state
    if (data.get('ghost-name') !== '') {
        ghosts.push(newGhost);
    }

    if (ghosts.length > 6) {
        ghosts.shift();
    }

    // display new ghosts in the DOM
    displayGhosts();

  
});


function displayGhosts() {
// clear out the ghosts in DOM 
    ghostsEl.textContent = '';

// loop through the ghosts
    for (let ghost of ghosts) {
        
        const eachGhost = renderGhost(ghost);

        eachGhost.addEventListener('click', () => {

            if (Math.random() < .5) {
                ghost.hp--;
                alert(`You zapped ${ghost.name}!`);
            } else {
                alert(`You tried to strike ${ghost.name} but missed, try again!`);
            }

            if (Math.random() < .5) {
                playerHP--;
                alert(`You got spooked by ${ghost.name}!`);
            } else {
                alert(`${ghost.name} tried to scare you but you're one tough doggie!`);
            }

            if (ghost.hp === 0) {
                defeatedGhostsCount++;
            }

            if (playerHP === 0) {
                dogImgEl.classList.add('game-over');
                dogImgEl.src = './assets/stars.png';
                alert('GAME OVER :(');
            }

            dogHPEl.textContent = playerHP;
            defeatedNumEl.textContent = defeatedGhostsCount;

            displayGhosts();

        });
        ghostsEl.append(eachGhost);
    }
}

displayGhosts();