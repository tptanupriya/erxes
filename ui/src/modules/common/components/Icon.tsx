import { Icon as CommonIcon } from 'erxes-common-ui';
import React from 'react';

type Props = {
  icon: string;
  size?: number;
  style?: any;
  color?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

function Icon(props: Props) {
  const onClick = (e) => {
    if (!props.onClick) {
      return;
    }
    return props.onClick(e);
  }

  return (
    <CommonIcon
      {...props}
      onClick={onClick}
    />
  );
}

export default Icon;
