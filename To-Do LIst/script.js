// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task
function createTask(taskContent) {
    const li = document.createElement('li');
    
    // Create the task content
    const taskText = document.createElement('span');
    taskText.textContent = taskContent;
    li.appendChild(taskText);

    // Add 'complete' button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    li.appendChild(completeBtn);

    // Add 'delete' button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteBtn);

    // Append the task to the list
    taskList.appendChild(li);
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        createTask(taskContent);
        taskInput.value = ''; // Clear input field after adding task
    }
});

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskBtn.click();
    }
});
