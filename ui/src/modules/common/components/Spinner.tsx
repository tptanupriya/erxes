import { Spinner as CommonSpinner } from 'erxes-ui-utils';
import { rotate } from 'modules/common/utils/animations';
import React from 'react';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';
import { colors } from '../styles';

type Props = {
  objective?: boolean;
  size?: number;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
};

export const MainLoader = styledTS<Props>(styled.div)`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-left: -${props => props.size}px;
  margin-top: -${props => props.size && props.size / 2}px;
  animation: ${rotate} 0.75s linear infinite;
  border: 2px solid ${colors.borderDarker};
  border-top-color: ${colors.colorSecondary};
  border-right-color: ${colors.colorSecondary};
  border-radius: 100%;
`;

function Spinner(props: Props) {
  return (
    <CommonSpinner {...props} />
  );
}

export default Spinner;
