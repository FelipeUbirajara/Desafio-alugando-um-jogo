function alterarStatusJogo(id) {
    let botao1 = document.getElementById('game-1');
    if (botao1.classList.contains('dashboard__item__button>Alugar</a>')) {
        botao1.classList.remove('dashboard__item__button>Alugar</a>');
        botao1.classList.add('dashboard__item__button dashboard__item__button--return>Devolver</a>');
    } else {
        botao1.classList.remove('dashboard__item__button dashboard__item__button--return>Devolver</a>');
        botao1.classList.add('dashboard__item__button>Alugar</a>');
    }
}

function alterarStatusJogo2() {
    let botao2 = document.getElementById('game-2');
    if (botao2.classList.contains('dashboard__item__button>Alugar</a>')) {
        botao2.classList.remove('dashboard__item__buttonv>Alugar</a>');
        botao2.classList.add('dashboard__item__button dashboard__item__button--return>Devolver</a>');
    } else {
        botao2.classList.remove('dashboard__item__button dashboard__item__button--return>Devolver</a>');
        botao2.classList.add('dashboard__item__button>Alugar</a>');
    }
}

function alterarStatusJogo3() {
    let botao3 = document.getElementById('game-3');
    if (botao3.classList.contains('dashboard__item__button>Alugar</a>')) {
        botao3.classList.remove('dashboard__item__button>Alugar</a>');
        botao3.classList.add('dashboard__item__button dashboard__item__button--return>Devolver</a>');
    } else {
        botao3.classList.remove('dashboard__item__button dashboard__item__button--return>Devolver</a>');
        botao3.classList.add('dashboard__item__button>Alugar</a>');
    }
}