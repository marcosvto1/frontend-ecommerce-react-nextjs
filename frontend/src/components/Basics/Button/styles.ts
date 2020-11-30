import styled from 'styled-components';

export const ButtonPrimary = styled.div`
  button {
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    background: #000;
    color: #FFF;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const ButtonSecundary = styled.div`
  button {
    display: flex;
    text-transform: uppercase;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: solid 1px #000;
    background: #FFF;
    color: #000;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    cursor: pointer;
  }
`;