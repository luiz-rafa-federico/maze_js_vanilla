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
// Criando labirinto
let cell = undefined;
let isMove = false;
let player = undefined;

for (let i = 0; i < map.length; i++) {
    const display = document.getElementsByTagName('body')[0];
    let divLinha = i;
    divLinha = document.createElement('div');
    divLinha.style.display = 'flex';
    divLinha.classList.add('divLinha');
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
            cell.dataset.position = 1;
        } else if (mapa == 'W') {
            cell.classList.add('wall')
            cell.dataset.position = 0;
        } else if (mapa == 'S') {
            cell.classList.add('start');
            cell.id = 'player'
            cell.dataset.position = 1;
            player = document.querySelector('#player');
        } else if (mapa == 'F') {
            cell.classList.add('finish');
            cell.dataset.position = 1;
        }
        //appendChild???
    }
}

//Movendo jogador
let playerTop = 0;
let playerLeft = 0;

document.addEventListener('keydown', (evt) => {
    isMove = true;
    let keyName = evt.key;

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
    player.style.top = playerTop + 'px';
    player.style.left = playerLeft + 'px';

});

//arrays de space e de wall

// const isSpace = document.querySelectorAll('.space');
    // const isWall = document.querySelectorAll('.wall');
   
    // for (let i = 0; i < isSpace.length; i++) {
        
    // }

    // for (let i = 0; i < isWall.length; i++) {
    
    // }




        




