import React from 'react';
import { FormattedMessage } from 'react-intl';
// import Link from 'react-router-dom';
// import Image from 'react-native';

// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';
import SearchBar from './SearchBar'

function Header() {
  return (
    <div>
      <NavBar>
        

        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>

        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>

        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>

        <SearchBar/>

        {/* <SearchBar/> */}
      </NavBar>
    </div>
  );
}

export default Header;
