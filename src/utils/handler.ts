import { TodoResponse } from '@/types/todo';

type ActionType = 'GET' | 'CREATE' | 'UPDATE' | 'DELETE';

export const TodoHandler = (type: ActionType, preTodos: TodoResponse[], todo: TodoResponse) => {
  switch (type) {
    case 'CREATE':
      return [...preTodos, todo];
    case 'UPDATE':
      return preTodos.map((data: TodoResponse) => (data.id === todo.id ? { ...todo } : data));
    case 'DELETE':
      return preTodos.filter((data: TodoResponse) => data.id !== todo.id);
    default:
      return preTodos;
  }
};
