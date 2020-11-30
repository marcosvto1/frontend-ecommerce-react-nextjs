import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;
  padding: 0.3rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: calc(100% - 2rem);
  height: auto;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: row;
  }

`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  span {
    font-size: 1rem;
  }
  & div {
    margin: 0.3rem  0 !important;
  }
`;
export const Total = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-size: 0.8rem;
    color: #a0a0a0;
  }
  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Address = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;

    p {
      margin-left: 0.5rem;
      font-size: 0.7rem;
    }

    button {
      background: transparent;
      border: none;
      position: absolute;
      right: 1.5rem;
    }

    span {
      font-size: 1.2rem;
    }
`;
