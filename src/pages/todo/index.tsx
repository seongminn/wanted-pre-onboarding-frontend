import './style.scss';

import { FormEvent, useEffect, useState } from 'react';

import { createTodo, getTodos } from '@/api/todos';
import Footer from '@/components/common/Footer';
import TodoCreator from '@/components/todos/TodoCreator';
import TodoItem from '@/components/todos/TodoItem';
import { SUCCESS_MESSAGE } from '@/constants/message';
import useInput from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { Todo } from '@/types/todo';
import { TodoHandler } from '@/utils/handler';

const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { value, handleValue, resetValue } = useInput<{ todo: string }>({ todo: '' });

  const { openToast } = useToast();

  const handleGetTodo = () => {
    getTodos().then((res) => setTodos(res.data));
  };

  const handleCreateTodo = () => {
    createTodo({ todo: value.todo })
      .then(({ data }) => {
        setTodos((prevTodos) => TodoHandler('CREATE', prevTodos, data));
        resetValue();
        openToast(SUCCESS_MESSAGE.create, 'success');
      })
      .catch((err) => openToast(err.response.data.message[0], 'error'));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleCreateTodo();
  };

  useEffect(() => {
    handleGetTodo();
  }, []);

  return (
    <section className="todo-wrapper">
      <h2 className="title">투두리스트</h2>

      <TodoCreator todo={value.todo} handleTodo={handleValue} handleSubmit={onSubmit} />

      <ul className="todo-list">
        {todos.map((state) => (
          <TodoItem key={state.id} {...state} setTodos={setTodos} />
        ))}
      </ul>

      <Footer />
    </section>
  );
};

export default TodoPage;
