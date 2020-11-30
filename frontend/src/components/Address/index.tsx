import React, { memo } from 'react';

interface AddressProps {
  address: any;
}

const Address: React.FC<AddressProps> = ({address}) => {
  return (
    <p>{address.street}, {address.neighborhood}, {address.city} - {address.state}</p>
  )
}

export default memo(Address);
