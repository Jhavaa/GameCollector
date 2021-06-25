/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentSearch } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
// import IssueIcon from './IssueIcon';
// import IssueLink from './IssueLink';
// import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export function RepoListItem(props) {
  /*
      I used this console.log command to keep track of what kind of objects we are
      recieving. You can uncomment it if you wanna see how the objects look in the
      console.
  */
  // console.log(props);
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Wrapper>
      {/* <RepoLink href={item.html_url} target="_blank">
        {nameprefix + item.name}
      </RepoLink>
      <IssueLink href={`${item.html_url}/issues`} target="_blank">
        <IssueIcon />
        <FormattedNumber value={item.open_issues_count} />
      </IssueLink> */}
      <p>{item.name} </p>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentSearch: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentSearch: makeSelectCurrentSearch(),
  }),
)(RepoListItem);
