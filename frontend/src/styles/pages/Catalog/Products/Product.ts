import styled from 'styled-components';

export const Title = styled.h1`
  color: #8257e5;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 3rem !important;

  img {
      width: 450px;
      height: 450px;
      margin: 3rem 0;
      border-radius: 8px;
    }

  @media (max-width: 1080px) {

  }

  @media (max-width: 720px) {

  }

  @media (max-width: 450px) {
    flex-direction: column;
    width: 100%;

    img {
      margin: 0;
      border-radius: 0;
      width: 100%;
      height: auto;
    }

  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 24px;
  background: #FFF;
  padding: 3rem ;



    h2 {
      font-size: 2.5rem;
      font-weight: 300;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }

    span {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 400;
    }

  @media (max-width: 450px) {
    margin-top: -2rem;
    flex-direction: column;
    width: 100%;
    padding: 0;
    /* margin: 1rem; */

    section {
      padding: 1rem;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 300;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }

    span {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

export const Quantity = styled.div`
  @media (max-width: 450px) {
  margin: 1rem;
  p {
      font-size: 1rem;
      font-weight: 300;
    }

    span {
      margin-top: 0.5rem;
      font-size: 2rem;
      font-weight: 300;
    }
  }
`;

export const Delivery = styled.div`
  margin: 1rem 0;

  p {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
  margin: 1rem;
  }
`;

export const Address = styled.div`
  @media (max-width: 450px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.8rem 0;

  p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }
  }
`;

export const Info = styled.div``;

export const Error = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.5rem;
    color: #cc0000;
    font-size: 0.8rem;
    svg {
      margin-right: 0.3rem;
    }
`;
