// Type para representar uma task
export type Task = {
  id: number;
  title: string;
  startDate: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "in progress" | "completed" | "overdue";
};
