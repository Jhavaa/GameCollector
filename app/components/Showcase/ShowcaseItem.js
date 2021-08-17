import styled from 'styled-components';

const ShowcaseItem = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 150px;
  max-height: 200px;
  /* display: inline-flex; */
  margin-right: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
export default ShowcaseItem;
