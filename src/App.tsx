import React from 'react';
import 'reset-css/reset.css';
import './global.css';

import UserSearch from './components/UserSearch';
import FollowerList from './components/FollowerList/FollowerList';

import SApp from './styles/App';

function App() {
  return (
    <SApp>
      <div className="App">
        <UserSearch />
        <FollowerList searchUserName="" />
      </div>
    </SApp>
  );
}

export default App;
