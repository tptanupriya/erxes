import { DateControl as CommonDateControl } from 'erxes-ui-utils'
import React from 'react';

type Props = {
  onChange?: (e: React.FormEvent<HTMLElement>) => void;
  defaultValue?: any;
  value?: any;
  placeholder?: string;
  name?: string;
  errors?: any;
  dateFormat?: string;
  required?: boolean;
  timeFormat?: boolean;
  registerChild?: (child: any) => void;
};

class DateControl extends React.Component<Props> {
  render() {
    return (
      <CommonDateControl {...this.props}> </CommonDateControl>
    );
  }
}

export default DateControl;
