import './style.scss';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  border?: 'left' | 'right';
}

const Button = (props: ButtonProps) => {
  const { size = 'small', border = '', children, ...rest } = props;

  return (
    <button className={`${size} ${border} custom-button`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
