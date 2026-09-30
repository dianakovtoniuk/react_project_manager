export type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};

export type Project = ProjectData & {
  id: number;
};

export type Task = {
  id: number;
  text: string;
  projectId: number;
};