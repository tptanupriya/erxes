import { Tags as CommonTags } from 'erxes-ui-utils';
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
