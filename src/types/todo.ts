export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type TodoResponse = Todo;

export type UpdateTodoRequest = Pick<Todo, 'todo' | 'isCompleted'>;
