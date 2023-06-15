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
        // eslint-disable-next-line jsx-a11y/no-autofocus
        <input autoFocus id="todo" defaultValue={content} onChange={handleValue} />
      ) : (
        <span className={`todo-list__item-name ${isCompleted ? 'isCompleted' : ''}`}>
          {content}
        </span>
      )}
    </>
  );
};

export default TodoItemInfo;
