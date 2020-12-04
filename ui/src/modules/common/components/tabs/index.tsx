import { Tabs as MainTabs } from 'erxes-ui-utils'
import React from 'react';

function Tabs(props: {
  children: React.ReactNode;
  grayBorder?: boolean;
  full?: boolean;
}) {
  return < MainTabs.Tabs {...props} />
}

type TabTitleProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function TabTitle(props: TabTitleProps) {
  return <MainTabs.TabTitle {...props}/>;
}

export { Tabs, TabTitle };
