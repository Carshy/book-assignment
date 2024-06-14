// src/frontend/components/BookList.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../redux/configureStore';
import { CircularProgress, List, ListItem, ListItemText } from '@mui/material';

const SearchList: React.FC = () => {
  const { books, loading, error } = useSelector((state: RootState) => state.searchBooks);


  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <List>
      {books.map((book) => (
        <ListItem key={uuidv4()}>
          <ListItemText
            primary={book.title}
            secondary={`Author: ${book.author}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
