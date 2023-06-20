import './style.scss';

import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import Icon from '../Icon';

type ToastContextType = {
  openToast: (text: string, state: ToastStateType) => void;
};

type ToastStateType = 'success' | 'error';

interface ToastType {
  text: string;
  state: ToastStateType;
}

export const ToastContext = createContext<ToastContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openToast: () => {},
});

const Toast = ({ toast, open }: { toast: ToastType; open: boolean }) => {
  if (!open) return null;

  return (
    <div className={`toast ${open ? 'open' : ''}`}>
      <Icon iconName={toast.state} />
      {toast.text}
    </div>
  );
};
const ToastProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [timer, setTimer] = useState<null | NodeJS.Timeout>(null);
  const [toast, setToast] = useState<ToastType>({
    text: '',
    state: 'success',
  });

  const openToast = (text: string, state: ToastStateType) => {
    setToast({
      text,
      state,
    });
  };

  useEffect(() => {
    if (toast.text === '' || timer) return;

    const newTimer = setTimeout(() => {
      setTimer(null);
      setToast({ text: '', state: 'success' });
    }, 2500);

    setTimer(newTimer);
  }, [toast, timer]);

  const isOpen = timer !== null;

  return (
    <ToastContext.Provider value={{ openToast }}>
      {children}
      <Toast toast={toast} open={isOpen} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
