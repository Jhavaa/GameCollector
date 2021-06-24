/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

// Imports for Theme Toggling
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/Themes';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

// const [theme, setTheme] = useState('light');
// const themeToggler = () => {
//   theme === 'light' ? setTheme('dark') : setTheme('light')
// }

export default function App() {
  const [theme, setTheme] = useState('light');
  const [textt, buttonText] = useState('Dark Mode')

  const themeToggler = () => {
    textt === 'Dark Mode' ? buttonText('Light Mode') : buttonText('Dark Mode')
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppWrapper>
        <button onClick={themeToggler}>{textt}</button>
        <Helmet titleTemplate="%s - GameCollectr" defaultTitle="GameCollectr">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  );
}
