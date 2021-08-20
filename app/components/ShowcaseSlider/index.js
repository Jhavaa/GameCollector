/**
 *
 * ShowcaseSlider
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import request from 'utils/request';
import LoadingIndicator from 'components/LoadingIndicator';
// import ShowcaseItem from './ShowcaseItem';
import Slider from './Slider';
import LeftArrowDiv from './LeftArrowDiv';
import LeftArrow from './LeftArrow';
import DraggableRow from './DraggableRow';
import Track from './Track';
import RightArrowDiv from './RightArrowDiv';
import RightArrow from './RightArrow';
import SliderItem from './SliderItem';
import GameCard from './GameCard';
import GameCover from './GameCover';
import CoverArt from './CoverArt';

function ShowcaseSlider({ title, fetchUrl, options }) {
  // const[isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [distance, setDistance] = useState(0);

  const [gameList, setGameList] = useState([]);
  const [combinedList, setCombinedList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const coverList = [];
      const resultList = [];
      const reqGame = await request(`${fetchUrl}games`, options);
      // console.log(reqGame)
      setGameList(reqGame);

      for (const game of reqGame) {
        const reqCovers = await request(`${fetchUrl}covers`, {
          method: 'post',
          headers: {
            'Client-ID': '6llto5s67z1ag9f3p4gmbfchrph4jo',
            Authorization: 'Bearer l00lzsmqfzgr8o3g45qcr51sdnuudk',
          },
          body: `fields url; where id = ${game.cover};`,
        });
        coverList.push(reqCovers[0]);
      }

      // console.log(coverList);
      // setCoverURLs(coverList)

      let obj = {};
      for (let i = 0; i < reqGame.length; i += 1) {
        obj = {};
        obj[reqGame[i].name] = coverList[i].url.replace(
          't_thumb',
          't_cover_big',
        );
        resultList.push(obj);
      }
      // console.log(resultList)
      setCombinedList(resultList);
      return resultList;
    }
    fetchData();
  }, [fetchUrl, options]);

  let content = gameList.map(game => (
    <LoadingIndicator key={`item-${game.id}`} />
  ));
  if (combinedList[0] !== undefined || combinedList.length > 0) {
    content = gameList.map((game, index) => (
      <SliderItem key={`item-${game.id}`}>
        <GameCard>
          <GameCover>
            <CoverArt src={combinedList[index][game.name]} alt={game.name} />
          </GameCover>
        </GameCard>
      </SliderItem>
    ));
  }

  const listRef = useRef();

  // This doesn't work when resizing the window!!
  const handleClick = direction => {
    // setIsMoved(true);
    const dist =
      listRef.current.getBoundingClientRect().x -
      document.getElementById('app-wrapper').offsetLeft;
    if (dist !== distance) {
      // console.log(distance);
      return;
    }
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      setDistance(dist + 225);
      listRef.current.style.transform = `translate3d(${225 +
        dist}px, 0px, 0px)`;
    }
    if (direction === 'right' && slideNumber < 15) {
      setSlideNumber(slideNumber + 1);
      setDistance(dist - 225);
      listRef.current.style.transform = `translate3d(${-225 +
        dist}px, 0px, 0px)`;
    }

    // console.log(dist);
  };

  return (
    <Slider>
      <h2>{title}</h2>

      {/* <ArrowLeftOutlinedIcon style="display: flex;" onClick={() => handleClick('left')}/> */}
      <DraggableRow>
        <LeftArrowDiv onClick={() => handleClick('left')}>
          <LeftArrow onClick={() => handleClick('left')} />
        </LeftArrowDiv>
        <Track ref={listRef}>{content}</Track>
        <RightArrowDiv onClick={() => handleClick('right')}>
          <RightArrow onClick={() => handleClick('right')} />
        </RightArrowDiv>
      </DraggableRow>
      {/* <ArrowRightOutlinedIcon onClick={() => handleClick('right')}/> */}
    </Slider>
  );
}

ShowcaseSlider.propTypes = {
  title: PropTypes.string,
  fetchUrl: PropTypes.string,
  options: PropTypes.any,
};

export default ShowcaseSlider;
