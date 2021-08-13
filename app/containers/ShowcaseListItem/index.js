/**
 *
 * ShowcaseListItem
 *
 * Lists the cover art for each showcase item
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export function ShowcaseListItem(props) {
  const { item } = props;
  const content = (
    <Wrapper>
      <p>{item.name}</p>
    </Wrapper>
  );

  return <ListItem item={content} />;
}

ShowcaseListItem.propTypes = {
  item: PropTypes.object,
};

export default ShowcaseListItem;
