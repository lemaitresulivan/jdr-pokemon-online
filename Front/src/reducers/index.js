import { combineReducers } from 'redux';

import dicesReducer from './dices';
import sidebarReducer from './sidebar';
import gridReducer from './grid';
import trainerReducer from './trainer';
import userReducer from './user';
import usersReducer from './users';
import pokemonReducer from './pokemon';
import logReducer from './log';
import attacksReducer from './attacks';

const rootReducer = combineReducers({
  dices: dicesReducer,
  sidebar: sidebarReducer,
  grid: gridReducer,
  trainer: trainerReducer,
  user: userReducer,
  users: usersReducer,
  pokemon: pokemonReducer,
  log: logReducer,
  attacks: attacksReducer,
  // ... autres reducers
});

export default rootReducer;
