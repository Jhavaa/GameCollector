import styled from 'styled-components';

export default styled.div`
  text-align: right;
  padding: 2px;
  border: 1px solid grey;
  text-color: ${({ theme }) => theme.text};
`;
