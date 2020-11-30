import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  /* border-bottom: solid 1px  #C4C4C4; */
  align-items: center;
  padding: 0;
  justify-content: space-between;
  top: 0;
  background: #000;
  position: fixed;
  z-index: 100000;

  @media (max-width: 450px) {
    bottom: 0;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  width: auto;
  height: 100%;
`;


export const ButtonNav = styled.button`
  display: flex;
  width: 3rem;
  height: 100%;
  background: transparent;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    stroke: #FFF;
    /* fill: #FFF; */
  }
`;

export const Search = styled.div``;

export const Favorites = styled.button``;

export const ButtonBack = styled.button`
  display: flex;
  width: 3rem;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 1rem;
    stroke: #FFF;
    fill: #FFF;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
  }

  @media (max-width: 450px) {
    p {
      display: none;
    }
  }
`;