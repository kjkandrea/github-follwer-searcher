import React, { useEffect, useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';
import { BehaviorSubject, catchError, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

interface FollowerListProps {
  usernameSubject: BehaviorSubject<string>;
}

const FollowerList: React.FC<FollowerListProps> = ({ usernameSubject }) => {
  const [username, setUsername] = useState(usernameSubject.value);

  useEffect(() => {
    usernameSubject.subscribe(username => {
      if (!username) return;
      fromFetch(process.env.REACT_APP_API_URL + `/users/${username}/followers`)
        .pipe(
          switchMap((response: any) =>
            response.ok ? response.json() : of({ error: true, message: `Error ${response.status}` }),
          ),
          catchError(err => {
            console.error(err);
            return of({ error: true, message: err.message });
          }),
        )
        .subscribe({
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
