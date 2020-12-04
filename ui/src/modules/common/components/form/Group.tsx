import { FormGroup as CommonFormGroup } from 'erxes-ui-utils'
import React from 'react';

function FormGroup({
  children,
  horizontal
}: {
  children: React.ReactNode;
  horizontal?: boolean;
}) {
  return <CommonFormGroup horizontal={horizontal}>{children}</CommonFormGroup>;
}

export default FormGroup;
