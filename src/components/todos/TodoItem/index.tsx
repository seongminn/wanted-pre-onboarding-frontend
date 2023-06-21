import '../style.scss';

import { Dispatch, SetStateAction, useState } from 'react';

import { deleteTodo, updateTodo } from '@/api/todos';
import { SUCCESS_MESSAGE } from '@/constants/message';
import useInput from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { Todo, UpdateTodoRequest } from '@/types/todo';
import { TodoHandler } from '@/utils/handler';

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

  const handleUpdateTodo = (id: number, body: UpdateTodoRequest, toggle = false) => {
    updateTodo(id, { ...body })
      .then(({ data }) => {
        setTodos((prevTodos) => TodoHandler('UPDATE', prevTodos, data));
        openToast(SUCCESS_MESSAGE.update, 'success');
      })
      .catch((err) => openToast(err.response.data.message[0], 'error'));

    if (toggle) toggleEdit();
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then(() => {
        setTodos((prevTodos) => TodoHandler('DELETE', prevTodos, props));
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
