import { Label as CommonLabel } from 'erxes-common-ui';
import { __ } from 'modules/common/utils';
import React from 'react';

type Props = {
  lblStyle?: string;
  lblColor?: string;
  children: React.ReactNode | string;
  className?: string;
  shake?: boolean;
  ignoreTrans?: boolean;
};

class Label extends React.Component<Props> {
  render() {
    const {
      ignoreTrans,
      children,
    } = this.props;

    let content;

    if (ignoreTrans) {
      content = children;
    } else if (typeof children === 'string') {
      content = __(children);
    }
    return <CommonLabel {...this.props}>{content}</CommonLabel>
  }
}

export default Label;
