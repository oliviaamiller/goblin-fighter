export function renderGhost(ghost) {
    const ghostDiv = document.createElement('div');
    const ghostNameEl = document.createElement('p');
    const ghostImgEl = document.createElement('img');
    const ghostHPEl = document.createElement('p');


    ghostDiv.classList.add('ghost-div');
    ghostNameEl.classList.add('ghost-name');
    ghostImgEl.classList.add('ghost-img');
    ghostHPEl.classList.add('ghost-hp');

    ghostNameEl.textContent = ghost.name;
    ghostHPEl.textContent = ghost.hp;



    if (ghost.hp === 0) {
        ghostImgEl.src = '../assets/poof.png';
    } else {
        ghostImgEl.src = '../assets/ghost.png';
    }

    if (ghost.hp < 0) {
        ghostDiv.classList.add('poof');
    }

    ghostDiv.append(ghostNameEl, ghostHPEl, ghostImgEl);

    return ghostDiv;

}