import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/api/auth';
import { instance } from '@/api/instance';
import AuthForm from '@/components/auth/Form';
import { TOKEN_KEY } from '@/constants/auth';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useInput';
import { CredentialType, credentialValue } from '@/types/auth';
import { setToken } from '@/utils/token';

const SigninPage = () => {
  const { value: credentials, handleValue: handleCredentials } =
    useCredentials<CredentialType>(credentialValue);
  const navigate = useNavigate();

  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postSignin(credentials)
      .then(({ data }) => {
        setToken(TOKEN_KEY, data.access_token);
        instance.defaults.headers['Authorization'] = `Bearer ${data.access_token}`;

        navigate(PATH.TODO, { replace: true });
      })
      .catch(console.error);
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="로그인"
        email={credentials.email}
        password={credentials.password}
        handleInput={handleCredentials}
        onSubmit={handleSignin}
        testId="signin-button"
      />
    </section>
  );
};

export default SigninPage;
