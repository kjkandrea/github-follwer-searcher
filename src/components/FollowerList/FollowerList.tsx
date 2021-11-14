import React, { useEffect, useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';
import { BehaviorSubject, catchError, of } from 'rxjs';
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
        .pipe(
          catchError(() => {
            console.log('error'); // TODO: 여기서 catch 가 안되네.. 에러핸들하는 방법을 내가 모르는듯
            return of([]);
          }),
        )
        .subscribe({
          next: console.log,
          error: () => console.log('error'),
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
