import { ProgressBar as CommonProgressBar } from 'erxes-common-ui';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  close?: React.ReactNode;
  percentage: number;
  color?: string;
  height?: string;
};

function ProgressBar(props: Props) {
  return (
    <CommonProgressBar {...props}>
      {props.children}
    </CommonProgressBar>
  );
}

export default ProgressBar;
