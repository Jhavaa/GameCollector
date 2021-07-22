import styled from 'styled-components';

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  border-radius: 20em;
  border: none;
  background-color: ${({ theme }) => theme.input};
  margin: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 10em;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export default Input;