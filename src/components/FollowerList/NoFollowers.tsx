import React from 'react';

interface NoFollowersProps {
  searchUserName: string;
}

const NoFollowers: React.FC<NoFollowersProps> = ({ searchUserName }) => (
  <div className="no-data">
    {searchUserName ? <h2>${searchUserName} doesn’t have any followers yet.</h2> : <h2>No search followers yet.</h2>}
  </div>
);

export default NoFollowers;
