// components/SearchInput.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    dispatch(searchBooks(e.target.value));
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search by title..."
      style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
    />
  );
};

export default SearchInput;
