import styled from 'styled-components';

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 300;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 8px;
  font-size: 14px;
  height: 40px;
  font-weight: 500;
  padding-left: 0.8rem;
  width: -webkit-fill-available;
  box-sizing: border-box;
  color: #333333;
  margin-top: 0.3rem;
  &:focus {
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 2px 1px #c9c9c9;
    outline: none;
  }
`;