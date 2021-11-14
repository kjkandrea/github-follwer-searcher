import React from 'react';
import 'reset-css/reset.css';
import './global.css';

import UserSearch from './components/UserSearch';

import SApp from './styles/App';

function App() {
  return (
    <SApp>
      <div className="App">
        <UserSearch />
      </div>
    </SApp>
  );
}

export default App;
