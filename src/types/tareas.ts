export interface Task {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'in_progress' | 'review' | 'completed' | 'approved';
  dueDate: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export type TaskStatus = Task['status'];
export type TaskPriority = Task['priority'];
export type SortField =
  | 'dueDate'
  | 'priority'
  | 'status'
  | 'name'
  | 'createdAt';
export type SortOrder = 'asc' | 'desc';
