import '../style.scss';

import { ChangeEvent } from 'react';

interface TodoInfoProps {
  isEdit: boolean;
  content: string;
  handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoInfo = (props: TodoInfoProps) => {
  const { isEdit, content: content, handleValue } = props;

  return (
    <>
      {isEdit ? (
        // eslint-disable-next-line jsx-a11y/no-autofocus
        <input autoFocus id="todo" defaultValue={content} onChange={handleValue} />
      ) : (
        <span className="todo-list__item-name">{content}</span>
      )}
    </>
  );
};

export default TodoInfo;
