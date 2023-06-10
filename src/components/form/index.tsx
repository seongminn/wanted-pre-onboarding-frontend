import { ChangeEvent, FormEvent } from 'react';

import { AuthValidator } from '@/utils/validator';

interface AuthFormProps {
  title: string;
  email: string;
  password: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  testId: string;
}

const AuthForm = (props: AuthFormProps) => {
  const { title, email, password, handleInput, onSubmit, testId } = props;

  const { isValidateEmail, isValidatePassword } = AuthValidator(email, password);

  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={handleInput}
        data-testid="email-input"
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handleInput}
        data-testid="password-input"
      />
      <button data-testid={testId} disabled={!isValidateEmail || !isValidatePassword}>
        제출
      </button>
    </form>
  );
};

export default AuthForm;
