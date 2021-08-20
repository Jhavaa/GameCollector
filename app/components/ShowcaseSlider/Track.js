import styled from 'styled-components';

const Track = styled.div`
  opacity: 1;
  width: 5625px;
  transform: translate3d(0px, 0px, 0px);
  transition: all 500ms ease;

  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); */
  /* transition: all 1s ease; */

  &::before {
    display: table;
    content: '';
  }
  &::after {
    display: table;
    content: '';
  }
`;
export default Track;
