import { Table as CommonTable } from 'erxes-ui-utils'
import React from 'react';

type Props = {
  children: React.ReactNode;
  striped?: boolean;
  bordered?: boolean;
  condensed?: boolean;
  hover?: boolean;
  responsive?: boolean;
  whiteSpace?: string;
  alignTop?: boolean;
};

class Table extends React.Component<Props> {
  render() {
    return <CommonTable {...this.props} />;
  }
}

export default Table;
