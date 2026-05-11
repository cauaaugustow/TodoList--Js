const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li){
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar)
    botaoApagar.setAttribute('class','botao-apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
}


document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('botao-apagar')){
        el.parentElement.remove()
    }

})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto)
        console.log(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();

function criarLista(){
    const lista = document.createElement('li')
    return lista;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function criaTarefa(textoInput){
    const li = criarLista();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

})