import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookRequest } from '../../redux/actions/actionCreate';
import { fetchBooksData } from './BooksData';
import './Books.scss';

const BooksData = () => {
  const dispatch = useDispatch();
  const fetchBooks = useSelector((state) => state.fetchBooks);

  useEffect(() => {
    dispatch(fetchBookRequest(fetchBooksData));
  }, [dispatch]);
  return (
    <div>
      <h2>All Books</h2>
      <div className="app__books-list">
        {
          fetchBooks.map((book) => (
            <div key={book.id} className="app__books-book">
              <div className="book-image">
                <img src={book.coverPhotoUrl} alt={book.title} />
              </div>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.readingLevel}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BooksData;
