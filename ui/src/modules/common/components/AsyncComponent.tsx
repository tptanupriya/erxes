import { AsyncComponent } from 'erxes-common-ui'
import { IAnimatedLoader } from '../types';

export default function asyncComponent(
  importComponent: any,
  loaderStyle?: IAnimatedLoader
) {
  return AsyncComponent(importComponent, loaderStyle);
}
