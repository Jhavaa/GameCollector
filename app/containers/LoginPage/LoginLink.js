import styled from 'styled-components';

const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: #e6e6e6;
  }
`;

export default SignUpLink;