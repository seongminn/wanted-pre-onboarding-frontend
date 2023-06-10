import { ChangeEvent, useCallback, useState } from 'react';

const useCredentials = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleCredentials = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [e.target.id]: e.target.value });
    },
    [credentials],
  );

  return { credentials, setCredentials, handleCredentials };
};

export default useCredentials;
