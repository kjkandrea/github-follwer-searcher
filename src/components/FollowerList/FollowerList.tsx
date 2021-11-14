import React, { useEffect, useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';
import { BehaviorSubject } from 'rxjs';

interface FollowerListProps {
  usernameSubject: BehaviorSubject<string>;
}

const FollowerList: React.FC<FollowerListProps> = ({ usernameSubject }) => {
  const [username, setUsername] = useState(usernameSubject.value);

  useEffect(() => {
    usernameSubject.subscribe(username => {
      console.log(username);
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
