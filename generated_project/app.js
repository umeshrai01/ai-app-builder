// SimpleTodoApp client-side logic
// Storage key for localStorage
const STORAGE_KEY = 'simple_todo_tasks';

/**
 * Task shape definition.
 * @typedef {Object} Task
 * @property {string} id - Unique identifier.
 * @property {string} title - Task title.
 * @property {boolean} completed - Completion status.
 */

/** In‑memory task list */
let tasks = [];

/** Load tasks from localStorage.
 * @returns {Task[]}
 */
function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    return [];
  }
  try {
    const parsed = JSON.parse(data);
    // Ensure we return an array of objects with expected shape
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (e) {
    console.error('Failed to parse tasks from localStorage', e);
    return [];
  }
}

/** Save tasks to localStorage.
 * @param {Task[]} tasksArray
 */
function saveTasks(tasksArray) {
  try {
    const data = JSON.stringify(tasksArray);
    localStorage.setItem(STORAGE_KEY, data);
  } catch (e) {
    console.error('Failed to save tasks to localStorage', e);
  }
}

/** Render the task list into the DOM. */
function renderTasks() {
  const listContainer = document.getElementById('task-list');
  if (!listContainer) {
    console.warn('No element with id "task-list" found in DOM.');
    return;
  }
  // Clear existing content
  listContainer.innerHTML = '';

  tasks.forEach((task) => {
    // Create container for a single task
    const item = document.createElement('div');
    item.className = 'task-item';
    if (task.completed) {
      item.classList.add('completed');
    }
    item.dataset.taskId = task.id; // for potential debugging

    // Checkbox for completion toggle
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskStatus(task.id));
    item.appendChild(checkbox);

    // Title span (editable via edit button)
    const titleSpan = document.createElement('span');
    titleSpan.textContent = task.title;
    titleSpan.className = 'task-title';
    item.appendChild(titleSpan);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const newTitle = prompt('Edit task title:', task.title);
      if (newTitle !== null && newTitle.trim() !== '') {
        editTask(task.id, newTitle.trim());
      }
    });
    item.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    item.appendChild(deleteBtn);

    listContainer.appendChild(item);
  });
}

/** Add a new task.
 * @param {string} title
 */
function addTask(title) {
  const newTask = {
    id: Date.now().toString(),
    title: title,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();
}

/** Edit an existing task's title.
 * @param {string} id
 * @param {string} newTitle
 */
function editTask(id, newTitle) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.title = newTitle;
    saveTasks(tasks);
    renderTasks();
  }
}

/** Delete a task by id.
 * @param {string} id
 */
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);
  renderTasks();
}

/** Toggle the completed status of a task.
 * @param {string} id
 */
function toggleTaskStatus(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    saveTasks(tasks);
    renderTasks();
  }
}

/** Initialise the application: load tasks, render, set up listeners. */
function init() {
  tasks = loadTasks();
  renderTasks();

  const form = document.getElementById('new-task-form');
  if (!form) {
    console.warn('No element with id "new-task-form" found in DOM.');
    return;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[name="title"]');
    if (!input) return;
    const title = input.value.trim();
    if (title) {
      addTask(title);
      input.value = '';
    }
  });
}

// Run init when the DOM is fully loaded.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
