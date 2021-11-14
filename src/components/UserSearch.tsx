import React from 'react';

const UserSearch = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">username : </label>
        <input id="username" type="text" />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default UserSearch;
