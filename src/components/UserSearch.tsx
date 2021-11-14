import React, { useState } from 'react';

import SUserSearch from '../styles/components/UserSearch';
import { BehaviorSubject } from 'rxjs';

interface UserSearchProps {
  usernameSubject: BehaviorSubject<string>;
}

const UserSearch: React.FC<UserSearchProps> = ({ usernameSubject }) => {
  const [username, setUserName] = useState(usernameSubject.value);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    usernameSubject.next(username);
  };

  return (
    <SUserSearch onSubmit={submit}>
      <input
        id="username"
        placeholder="username"
        type="text"
        value={username}
        onChange={e => setUserName(e.target.value)}
      />
      <button type="submit">submit</button>
    </SUserSearch>
  );
};

export default UserSearch;
