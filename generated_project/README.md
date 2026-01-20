# SimpleTodoApp

## Project Title
**SimpleTodoApp** – A lightweight, client‑side Todo list application built with vanilla HTML, CSS, and JavaScript.

## Brief Description
SimpleTodoApp lets users quickly add, edit, complete, and delete tasks. All data is stored locally in the browser using `localStorage`, ensuring that tasks persist across page reloads without any server or backend setup.

---

## Tech Stack
- **HTML** – Structure of the application (`index.html`).
- **CSS** – Styling and responsive layout (`styles.css`).
- **JavaScript** – Core functionality, event handling, and persistence (`app.js`).

---

## Feature List
- **Add Tasks** – Input a task description and press **Enter** or click the **Add** button.
- **Edit Tasks** – Double‑click a task to edit its text inline.
- **Mark as Complete** – Click the checkbox to toggle a task’s completed state.
- **Delete Tasks** – Click the trash‑can icon to remove a task.
- **Persistent Storage** – All tasks are saved in `localStorage` under the key `simple_todo_tasks`.
- **Responsive Design** – Works on desktop, tablet, and mobile browsers.
- **No Build Tools** – Pure static files; open `index.html` directly in a browser.

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/simple-todo-app.git
   cd simple-todo-app
   ```
2. **Open the application**
   - Locate the file `index.html` in the project root.
   - Double‑click it or open it in your favorite browser (Chrome, Firefox, Edge, Safari, etc.).
   - No server or additional tooling is required.

---

## Usage Guide
Below is a quick walkthrough of the main interactions. Replace the placeholder images with actual screenshots when publishing the docs.

### 1. Adding a Task
![Add Task Placeholder](assets/add-task.png)
- Type a description into the input field at the top.
- Press **Enter** or click the **Add** button.
- The new task appears in the list.

### 2. Editing a Task
![Edit Task Placeholder](assets/edit-task.png)
- Double‑click the task text.
- The text becomes editable; modify it as needed.
- Press **Enter** or click outside the field to save.

### 3. Completing a Task
![Complete Task Placeholder](assets/complete-task.png)
- Click the checkbox next to a task.
- The task text is crossed out and its state is saved.

### 4. Deleting a Task
![Delete Task Placeholder](assets/delete-task.png)
- Click the trash‑can icon on the right side of a task.
- The task is removed instantly.

---

## Persistence Mechanism
The application uses the browser’s **localStorage** to keep tasks between sessions.
- **Key:** `simple_todo_tasks`
- Data is stored as a JSON string representing an array of task objects:
  ```json
  [{"id":1,"text":"Buy groceries","completed":false}, ...]
  ```
- On page load, `app.js` reads this key, parses the JSON, and renders the tasks.
- Any add, edit, toggle, or delete operation updates the array and rewrites the key.

---

## Responsive Design & Browser Support
- The layout uses flexible CSS (`flexbox` and media queries) to adapt to various screen sizes.
- Tested on the latest versions of **Chrome**, **Firefox**, **Edge**, and **Safari**.
- Works on mobile browsers (iOS Safari, Android Chrome) without any additional configuration.

---

## License
[Insert License Here] – e.g., MIT License.

---

## File Reference for Developers
- `index.html` – Main HTML markup.
- `styles.css` – Stylesheet handling layout and visual design.
- `app.js` – JavaScript logic for task management and persistence.

Feel free to fork, modify, and enhance SimpleTodoApp!
