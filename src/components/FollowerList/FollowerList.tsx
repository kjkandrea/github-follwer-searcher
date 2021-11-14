import React, { useEffect, useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';
import { BehaviorSubject } from 'rxjs';
import { request } from '../../api/http';

interface FollowerListProps {
  usernameSubject: BehaviorSubject<string>;
}

const FollowerList: React.FC<FollowerListProps> = ({ usernameSubject }) => {
  const [username, setUsername] = useState(usernameSubject.value);

  useEffect(() => {
    usernameSubject.subscribe(username => {
      if (!username) return;
      request(`/users/${username}/followers`).subscribe({
        next: console.log,
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
