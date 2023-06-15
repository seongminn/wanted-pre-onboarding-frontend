import './style.scss';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'error' | 'default';
  border?: 'left' | 'right';
}

const Button = (props: ButtonProps) => {
  const { size = 'small', color = 'primary', border = '', children, ...rest } = props;

  return (
    <button className={`${size} ${color} ${border} custom-button`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
