import Link from 'next/link';
import React, { memo } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { ButtonBack, ButtonNav, ButtonsContent, Container } from './styles';

interface HeaderProps {
  // title: string;
  isHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({isHome = false}) => {
  const history = useHistory();
  
  function goBack() {
    window.history.back();
  }
  return (
    <Container>
        {!isHome && (
          <ButtonBack onClick={() => goBack()}>
            <IoIosArrowBack size={20}/>
            <p>Voltar</p>
          </ButtonBack>
        )}
        <ButtonsContent>
          <Link href="/favorites">
          <ButtonNav>
            <FiHeart size={20}/>
          </ButtonNav>
          </Link>
          <Link href="/cart">
          <ButtonNav>
            <FiShoppingCart size={20}/>
          </ButtonNav>
          </Link>
          {/* <ButtonNav>
            <FiUser size={20}/>
          </ButtonNav> */}
        </ButtonsContent>
    </Container>
  )
}

export default memo(Header)
