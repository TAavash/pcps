// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDate = document.getElementById('due-date');
    const taskList = document.getElementById('task-list');
    const filterButtons = document.querySelectorAll('.filter-button');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    filterButtons.forEach(button => button.addEventListener('click', filterTasks));

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, dueDate.value);
        taskInput.value = '';
        dueDate.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-task')) {
            removeTask(e.target.parentElement.dataset.id);
        } else if (e.target.classList.contains('task-item')) {
            toggleComplete(e.target.dataset.id);
        } else if (e.target.classList.contains('edit-button')) {
            editTask(e.target.parentElement.dataset.id);
        }
    });

    function addTask(task, date) {
        if (task.trim() === '' || date.trim() === '') return;

        const newTask = {
            id: Date.now().toString(),
            text: task,
            date: date,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
    }

    function removeTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

    function toggleComplete(id) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        }
    }

    function editTask(id) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            const newText = prompt('Edit Task', task.text);
            const newDate = prompt('Edit Due Date', task.date);
            if (newText !== null && newText.trim() !== '') {
                task.text = newText;
                task.date = newDate;
                saveTasks();
                renderTasks();
            }
        }
    }

    function filterTasks(e) {
        const filter = e.target.id;
        document.querySelector('.filter-button.active').classList.remove('active');
        e.target.classList.add('active');

        renderTasks(filter);
    }

    function renderTasks(filter = 'all-tasks') {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            if (filter === 'completed-tasks' && !task.completed) return;
            if (filter === 'incomplete-tasks' && task.completed) return;

            const li = document.createElement('li');
            li.className = 'task-item';
            if (task.completed) li.classList.add('completed');
            li.dataset.id = task.id;
            li.innerHTML = `
                ${task.text} <span class="date">${task.date}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-task">Remove</button>
            `;
            taskList.appendChild(li);
        });
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    renderTasks();
});
