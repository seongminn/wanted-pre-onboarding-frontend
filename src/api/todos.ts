import { Todo, TodoResponse, UpdateTodoRequest } from '@/types/todo';

import { instance } from './instance';

export const createTodo = async (body: Pick<Todo, 'todo'>) => {
  return instance.post<TodoResponse>('/todos', { ...body });
};

export const getTodos = async () => {
  return instance.get<TodoResponse[]>('/todos');
};

export const updateTodo = async (id: number, body: UpdateTodoRequest) => {
  return instance.put<TodoResponse>(`/todos/${id}`, body);
};

export const deleteTodo = async (id: number) => {
  return instance.delete(`/todos/${id}`);
};
