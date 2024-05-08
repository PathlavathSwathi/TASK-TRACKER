function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const categoryInput = document.getElementById('categoryInput').value;
    if (!taskInput) {
        alert('Please enter a task');
        return;
    }
    if (!categoryInput) {
        alert('Please select a category');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskInput;
    const categorySpan = document.createElement('span');
    categorySpan.textContent = `(${categoryInput})`; // Display category in parentheses
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(categorySpan);
    taskList.appendChild(li);

    // Clear input fields after adding task
    document.getElementById('taskInput').value = '';
    document.getElementById('categoryInput').value = '';
}

// Event delegation for dynamically added checkboxes
document.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        const listItem = event.target.parentElement;
        if (event.target.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
    }
});

