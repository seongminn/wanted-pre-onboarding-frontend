import '../style.scss';

import { ChangeEvent } from 'react';

interface TodoItemInfoProps {
  isEdit: boolean;
  content: string;
  isCompleted: boolean;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoItemInfo = (props: TodoItemInfoProps) => {
  const { isEdit, content, isCompleted, handleValue } = props;

  return (
    <>
      {isEdit ? (
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          id="todo"
          defaultValue={content}
          onChange={handleValue}
          data-testid="modify-input"
        />
      ) : (
        <span className={`todo-list__item-name ${isCompleted ? 'isCompleted' : ''}`}>
          {content}
        </span>
      )}
    </>
  );
};

export default TodoItemInfo;
