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
    
    for (let i = 0; i < map.length; i++) {
        const display = document.getElementsByTagName('body')[0];
        let divLinha = i;
        divLinha = document.createElement('div');
        divLinha.style.display = 'flex';
        divLinha.classList.add('divLinha');
        divLinha.id = i;
        display.appendChild(divLinha);
        
        for(let j = 0; j < map[i].length; j++) {
            let mapa = map[i][j];
            let cell = map[i][j];
            cell = document.createElement('div');
            divLinha.appendChild(cell);

            if (mapa == " ") {
                cell.classList.add('space')
                cell.dataset.linha = `${i}`;
                cell.dataset.coluna = `${j}`;
            } else if (mapa == 'W') {
                cell.classList.add('wall')
                cell.dataset.linha = `${i}`;
                cell.dataset.coluna = `${j}`;
            } else if (mapa == 'S') {
                cell.classList.add('start');
                cell.dataset.linha = `${i}`;
                cell.dataset.coluna = `${j}`;
            } else if (mapa == 'F') {
                cell.classList.add('finish');
                cell.dataset.linha = `${i}`;
                cell.dataset.coluna = `${j}`;
            }
        }
    }

    document.addEventListener('keydown', (evt) => {
        let keyName = evt.key;
        const jogador = document.querySelector('.start');
        const posicaoAtualLinha = Number(jogador.dataset.linha);
        const posicaoAtualColuna = Number(jogador.dataset.coluna);
        let proxPosicaoLinha = 0;
        let proxPosicaoColuna = 0;

        if (keyName === 'ArrowDown') {
            proxPosicaoLinha = posicaoAtualLinha + 1;
            proxPosicaoColuna = posicaoAtualColuna;
        } else if (keyName === 'ArrowUp') {
            proxPosicaoLinha = posicaoAtualLinha - 1;
            proxPosicaoColuna = posicaoAtualColuna;
        }
        if (keyName === 'ArrowRight') {
            proxPosicaoLinha = posicaoAtualLinha;
            proxPosicaoColuna = posicaoAtualColuna + 1;
        } else if (keyName === 'ArrowLeft') {
            proxPosicaoLinha = posicaoAtualLinha;
            proxPosicaoColuna = posicaoAtualColuna - 1;
        }
        const linha = document.querySelectorAll('.divLinha');
        
        for (let i = 0; i < linha.length; i++) {
            const line = linha[i].childNodes;
            for (let j = 0; j < line.length; j++) {
                const bloco = line[j];
                const positionLinha = Number(bloco.dataset.linha);
                const positionColuna = Number(bloco.dataset.coluna);
                if (proxPosicaoLinha === positionLinha && proxPosicaoColuna === positionColuna && bloco.classList.value !== 'wall') {
                    bloco.classList.remove('space');
                    bloco.classList.add('start');
                    jogador.classList.remove('start')
                    jogador.classList.add('space')
                }
            }
        }
        if (proxPosicaoLinha === 8 && proxPosicaoColuna === 20) {
            alert("Parabéns, você venceu!")
            const btn = document.getElementById('btn');
            btn.style.display = 'block';
            btn.addEventListener('click', () => {
                location.reload()
            });
        }
    });
}
criarLabirinto();