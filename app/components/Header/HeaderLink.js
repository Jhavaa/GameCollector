import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  text-align: right;
  display: inline-flex;
  padding-right: 7px;
  padding-left: 7px;
  //margin: 1em;
  text-decoration: none;
  //border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  //border: 2px solid #41addd;
  color: ${({ theme }) => theme.text};

  &:active {
    background: #41addd;
    color: #fff;
  }

  &:hover {
    //color: #123123;
  }
`;
