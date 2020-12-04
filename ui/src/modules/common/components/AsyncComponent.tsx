import { AsyncComponent } from 'erxes-ui-utils'
import { IAnimatedLoader } from '../types';

export default function asyncComponent(
  importComponent: any,
  loaderStyle?: IAnimatedLoader
) {
  return AsyncComponent(importComponent, loaderStyle);
}
