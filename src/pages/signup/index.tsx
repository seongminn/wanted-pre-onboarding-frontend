import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignup } from '@/api/auth';
import AuthForm from '@/components/auth/Form';
import { PATH } from '@/constants/path';
import useCredentials from '@/hooks/useInput';
import { CredentialType, credentialValue } from '@/types/auth';

const SignupPage = () => {
  const { value: credentials, handleValue: handleCredentials } =
    useCredentials<CredentialType>(credentialValue);
  const navigate = useNavigate();

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postSignup(credentials)
      .then(() => navigate(PATH.SIGNIN))
      .catch(console.error);
  };

  return (
    <section className="inner-wrapper">
      <AuthForm
        title="회원가입"
        email={credentials.email}
        password={credentials.password}
        handleInput={handleCredentials}
        onSubmit={handleSignup}
        testId="signup-button"
      />
    </section>
  );
};

export default SignupPage;
