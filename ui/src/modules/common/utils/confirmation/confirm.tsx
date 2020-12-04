import { confirm as CommonConfirm } from 'erxes-common-ui';

export default function (confirmation?: string, options?: {}) {
  return CommonConfirm(confirmation, options || {});
}
