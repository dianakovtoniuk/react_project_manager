export type ProjectData = {
  title: string;
  description: string;
  dueDate: string;
};

export type Project = ProjectData & {
  id: number;
};