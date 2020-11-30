import React, { memo } from 'react';
import { Container } from './styles';

interface SelectProps {
  label: string;
  list: any[];
  value: any;
  onChange: any;
}

const Select: React.FC<SelectProps> = ({label, list, value, onChange }) => {

  return (
    <Container>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {list.map((item) => <option key={item.id} value={item}>{item}</option>)}
      </select>
    </Container>
  )
}

export default memo(Select)
