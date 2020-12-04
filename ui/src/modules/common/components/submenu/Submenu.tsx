import { SubMenu } from 'erxes-ui-utils';
import { ISubMenuItem } from 'modules/common/types';
import { __ } from 'modules/common/utils';
import React from 'react';


function Submenu({
  items,
  additionalMenuItem
}: {
  items?: ISubMenuItem[];
  additionalMenuItem?: React.ReactNode;
}) {
  const translate = (title) => {
    return __(title);
  }

  return <SubMenu
    items={items}
    additionalMenuItem={additionalMenuItem}
    translator={translate}
  />
}

export default Submenu;
