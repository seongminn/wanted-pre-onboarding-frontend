import '../style.scss';

import { Dispatch, SetStateAction, useState } from 'react';

import { deleteTodo, updateTodo } from '@/api/todos';
import useInput from '@/hooks/useInput';
import { Todo, UpdateTodoRequest } from '@/types/todo';

import TodoItemButton from '../TodoItemButton';
import TodoInfo from '../TodoItemInfo';

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

  const handleUpdateTodo = (id: number, body: UpdateTodoRequest, toggle = false) => {
    updateTodo(id, { ...body })
      .then(({ data }) => {
        setTodos((prevTodos) => {
          const processed = prevTodos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo));

          return processed;
        });
      })
      .catch(console.error);

    if (toggle) toggleEdit();
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
      .then(() => {
        setTodos((prevTodos) => {
          const processed = prevTodos.filter((todo) => todo.id !== id);

          return processed;
        });
      })
      .catch(console.error);
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
        <TodoInfo
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
