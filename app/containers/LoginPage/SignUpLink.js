import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: #e6e6e6;
  }
`;

export default SignUpLink;
