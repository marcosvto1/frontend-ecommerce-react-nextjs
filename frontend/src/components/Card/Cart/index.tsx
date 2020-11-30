import IconLabel from '@/components/IconLabel';
import Increment from '@/components/Increment';
import { ThumbnailSmall } from '@/styles/genericStyles';
import { Card, Info } from '@/styles/pages/Cart/styles';
import React, { useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

function CardCart({ name, img, price, value, totalProduct, setTotalProduct }) {
  const [quantity, setQuantity] = useState(parseInt(value));

  useEffect(() => {
    setTotalProduct((price * quantity))
  }, [quantity])

  return (
    <Card>
      <Increment quantity={quantity} setQuantity={setQuantity}/>
      <section>
        <ThumbnailSmall src={img} alt="" />
        <Info>
          <span>{(name)}</span>
          <IconLabel icon={<FiCalendar size={15} />} label={<p>Chegará em </p>} />
          <div>
            <span>
              R$ {quantity * price}
            </span>
          </div>
        </Info>
      </section>
    </Card>
  )
}

export default CardCart
