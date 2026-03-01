'use strict'

const homeContainer = document.querySelector('.home');

const botaoDs = document.querySelector('.curso-ds');
const botaoRedes = document.querySelector('.curso-redes');

const botaoSair = document.querySelector('.sair')


// async function buscarCursos(curso) {
//     const url = `https://lion-school-backend.onrender.com/alunos?curso=${curso}`
//     const response = await fetch (url)
//     const cursos = await response.json()

//     return cursos
    
// }

async function buscarAlunos(cursoId) {
    const url = `https://lion-school-backend.onrender.com/alunos?curso_id=${cursoId}`;
    const response = await fetch(url);
    const alunos = await response.json()
    return alunos
}

function criarCard(aluno) {
    const card = document.createElement('div')
    card.classList.add('card-aluno')

    const nome = document.createElement('p')
    nome.textContent = aluno.nome

    card.appendChild(nome)

    return card
}

async function carregarAlunos(cursoId) {
    homeContainer.innerHTML = ''
    homeContainer.classList.add('pagina-alunos')

    const alunos = await buscarAlunos(cursoId)

    alunos.forEach(aluno => {
        const card = criarCard(aluno)
        homeContainer.appendChild(card)
    })
}

function voltarHome() {
    homeContainer.innerHTML = ''
    homeContainer.classList.remove('pagina-alunos')

    montarHomeInicial()
}



function montarHomeInicial() {
    homeContainer.innerHTML = `
        <div class="texto-curso">
            <h2>Escolha um <span>curso</span><br>para gerenciar</h2>
            <img src="/img/icon-dispositivos.svg" alt="dispositivos">
        </div>

        <div class="estudante">
            <img src="/img/studant.svg" alt="estudante">
        </div>

        <div class="cursos">
            <div class="curso-ds">
                <button>
                    <img src="/img/option-ds.svg" alt="Curso de DS">
                </button>
            </div>

            <div class="curso-redes">
                <button>
                    <img src="/img/option-redes.svg" alt="Curso de Redes">
                </button>
            </div>
        </div>
    `

    // recaptura os botões porque o HTML foi recriado
    document.querySelector('.curso-ds')
        .addEventListener('click', () => carregarAlunos(1))

    document.querySelector('.curso-redes')
        .addEventListener('click', () => carregarAlunos(2))
}




botaoDs.addEventListener('click', () => carregarAlunos(1))    // Curso de Ds
botaoRedes.addEventListener('click', () => carregarAlunos(2)) // Curso de Redes
botaoSair.addEventListener('click', voltarHome) // Voltar para a pagina principal