import { globalStyle as globalStyleCommon } from 'erxes-common-ui';
import { injectGlobal } from 'styled-components';

const style = globalStyleCommon;

const globalStyle = [`${style}`] as any;

globalStyle.raw = [`${style}`];

injectGlobal(globalStyle);
