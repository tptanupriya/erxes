import { Tags as CommonTags } from 'erxes-common-ui';
import React from 'react';
import { ITag } from '../../tags/types';

type Props = {
  tags: ITag[];
  size?: string;
  limit?: number;
};

function Tags(props: Props) {
  return (
    <CommonTags {...props} />
  )
}

export default Tags;
