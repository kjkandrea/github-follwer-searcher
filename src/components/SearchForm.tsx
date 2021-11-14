import React from 'react';

const SearchForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="search-keyword">keyword</label>
        <input id="search-keyword" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
