import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
import { RootState } from '../../redux/configureStore';
// import { images } from 'constants';

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.fetchBooks);

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <div key={book.title}>
          <img src={book.coverPhotoURL} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.readingLevel}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;

