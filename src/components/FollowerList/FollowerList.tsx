import React, { useState } from 'react';
import NoFollowers from './NoFollowers';

import SFollowerList from '../../styles/components/FollowerList';

interface FollowerListProps {
  searchUserName: string;
}

const FollowerList: React.FC<FollowerListProps> = ({ searchUserName }) => {
  return (
    <SFollowerList>
      <NoFollowers searchUserName={searchUserName} />
    </SFollowerList>
  );
};

export default FollowerList;
