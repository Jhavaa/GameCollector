import React from 'react';
import PropTypes from 'prop-types';

// import request from 'utils/request';
// import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.id}`} item={item} />
    ));
    // console.log(content)
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return <Wrapper>{content}</Wrapper>;
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
