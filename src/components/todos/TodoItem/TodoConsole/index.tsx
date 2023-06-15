import '../style.scss';

import Button from '@/components/common/Button';
import { UpdateTodoRequest } from '@/types/todo';

interface TodoConsoleProps {
  id: number;
  toggleEdit: () => void;
}

interface IsNotEditProps extends TodoConsoleProps {
  modifiedTodo: string;
  isCompleted: boolean;
  handleUpdateTodo: (id: number, body: UpdateTodoRequest, toggle?: boolean) => void;
}

interface IsEditProps extends TodoConsoleProps {
  handleDeleteTodo: (id: number) => void;
}

const TodoConsole = (props: IsEditProps) => {
  const { id, handleDeleteTodo, toggleEdit } = props;

  return (
    <div>
      <Button onClick={toggleEdit} data-testid="modify-button">
        수정
      </Button>
      <Button
        color="error"
        border="right"
        onClick={() => handleDeleteTodo(id)}
        data-testid="delete-button"
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoConsole;

TodoConsole.isEdit = function TodoConsole(props: IsNotEditProps) {
  const { id, modifiedTodo, isCompleted, toggleEdit, handleUpdateTodo } = props;

  return (
    <div>
      <Button onClick={() => handleUpdateTodo(id, { todo: modifiedTodo, isCompleted }, true)}>
        제출
      </Button>
      <Button color="default" border="right" onClick={toggleEdit}>
        취소
      </Button>
    </div>
  );
};
