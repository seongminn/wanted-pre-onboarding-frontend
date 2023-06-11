import { ChangeEvent, useCallback, useState } from 'react';

const useInput = <T>(initValue: T) => {
  const [value, setValue] = useState<T>(initValue);

  const handleValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [e.target.id]: e.target.value });
    },
    [value],
  );

  const resetValue = useCallback(() => {
    setValue(initValue);
  }, [initValue]);

  return { value, handleValue, resetValue };
};

export default useInput;
