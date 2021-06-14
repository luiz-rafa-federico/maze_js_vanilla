const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const criarLabirinto = () => {

    //Criando labirinto
    let labirinto = [];
    let cell;
    let divLinha;

    for (let i = 0; i < map.length; i++) {
        const display = document.getElementsByTagName('body')[0];
        divLinha = i;
        divLinha = document.createElement('div');
        divLinha.style.display = 'flex';
        divLinha.classList.add('divLinha');
        divLinha.id = i;
        display.appendChild(divLinha);
        
        for(let j = 0; j < map[i].length; j++) {
            let mapa = map[i][j];
            cell = map[i][j];
            cell = document.createElement('div');
            divLinha.appendChild(cell);

            if (mapa == " ") {
                cell.innerHTML = "P";
                cell.style.visibility = 'hidden';
                cell.classList.add('space')
                cell.dataset.position = j;
            } else if (mapa == 'W') {
                cell.classList.add('wall')
                cell.dataset.position = 'W';
            } else if (mapa == 'S') {
                cell.classList.add('start');
                cell.id = 'player'
                cell.dataset.position = j;
            } else if (mapa == 'F') {
                cell.classList.add('finish');
                cell.dataset.position = j;
            }
        }
        labirinto.push(divLinha);
    }

    //Movendo jogador
    let playerTop = 0;
    let playerLeft = 0;
    let keyName;
    
    let playerElm = document.getElementById('player');
    let player = labirinto[9].firstElementChild;
    let playerPosition = [];
    playerPosition[0] = labirinto[9][0];

    document.addEventListener('keydown', (evt) => {
        keyName = evt.key;
        
        if (keyName === 'ArrowDown') {
            playerTop += 30;
        } else if (keyName === 'ArrowUp') {
            playerTop -= 30;
        }
        if (keyName === 'ArrowRight') {
            playerLeft += 30;
        } else if (keyName === 'ArrowLeft') {
            playerLeft -= 30;
        }
        playerElm.style.top = playerTop + 'px';
        playerElm.style.left = playerLeft + 'px';
    });
}
criarLabirinto();


