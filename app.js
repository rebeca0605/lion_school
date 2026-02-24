'use strict'

const container = document.getElementById('container-main')

async function buscarCursos(){
    const url = `https://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const cursos = await response.json()
    
    console.log(cursos)
    return cursos
}

async function selecionarCursos() {
    
    const containerBotoes = document.getElementById('botoes')
    const listCourses = await buscarCursos()

    listCourses.forEach(courses => {
        const img = document.createElement('img')
        img.src = `./img/${courses.sigla}-svg`

        const botaoCurso = document.createElement('button')
    })
}

buscarCursos()