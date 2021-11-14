import React from 'react';

import SUserSearch from '../styles/components/UserSearch';

const UserSearch = () => {
  return (
    <SUserSearch>
      <input id="username" placeholder="username" type="text" />
      <button type="submit">submit</button>
    </SUserSearch>
  );
};

export default UserSearch;
