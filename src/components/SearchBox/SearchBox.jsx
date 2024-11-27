import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

export default SearchBox;
