import styled from 'styled-components';

const GameCard = styled.div`
  display: block;
  position: relative;
  overflow: hidden;

  padding-top: 10px;
  padding-bottom: 10px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
export default GameCard;
