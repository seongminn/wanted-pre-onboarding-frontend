import { HTMLAttributes } from 'react';

import Icons, { IconNames } from './Icons';

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  iconName: IconNames;
  hasCursor?: boolean;
  size?: string;
  color?: string;
  className?: string;
}
const Icon = (props: IconProps) => {
  const { iconName, hasCursor = true, size = '20', color, ...rest } = props;

  const IconComponent = Icons[iconName];

  const wrapperStyle = {
    color: `${color}`,
    width: `${size}px`,
    height: `${size}px`,
    cursor: `${hasCursor && 'pointer'}`,

    fill: `${color ? 'currentColor' : ''}`,
  };

  return (
    <div style={wrapperStyle} {...rest}>
      <IconComponent />
    </div>
  );
};

export default Icon;
