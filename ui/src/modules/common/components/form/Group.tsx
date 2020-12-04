import { FormGroup as CommonFormGroup } from 'erxes-common-ui'
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
