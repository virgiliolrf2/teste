function gerarbotao() {
    if   (!document.getElementById('botaoA') && !document.getElementById('botaoI1') && !document.getElementById('botaoI2')) {
        var botao1 = document.createElement('button')
        botao1.id = botaoA
        botao1.innerText = 'Turma A'
        botao1.onclick = function () {
            window.location.href = "./turmaA/turmaA.html"
        }
    }
    
}