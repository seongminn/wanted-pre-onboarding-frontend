import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/api/auth';
import AuthForm from '@/components/form';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useCredentials';

const SignupPage = () => {
  const { credentials, handleCredentials } = useCredentials();
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postSignup(credentials)
      .then(() => navigate(PATH.SIGNIN))
      .catch(console.error);
  };

  return (
    <AuthForm
      title="로그인"
      email={credentials.email}
      password={credentials.password}
      handleInput={handleCredentials}
      onSubmit={handleSignup}
      testId="signup-button"
    />
  );
};

export default SignupPage;
