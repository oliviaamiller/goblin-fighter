
A 'destination' for:
- player HP
- list of living goblins
- for each goblin show
      their name
      their HP
- defeated goblins

Clickables
- Each goblin is clickable
  on click . . .
     possibly decrmement this goblin's HP
     possibly decrment player HP
     possibly increment defeatedGoblins
     pdate the DOM with new goblin, player, and defeated goblin state. (render deated goblins differently)

- New goblin form
   On Submit . . .
      User has supplied a name and submitted the form
      Make a new goblin object with that user input
      Add that object to the array of goblins in state
      "update a list"
      clear out the list DOM
      loop through the goblins
      render a new goblin DOM element for each item
      append that element to the HTML


for (let ghost of ghosts) {

        const eachGhost = renderGhost(ghost);

        if (ghost.hp > 0) {
            eachGhost.addEventListener('click', () => {
                if (ghost.agility === 1) {
                    if (Math.random() < .25) { 
                        if (playerStrength === 0) {
                            ghost.hp--;
                            alert(`You zapped ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength === 1) {
                            ghost.hp -= 2;
                            alert(`You're getting stronger, you really clobbered ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength === 2) {
                            ghost.hp -= 3;
                            alert(`You're getting stronger, you really clobbered ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength >= 3) {
                            ghost.hp -= 4;
                            alert(`You're so powerful, you super zonked ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                    }

                }

                if (ghost.agility === 2) {
                    if (Math.random() < .25) { 
                        if (playerStrength === 0) {
                            ghost.hp--;
                            alert(`You zapped ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength === 1) {
                            ghost.hp -= 2;
                            alert(`You're getting stronger, you really clobbered ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength === 2) {
                            ghost.hp -= 3;
                            alert(`You're getting stronger, you really clobbered ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                        if (playerStrength >= 3) {
                            ghost.hp -= 4;
                            alert(`You're so powerful, you super zonked ${ghost.name}!`);
                        } else {
                            alert(`You tried to strike ${ghost.name} but missed, try again!`);
                        }

                    }
                        
                }


                if (ghost.dexterity === 1) {
                    if (Math.random() < .2) {
                        if (ghost.strength === 2) {
                            playerHP -= 2;
                        }
        
                        if (ghost.strength === 3) {
                            playerHP -= 3;
                        }
        
                        if (ghost.strength === 1) {
                            playerHP --;
                        }
                        alert(`You got spooked by ${ghost.name}!`);
                    } else {
                        alert(`${ghost.name} tried to scare you but you're one tough doggie!`);
                    }
                }

                if (ghost.dexterity === 2) {
                    if (Math.random() < .4) {
                        if (ghost.strength === 2) {
                            playerHP -= 2;
                        }
        
                        if (ghost.strength === 3) {
                            playerHP -= 3;
                        }
        
                        if (ghost.strength === 1) {
                            playerHP --;
                        }
                        alert(`You got spooked by ${ghost.name}!`);
                    } else {
                        alert(`${ghost.name} tried to scare you but you're one tough doggie!`);
                    }
                }
                

                if (playerHP <= 0) {
                    dogImgEl.classList.add('game-over');
                    dogImgEl.src = './assets/stars.png';
                    alert('GAME OVER :(');
                }

                

                if (ghost.hp === 0) {
                    defeatedGhostsCount++;
                    playerStrength++;
                    eachGhost.removeAttribute('disabled');
                }

                
