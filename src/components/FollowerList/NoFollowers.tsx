import React from 'react';

interface NoFollowersProps {
  username: string;
}

const NoFollowers: React.FC<NoFollowersProps> = ({ username }) => (
  <div className="no-data">
    {username ? <h2>{username} doesn’t have any followers yet.</h2> : <h2>No search followers yet.</h2>}
  </div>
);

export default NoFollowers;
