import '../style.scss';

import { Dispatch, SetStateAction, useState } from 'react';

import { deleteTodo, updateTodo } from '@/api/todos';
import { SUCCESS_MESSAGE } from '@/constants/message';
import useInput from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { Todo, TodoResponse, UpdateTodoRequest } from '@/types/todo';

import TodoItemButton from '../TodoItemButton';
import TodoItemInfo from '../TodoItemInfo';

interface TodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoItem = (props: TodoItemProps) => {
  const { id, todo, isCompleted, setTodos } = props;

  const [isEdit, setIsEdit] = useState(false);
  const { value, handleValue } = useInput<{ todo: string }>({ todo });
  const { openToast } = useToast();

  const updateTodosState = (prevTodos: TodoResponse[], data: TodoResponse, id: number) => {
    const processed = prevTodos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo));

    return processed;
  };

  const handleUpdateTodo = (id: number, body: UpdateTodoRequest, toggle = false) => {
    updateTodo(id, { ...body })
      .then(({ data }) => {
        setTodos((prevTodos) => updateTodosState(prevTodos, data, id));
        openToast(SUCCESS_MESSAGE.update, 'success');
      })
      .catch((err) => openToast(err.response.data.message[0], 'error'));

    if (toggle) toggleEdit();
  };

  const deleteTodosState = (prevTodos: TodoResponse[], id: number) => {
    const processed = prevTodos.filter((todo) => todo.id !== id);

    return processed;
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then(() => {
        setTodos((prevTodos) => deleteTodosState(prevTodos, id));
        openToast(SUCCESS_MESSAGE.delete, 'error');
      })
      .catch((err) => openToast(err.response.data.message, 'error'));
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <li className="todo-list__item">
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          className="todo-list__checkbox"
          onChange={() => handleUpdateTodo(id, { todo, isCompleted: !isCompleted })}
        />
        <TodoItemInfo
          isEdit={isEdit}
          content={todo}
          isCompleted={isCompleted}
          handleValue={handleValue}
        />
      </label>

      {isEdit ? (
        <TodoItemButton.isEdit
          id={id}
          toggleEdit={toggleEdit}
          modifiedTodo={value.todo}
          isCompleted={isCompleted}
          handleUpdateTodo={handleUpdateTodo}
        />
      ) : (
        <TodoItemButton id={id} toggleEdit={toggleEdit} handleDeleteTodo={handleDeleteTodo} />
      )}
    </li>
  );
};

export default TodoItem;
