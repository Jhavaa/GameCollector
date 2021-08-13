/**
 *
 * Showcase
 *
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import request from 'utils/request';
// import List from 'components/List';
// import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
// import ShowcaseListItem from 'containers/ShowcaseListItem';

function Showcase({ title, fetchUrl, options }) {
  // const [coverURLs, setCoverURLs] = useState([])
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

      // console.log(coverList)
      // setCoverURLs(coverList)

      let obj = {};
      for (let i = 0; i < reqGame.length; i += 1) {
        obj = {};
        obj[reqGame[i].name] = coverList[i].url;
        resultList.push(obj);
      }
      // console.log(resultList)
      setCombinedList(resultList);
      return resultList;
    }
    fetchData();
  }, [fetchUrl, options]);

  let content = gameList.map(game => (
    // <img alt={game.name} key={`item-${game.id}`}/>
    <LoadingIndicator key={`item-${game.id}`} />
  ));
  if (combinedList[0] !== undefined || combinedList.length > 0) {
    content = gameList.map((game, index) => (
      <img
        src={combinedList[index][game.name]}
        alt={game.name}
        key={`item-${game.id}`}
      />
    ));
  }

  return (
    <div className="showcase">
      <h2>{title}</h2>

      <div className="row__coverart">{content}</div>
    </div>
  );
}

Showcase.propTypes = {
  title: PropTypes.string,
  fetchUrl: PropTypes.string,
  options: PropTypes.any,
};

export default Showcase;
