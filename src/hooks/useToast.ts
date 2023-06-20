import { useContext } from 'react';

import { ToastContext } from '@/components/common/Toast';

const useToast = () => {
  const { openToast } = useContext(ToastContext);

  return {
    openToast,
  };
};

export default useToast;
