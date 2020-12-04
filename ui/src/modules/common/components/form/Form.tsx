import { Form as CommonForm } from 'erxes-common-ui'
import { IFormProps } from 'modules/common/types';
import React from 'react';
import { __ } from '../../utils';

type Props = {
  renderContent: (props: IFormProps) => React.ReactNode;
  onSubmit?: (values: any) => any;
  autoComplete?: string;
};

type State = {
  errors: any;
  values: any;
  isSubmitted: boolean;
};

class Form extends React.Component<Props, State> {
  translateError = () => {
    const errors = this.state.errors;
    errors.forEach(error => {
      error = __(error);
    });
    this.setState({ errors })
  }

  render() {
    this.translateError();
    return (
      <CommonForm {...this.props} />
    );
  }
}

export default Form;
