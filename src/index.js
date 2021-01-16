import './style.css';

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form > input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    addTodo(value);
});

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
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-todo');
    buttonDelete.innerHTML = 'Supprimer';
    buttonDelete.addEventListener('click', event => {
        deleteTodo(index);
    })
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : ''}"></span>
    <p>${ todo.text }</p>
    `;
    li.appendChild(buttonDelete);
    return li;
};

const addTodo = text => {
    todos.push({
      text,
      done: false
    });
    displayTodo();
  };

  const deleteTodo = (index) => {
      todos.splice(index, 1);
      displayTodo();
  }

displayTodo();