import { useState, type ReactNode } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjetSelected';
import ProjectsSidebar from './components/ProjectSidebar';
import type { Project, ProjectData } from './types';

type ProjectsState = {
  selectedProjectId: number | null | undefined;
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

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData: ProjectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject: Project = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content: ReactNode;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;