import { confirm as CommonConfirm } from 'erxes-ui-utils';

export default function (confirmation?: string, options?: {}) {
  return CommonConfirm(confirmation, options || {});
}
