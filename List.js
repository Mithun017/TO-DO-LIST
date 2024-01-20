let taskCount = 0;

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        taskCount++;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskCount}. ${taskText}</span>
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const listItem = button.parentNode;
    const taskList = document.getElementById('task-list');
    taskList.removeChild(listItem);

    
    const tasks = taskList.getElementsByTagName('li');
    taskCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        taskCount++;
        tasks[i].querySelector('.task-text').innerText = `${taskCount}. ${tasks[i].querySelector('.task-text').innerText.slice(3)}`;
    }
}
