'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

let todoData = JSON.parse(localStorage.getItem('newTodo'));
    if (todoData === null) {
  todoData = [];
    } else {
        todoData = JSON.parse(localStorage.getItem('newTodo'));
    }

const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';
    
    localStorage.setItem('newTodo', JSON.stringify(todoData));


    todoData.forEach(function(item, i){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            render();
        });
        
        const btnTodoRemuve = li.querySelector('.todo-remove');
            btnTodoRemuve.addEventListener('click', function() {
                todoData.splice(i, 1);
                render();
            });
    });
    headerInput.value = '';
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    if (headerInput.value === '') {
        return;
    }


    const newTodo = {
        value: headerInput.value,
        complited: false
    };

    todoData.push(newTodo);


    render();
});

render();
