import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/api/auth';
import AuthForm from '@/components/form';
import { TOKEN_KEY } from '@/constants/auth';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useCredentials';
import { setToken } from '@/utils/token';

const SigninPage = () => {
  const { credentials, handleCredentials } = useCredentials();
  const navigate = useNavigate();

  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postSignin(credentials)
      .then(({ data }) => {
        setToken(TOKEN_KEY, data.access_token);
        navigate(PATH.TODO, { replace: true });
      })
      .catch(console.error);
  };

  return (
    <AuthForm
      title="로그인"
      email={credentials.email}
      password={credentials.password}
      handleInput={handleCredentials}
      onSubmit={handleSignin}
      testId="signin-button"
    />
  );
};

export default SigninPage;
