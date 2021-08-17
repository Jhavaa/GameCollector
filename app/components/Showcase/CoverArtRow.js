import styled from 'styled-components';

const CoverArtRow = styled.div`
  object-fit: contain;
  width: 100%;
  /* max-height: 100px; */
  display: inline-flex;
  padding: 20px;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default CoverArtRow;
