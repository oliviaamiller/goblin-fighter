export function renderGhost(ghost) {
    const ghostDiv = document.createElement('div');
    const ghostImgEl = document.createElement('img');
    const ghostNameEl = document.createElement('p');
    const ghostHPEl = document.createElement('p');
    const strengthEl = document.createElement('p');


    ghostDiv.classList.add('ghost-div');
    ghostNameEl.classList.add('ghost-name');
    ghostImgEl.classList.add('ghost-img');
    ghostHPEl.classList.add('ghost-hp');
    strengthEl.classList.add('ghost-strength');

    ghostNameEl.textContent = ghost.name;
    ghostHPEl.textContent = ghost.hp;
    strengthEl.textContent = ghost.strength;

    if (ghost.hp === 0) {
        ghostImgEl.src = '../assets/poof.png';
    } else {
        ghostImgEl.src = '../assets/ghost.png';

    }

    ghostDiv.append(ghostNameEl, ghostHPEl, strengthEl,ghostImgEl);

    return ghostDiv;

}