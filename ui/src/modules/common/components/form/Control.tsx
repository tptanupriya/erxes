import React from 'react';
import { FormControl as CommonFormControl } from 'erxes-ui-utils'
// import injectSheet from "react-jss";
// import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  id?: string;
  onChange?: (e: React.FormEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  defaultValue?: any;
  value?: any;
  defaultChecked?: boolean;
  checked?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  options?: any[];
  required?: boolean;
  disabled?: boolean;
  round?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  onFocus?: (e: React.FormEvent<HTMLElement>) => void;
  componentClass?: string;
  min?: number;
  max?: number;
  rows?: number;
  inline?: boolean;
  className?: string;
  errors?: any;
  registerChild?: (child: any) => void;
  onBlur?: (e: React.FormEvent<HTMLElement>) => void;
  maxHeight?: number;
  maxLength?: number;
};

class FormControl extends React.Component<Props> {
  onClick = (e) => {
    if (!this.props.onClick) {
      return;
    }
    return this.props.onClick(e);
  }

  render() {
    const props = this.props;
    // injectSheet()(CommonFormControl);
    // const cfc = new CommonFormControl({ ...props, onClick: this.onClick });
    // const ret = cfc.render();
    // console.log('lllllllllllllllll', cfc.state, this.state);
    // return ret;
    // // return Bar;
    return (
      <CommonFormControl
        {...props}
        onClick={this.onClick}
      >
        {props.children}
      </CommonFormControl>
    )

  }

}

export default FormControl;
