import React, { useEffect, useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';
import { BehaviorSubject, tap } from 'rxjs';
import { request } from '../../api/http';

interface FollowerListProps {
  usernameSubject: BehaviorSubject<string>;
}

const FollowerList: React.FC<FollowerListProps> = ({ usernameSubject }) => {
  const [username, setUsername] = useState(usernameSubject.value);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    usernameSubject.subscribe(username => {
      if (!username) return;
      request(`/users/${username}/followers`)
        .pipe(tap(console.log))
        .subscribe({
          next: () => {},
        });

      setUsername(username);
    });
  }, []);

  return (
    <SFollowerList>
      <NoFollowers username={username} />
    </SFollowerList>
  );
};

export default FollowerList;
