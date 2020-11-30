import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
  button {
    display: flex;
    height: 1rem;
    width: 1rem;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: solid 1px #000;
    border-radius: 100px;
    padding: 0.5rem;
    color: #000;
    font-weight: 500;
    cursor: pointer;
  }
  input {
    background: transparent;
    border: none;
    padding: 0.4rem;
    font-size: 0.8rem;
    width: 1rem;
  }
`;
