import { ActionButtons as ActionButton } from 'erxes-common-ui'
import React from 'react';

function ActionButtons({ children }: { children: React.ReactNode }) {
  return <ActionButton>aa{children}</ActionButton>;
}

export default ActionButtons;
