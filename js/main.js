// Variables
const inputTexto = document.querySelector('.input-text');
const botao = document.querySelector('.botao');
const tarefas = document.querySelector('.tarefas');
const print = document.querySelector('.priting')

//Functions
const criaLi = () => {
    const li = document.createElement('li');
    print.classList.remove('hide')
    return li
};

const criaBotaoApagar = (li) => {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'apagar');
};

const limpaInput = () => {
    inputTexto.value = '';
};

const criaTarefa = (textoInput) => {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li);
}

//Events

inputTexto.addEventListener('keypress', function () {return;})

botao.addEventListener('click', function (e) {
    e.preventDefault()
    if (!inputTexto.value) return;
    criaTarefa(inputTexto.value);  
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
})