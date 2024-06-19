// ShowBook.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { RootState } from '../../redux/configureStore';
import { v4 as uuidv4 } from 'uuid'; // Import UUID if needed

interface ShowBookProps {
  bookId: string;
  onClose: () => void;
}

const ShowBook: React.FC<ShowBookProps> = ({ bookId, onClose }) => {
  const books = useSelector((state: RootState) => state.fetchBooks);

  // Find the book in the state by comparing book.id with bookId
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return (
      <div>
        <Typography variant="h5">Book not found!</Typography>
      </div>
    );
  }

  return (
    <div style={{ padding: '7rem' }}>
      <Typography variant="h4" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Author: {book.author}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Reading Level: {book.readingLevel}
      </Typography>
      {/* Add more details as needed */}
      <button onClick={onClose}>Close</button> {/* Example of a close button */}
    </div>
  );
};

export default ShowBook;
