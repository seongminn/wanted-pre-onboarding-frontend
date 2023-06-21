import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/api/auth';
import AuthForm from '@/components/auth/Form';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants/message';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useInput';
import useToast from '@/hooks/useToast';
import { CredentialType, credentialValue } from '@/types/auth';

const SignupPage = () => {
  const { value: credentials, handleValue: handleCredentials } =
    useCredentials<CredentialType>(credentialValue);
  const navigate = useNavigate();
  const { openToast } = useToast();

  const handleSignup = () => {
    postSignup(credentials)
      .then(() => {
        openToast(SUCCESS_MESSAGE.signup, 'success');
        navigate(PATH.SIGNIN);
      })
      .catch(() => openToast(ERROR_MESSAGE.signup, 'error'));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSignup();
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="회원가입"
        email={credentials.email}
        password={credentials.password}
        handleInput={handleCredentials}
        onSubmit={onSubmit}
        testId="signup-button"
      />
    </section>
  );
};

export default SignupPage;
