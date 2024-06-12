import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
import { RootState } from '../../redux/configureStore';
import { images } from '../../constants';
import './Books.scss';

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.fetchBooks);

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);

  return (
    <div className="app__books">
      <h1>All Books</h1>
      {books.map((book) => {
        // Extract the filename from the coverPhotoURL
        const imageKey = book.coverPhotoURL.replace('assets/', '').replace('.webp', '');
        return (
          <div key={book.title}>
            {/* Use the extracted filename as the key for the images object */}
            <img src={images[imageKey]} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.readingLevel}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
