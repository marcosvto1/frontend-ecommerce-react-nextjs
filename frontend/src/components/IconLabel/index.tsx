import { Address } from '@/styles/pages/Cart/styles';
import React, { memo } from 'react';

interface IconLabelProps {
  icon: any;
  label: any;
}

const IconLabel: React.FC<IconLabelProps> = ({icon, label}) => {
  return (
    <Address>
      {icon}
      {label}
    </Address>
  )
}

export default memo(IconLabel);
