import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onTermSubmit(term);
  };
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            type="text"
            name="videoSearch"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
