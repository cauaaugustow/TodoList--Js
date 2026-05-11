const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

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
    limpaInput();
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

})