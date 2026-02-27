'use strict'

const homeContainer = document.getElementById('home');
const botaoDs = document.querySelector('.curso-ds');

async function buscarCursos(curso) {
    const url = `https://lion-school-backend.onrender.com/alunos?curso=${curso}`
    const response = await fetch (url)
    const cursos = await response.json()

    return cursos
    
}

function criarCard(){

}