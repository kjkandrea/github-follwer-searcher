import React from 'react';
import 'reset-css/reset.css';
import './global.css';

import UserSearch from './components/UserSearch';
import FollowerList from './components/FollowerList/FollowerList';

import SApp from './styles/App';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_USER_NAME = '';
const username$ = new BehaviorSubject(DEFAULT_USER_NAME);

username$.subscribe(console.log);

function App() {
  return (
    <SApp>
      <div className="App">
        <UserSearch usernameSubject={username$} />
        <FollowerList usernameSubject={username$} />
      </div>
    </SApp>
  );
}

export default App;
