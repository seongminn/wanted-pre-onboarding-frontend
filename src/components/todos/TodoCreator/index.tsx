import './style.scss';

import { ChangeEvent, FormEvent } from 'react';

import Button from '@/components/common/Button';

interface TodoCreatorProps {
  todo: string;
  handleTodo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const TodoCreator = (props: TodoCreatorProps) => {
  const { todo, handleTodo, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <input
        id="todo"
        className="create-form__input"
        placeholder="새로운 투두를 입력해보세요!"
        value={todo}
        onChange={handleTodo}
        data-testid="new-todo-input"
      />
      <Button border="left" data-testid="new-todo-add-button">
        추가
      </Button>
    </form>
  );
};

export default TodoCreator;
