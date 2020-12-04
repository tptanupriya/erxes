import { AnimatedLoader as CommonAnimatedLoader } from 'erxes-common-ui';
import { IAnimatedLoader } from 'modules/common/types';
import React from 'react';

type Props = {
  loaderStyle?: IAnimatedLoader;
};

class AnimatedLoader extends React.Component<Props> {
  render() {
    return <CommonAnimatedLoader {...this.props}/>
  }
}

export default AnimatedLoader;
