/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectGameTitle = () =>
  createSelector(
    selectHome,
    homeState => homeState.gameTitle,
  );

export { selectHome, makeSelectGameTitle };
