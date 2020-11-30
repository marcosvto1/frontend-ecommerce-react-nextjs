
import SEO from '@/components/SEO';
import api from '@/services/api';
import { Title } from '@/styles/pages/Catalog/Products/Product';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

interface HomeProps{
  products: any[],
}

// server-side rendering => aparece nos motores de busca
export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await api.get('/products');
  const products = response.data;

  return {
    props: {
      products: products,
    }
  }
}

export default function Home({ products }: HomeProps) {
  //client side feching => não aparece nos motores de busca

  // const [products, setproducts] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('http://localhost:3333/recommended').then(response => {
  //     response.json().then(data => setproducts(data))
  //   })
  // }, [])

  return (
    <div>
      <SEO title="Produtos" />
      <Title>Products</Title>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
            <Link href={`/catalog/products/${product.id}`}>
              <a>
                {product.name}
              </a>
            </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
