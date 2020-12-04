import { Textarea as CommonTextArea } from 'erxes-common-ui'
import React from 'react';

type Props = {
  onChange?: (e: React.FormEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  maxHeight?: number;
};

class Textarea extends React.Component<Props> {
  render() {
    return (
      <CommonTextArea {...this.props} />
    );
  }
}

export default Textarea;
