import { useState, type ReactNode } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjetSelected';
import ProjectsSidebar from './components/ProjectSidebar';

type Project = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
};

type ProjectsState = {
  selectedProjectId: string | null | undefined;
  projects: Project[];
};

function App() {
  const [projectsState, setProjectsState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content: ReactNode;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;