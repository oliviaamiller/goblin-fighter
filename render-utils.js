export function renderGhost(ghost) {
    const ghostDiv = document.createElement('div');
    const dataDiv = document.createElement('div');
    const coloredSquaresDiv = document.createElement('div');
    const ghostImgEl = document.createElement('img');
    const ghostNameEl = document.createElement('p');
    const ghostHPEl = document.createElement('p');
    const strengthEl = document.createElement('p');
    const agilityEl = document.createElement('p');
    const dexterityEl = document.createElement('p');


    ghostDiv.classList.add('ghost-div');
    dataDiv.classList.add('data-div');
    coloredSquaresDiv.classList.add('colored-squares-div');
    ghostNameEl.classList.add('ghost-name');
    ghostImgEl.classList.add('ghost-img');
    ghostHPEl.classList.add('ghost-hp');
    strengthEl.classList.add('ghost-strength');
    agilityEl.classList.add('ghost-agility');
    dexterityEl.classList.add('ghost-dexterity');

    ghostNameEl.textContent = ghost.name;
    ghostHPEl.textContent = ghost.hp;
    strengthEl.textContent = ghost.strength;
    agilityEl.textContent = ghost.agility;
    dexterityEl.textContent = ghost.dexterity;

    if (ghost.hp === 0) {
        ghostImgEl.src = '../assets/poof.png';
    } else {
        ghostImgEl.src = '../assets/ghost.png';

    }

    ghostDiv.append(dataDiv, ghostImgEl);
    dataDiv.append(ghostNameEl, coloredSquaresDiv);
    coloredSquaresDiv.append(ghostHPEl, strengthEl, agilityEl, dexterityEl);

    return ghostDiv;

}