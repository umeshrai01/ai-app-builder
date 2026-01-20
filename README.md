# AI App Builder

This project leverages AI to generate simple web applications based on a user's prompt. It creates a basic structure with HTML, CSS, and JavaScript files.

## Prerequisites

- Python 3.11.9
- [uv](https://github.com/astral-sh/uv) (a fast Python package installer)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-app-builder
    ```

2.  **Install `uv`:**
    If you don't have `uv` installed, follow the official installation instructions. For example:
    ```bash
    pip install uv
    ```

3.  **Create a virtual environment and install dependencies:**
    Use `uv` to create a virtual environment and sync the dependencies from `pyproject.toml`.
    ```bash
    uv venv
    uv sync
    ```
    Activate the virtual environment:
    ```bash
    source .venv/bin/activate
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project:
    ```bash
    touch .env
    ```
    Add your Groq API key to the `.env` file. You can get one from the [Groq console](https://console.groq.com/keys).
    ```
    GROQ_API_KEY="your-groq-api-key"
    ```

## Usage

Run the application by providing a prompt describing the web app you want to create.

```bash
python main.py "Create a simple counter app with buttons to increment, decrement, and reset the count."
```

The generated files will be placed in the `generated_project/` directory. You can open the `index.html` file in your browser to see the result.
