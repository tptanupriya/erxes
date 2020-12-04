import { ActionButtons as ActionButton } from 'erxes-ui-utils'
import React from 'react';

function ActionButtons({ children }: { children: React.ReactNode }) {
  return <ActionButton>aa{children}</ActionButton>;
}

export default ActionButtons;
