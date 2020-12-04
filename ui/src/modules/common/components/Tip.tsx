import { Tip as CommonTip } from 'erxes-common-ui'
import React from 'react';

type Props = {
  text?: string | React.ReactNode;
  children: React.ReactNode;
  placement?:
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';
};

function Tip({ text, children, placement }: Props) {
  return (
    <CommonTip text={text} placement={placement}>children</CommonTip>
  )
}

export default Tip;
