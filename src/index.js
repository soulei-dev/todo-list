import './style.css';

const ul = document.querySelector('ul');

const todos = [
    {
        text: 'Faire du JavaScript',
        done: true
    },
    {
        text: 'Apprendre React.js !',
        done: false
    }, 
];

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    })
    ul.innerHTML = '';
    ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : ''}"></span>
    <p>${ todo.text }</p>
    <button class="delete-todo">Supprimer</button>
    `;
    return li
};

displayTodo();