import React, { memo } from 'react';
import { Container } from './styles';

interface IncrementProps {
  // title: string;
  quantity: any;
  setQuantity: any;
  max?: number;
  min?: number;
}

const Increment: React.FC<IncrementProps> = ({ max = 100, min = 0, quantity, setQuantity }) => {

  function increment() {
    if ((quantity) < max) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container >
      <button type="button" onClick={() => increment()}>+</button>
      <input value={quantity} disabled/>
      <button type="button" onClick={() => decrement()}>-</button>
    </Container>
  );
}

export default memo(Increment)
