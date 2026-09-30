# Project Manager

A simple project management app built with React and TypeScript. Create projects, review their details and keep a list of tasks for each of them.

## Features

- Create a project with a title, description and due date
- Validation of the creation form with a modal dialog for empty fields
- Sidebar with all projects and a highlighted selected project
- Project details view with a formatted due date
- Delete a project
- Add and remove tasks
- Empty state screen when no project is selected

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## React Concepts Used

- State management with `useState` and functional updates
- Refs for reading uncontrolled inputs
- Forwarded refs with an imperative handle to open the modal from a parent component
- Portals to render the modal into a separate DOM node
- Controlled input for the new task field
- Conditional rendering for the main content area
- Typed props, state and refs

## Getting Started

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_project_manager.git`
2. Go to the project folder with `cd react_project_manager`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `public/` static files
- `src/`
  - `assets/` images used by the components
  - `components/`
    - `Button.tsx` reusable button
    - `Input.tsx` labeled input or textarea with a forwarded ref
    - `Modal.tsx` dialog rendered through a portal
    - `NewProject.tsx` form for creating a project
    - `NoProjetSelected.tsx` empty state screen
    - `ProjectSidebar.tsx` list of projects and the add button
    - `SelectedProject.tsx` details of the selected project
    - `Tasks.tsx` list of tasks
    - `NewTask.tsx` input for adding a task
  - `App.tsx` root component that holds the application state
  - `types.ts` shared types for projects and tasks
  - `main.tsx` application entry point
- `index.html` HTML template, including the `modal-root` container for the dialog

## Limitations

Projects and tasks are kept in memory only, so all data is lost when the page is refreshed.
