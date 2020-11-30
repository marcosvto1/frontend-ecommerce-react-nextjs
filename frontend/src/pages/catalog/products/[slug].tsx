import Address from '@/components/Address';
import { ButtonPrimary, ButtonSecundary } from '@/components/Basics/Button/styles';
import { Input, Label } from '@/components/Basics/Input/styles';
import Select from '@/components/Basics/Select';
import CardCollapse from '@/components/CardCollapse';
import Header from '@/components/Header/index';
import IconLabel from '@/components/IconLabel';
import { useCart } from '@/context/Cart/CartContext';
import api from '@/services/api';
import { Container, Delivery, Description, Error, Info, Quantity } from '@/styles/pages/Catalog/Products/Product';
import cep from 'cep-promise';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiAlertCircle, FiMapPin, FiTruck } from 'react-icons/fi';

interface IProduct {
  id: number,
  description: string,
  name: string,
  price: number,
  slug: string,
  photoUrl: string,
  qtdStock: number,
  groupId: number,
  group: {
    id: number,
    name: string,
  }
}

interface ProductProps {
  product: IProduct
}

export default function Products({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  const [quantity, setQuantity] = useState(1);
  const [inputCep, setInputCep] = useState('');
  const [errorCep, setErrorCep] = useState('');
  const { setCart, address, setAddress} = useCart();

  const handleAddCart = () => {
    const data = {
      product: product,
      quantity: quantity,
      setQuantity: setQuantity,
    }
    setCart({ type: 'ADD', payload: data });
  }

  useEffect(() => {
    if (inputCep && inputCep.length === 8) {
      cep(inputCep)
      .then(response => setAddress(response))
      .catch(error => setErrorCep(error))
    }
  }, [inputCep])

  return (
    <>
    <Header />
    <Container>
      <img src={product.photoUrl} alt={product.slug}/>
      <Description>
        <section>
          <h2>{product.name}</h2>
          <span>R$ {product.price}</span>
        </section>
        <Info>
          <CardCollapse title="Mais Informações" body={product.description} expanded={true} />
        </Info>
        <Quantity>
          <Select
            label="Quantidade:"
            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Link href="/cart">
            <ButtonPrimary>
              <button type="button" onClick={() => handleAddCart()}>COMPRAR</button>
            </ButtonPrimary>
          </Link>
          <Link href="/cart">
            <ButtonSecundary>
              <button type="button" onClick={() => handleAddCart()}>Adicionar ao Carrinho</button>
            </ButtonSecundary>
          </Link>
        </Quantity>
        <Delivery>
          <Label>Calcular Frete (CEP):</Label>
          <Input
          value={inputCep}
          onChange={(e) => setInputCep(e.target.value)}
          type="number"
          />
          {address ? (
            <>
            <IconLabel icon={<FiMapPin size={15}/>} label={<Address address={address}/>}/>
            <IconLabel icon={<FiTruck size={15}/>} label={<p>Chegará {} por R$ {}</p>}/>
            </>
          ) :  (inputCep && inputCep.length === 8) ? (<Error> <FiAlertCircle size={15}/> CEP Inválido</Error>) : ''}
        </Delivery>
      </Description>
    </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const response = await api.get(`/products/${slug}`);
  const product = await response.data;
  return {
    props: {
      product,
    }
  }
}

