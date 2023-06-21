import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignin } from '@/api/auth';
import { instance } from '@/api/instance';
import AuthForm from '@/components/auth/Form';
import { TOKEN_KEY } from '@/constants/auth';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/message';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { CredentialType, credentialValue } from '@/types/auth';
import { setToken } from '@/utils/token';

const SigninPage = () => {
  const { value: credentials, handleValue: handleCredentials } =
    useCredentials<CredentialType>(credentialValue);
  const navigate = useNavigate();
  const { openToast } = useToast();

  const handleSignin = () => {
    postSignin(credentials)
      .then(({ data }) => {
        setToken(TOKEN_KEY, data.access_token);
        instance.defaults.headers['Authorization'] = `Bearer ${data.access_token}`;

        openToast(SUCCESS_MESSAGE.signin, 'success');
        navigate(PATH.TODO, { replace: true });
      })
      .catch(() => openToast(ERROR_MESSAGE.signin, 'error'));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSignin();
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="로그인"
        email={credentials.email}
        password={credentials.password}
        handleInput={handleCredentials}
        onSubmit={onSubmit}
        testId="signin-button"
      />
    </section>
  );
};

export default SigninPage;
