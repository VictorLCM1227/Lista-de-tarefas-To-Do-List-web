/*
Lista de Tarefas
    [x] Saber quando o botão foi clicado
    [x] Pegar o texto dentro do input
    [x] Colocar esse texto na tela
    [ ] Deletar a tarefa da tela (Quando clicar no X)
*/

function adicionarTarefa() {
    let ValorDoInput = document.querySelector("input").value

    let li = document.createElement('li')
    li.innerHTML = ValorDoInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li) {
    li.parentElement.remove(li)
}