import BasicInfoSection from 'modules/customers/components/common/BasicInfoSection';
import CustomFieldsSection from 'modules/customers/containers/common/CustomFieldsSection';
import Sidebar from 'modules/layout/components/Sidebar';
import React from 'react';

import { ICustomer } from 'modules/customers/types';
import {
  DevicePropertiesSection,
  TaggerSection,
  TrackedDataSection
} from '../common';
import WebsiteActivity from '../common/WebsiteActivity';

type Props = {
  customer: ICustomer;
  taggerRefetchQueries?: any[];
  wide?: boolean;
  plugins?
};

export default class LeftSidebar extends React.Component<Props> {
  render() {
    const { plugins } = this.props;

    const pluginSections: any = [];

    for (const plugin of plugins || []) {
      const pLeftSidebar = plugin.customerLeftSidebar;

      if (pLeftSidebar) {
        pluginSections.push(
          pLeftSidebar
        )
      }
    }

    const { customer, wide, taggerRefetchQueries } = this.props;
    return (
      <Sidebar wide={wide}>
        <BasicInfoSection customer={customer} />
        <CustomFieldsSection customer={customer} />

        { pluginSections }

        <DevicePropertiesSection customer={customer} />
        <TrackedDataSection customer={customer} />
        <WebsiteActivity urlVisits={customer.urlVisits || []} />
        <TaggerSection
          data={customer}
          type="customer"
          refetchQueries={taggerRefetchQueries}
        />
      </Sidebar>
    );
  }
}
