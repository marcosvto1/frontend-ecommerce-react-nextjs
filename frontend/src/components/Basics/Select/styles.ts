import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  
  label {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0.3rem;
  }
  select {
    background: #ffffff;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    font-size: 14px;
    height: 40px;
    padding: 0 10px;
    font-weight: 500;
    width: 100%;
    color: #333333;
    /* -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none; */
    &:focus {
      border: none;
      border-radius: 4px;
      box-shadow: 0 0 2px 1px #c9c9c9;
      outline: none;
    }
    option {
      font-family: Roboto;
      font-weight: 500;
      font-size: 14px;
      color: #333333;
      width: 100%;
      border: 0px solid #000 !important;
      &:hover {
        background: yellow !important;
      }
    }
  }

`;