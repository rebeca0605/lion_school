'use strict'

const containerBotoes = document.getElementById('botoes')

async function buscarCursos(){
    const url = `https://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const cursos = await response.json()
    
    return cursos
}

async function selecionarCursos() {
    const listCourses = await buscarCursos()

    listCourses.forEach(courses => {
        const img = document.createElement('img')
        img.src = `./img/${courses.sigla}-icon-curso.svg`
        img.className = 'imagem'

        const botaoCurso = document.createElement('button')
        botaoCurso.className = 'botao-cursos'

        botaoCurso.addEventListener('click', () => {
            window.location.href = "alunos.html";
        })

        const nomeCurso = document.createElement('p')
        nomeCurso.textContent = courses.sigla
        nomeCurso.className = 'p'

        botaoCurso.appendChild(img)
        botaoCurso.appendChild(nomeCurso)
        containerBotoes.appendChild(botaoCurso)
    })
}

selecionarCursos()
buscarCursos()