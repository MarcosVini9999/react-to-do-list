export interface Task {
  key: string;
  title: string;
  dateTime: string;
  filter: boolean;
  description: string;
}

export interface Project {
  projectName: string;
  tasks: Array<Task>;
}
