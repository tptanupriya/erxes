import { Button as CommonButton, ButtonGroup as CommonButtonGroup } from 'erxes-ui-utils'
import { __ } from 'modules/common/utils';
import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  type?: string;
  btnStyle?: string;
  size?: string;
  disabled?: boolean;
  ignoreTrans?: boolean;
  block?: boolean;
  icon?: string;
  style?: any;
  id?: string;
  uppercase?: boolean;
  target?: string;
  group?: boolean;
};

class Button extends React.Component<ButtonProps> {
  static Group = Group;

  onClick = (e) => {
    if (!this.props.onClick) {
      return;
    }
    return this.props.onClick(e);
  }

  onMouseDown = (e) => {
    if (!this.props.onMouseDown) {
      return;
    }
    return this.props.onMouseDown(e);
  }

  render() {
    return (<CommonButton
      {...this.props}
      onClick={this.onClick}
      onMouseDown={this.onMouseDown}
    >
      {typeof (this.props.children) === 'string' ? __(this.props.children) : this.props.children}
    </CommonButton>)
  }
}

function Group({
  children,
  hasGap = true
}: {
  children: React.ReactNode;
  hasGap?: boolean;
}) {
  return <CommonButtonGroup hasGap={hasGap}>{children}</CommonButtonGroup>;
}

export default Button