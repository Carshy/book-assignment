/* eslint-disable-next-line operator-linebreak */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { searchBooks } from '../../redux/actions/actionCreate';
import { AppDispatch } from '../../redux/configureStore';
import { Book } from '../../redux/types/types';
import { images } from '../../constants';
import './SearchList.scss';

const SearchList: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const searchBooksState = useSelector((state: any) => state.searches);

  useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(searchBooks(searchValue));
    }
  }, [searchValue, dispatch]);

  const handleBookClick = (book: Book) => {
    const bookWithId = { ...book, uniqueId: uuidv4() };
    setSelectedBooks((prevSelectedBooks) => [
      ...prevSelectedBooks,
      bookWithId,
    ]);
  };

  const handleRemoveBook = (uniqueId: string) => {
    setSelectedBooks((prevSelectedBooks) => prevSelectedBooks.filter(
      (selectedBook) => selectedBook.uniqueId !== uniqueId
    ));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    book: Book
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleBookClick(book);
    }
  };

  return (
    <main className="books">
      <section className="books__col1">
        <div className="books__header">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>

        <div className="books__container">
          {searchBooksState.loading && (
            <p>Loading...</p>
          )}
          {searchBooksState.books.length === 0 &&
          !searchBooksState.loading &&
          searchValue.length > 0 && (
            <h3 style={{ textAlign: 'center', width: '100%', color: '#3e5c1c' }}>
              There are no Books Found for this Search!
            </h3>
          )}
          {Array.isArray(searchBooksState.books) &&
            searchValue.length > 0 &&
            searchBooksState.books
              .filter((book: Book) => book.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((book: Book) => (
                <span
                  key={uuidv4()}
                  className="book"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleBookClick(book)}
                  onKeyDown={(event) => handleKeyDown(event, book)}
                  style={{ cursor: 'pointer' }}
                >
                  {book.title}
                </span>
              ))}

          {searchValue.length <= 0 && (
            <h3 style={{ textAlign: 'center', width: '100%', color: '#3e5c1c' }}>
              Input a letter in the search field to find a book
              <br />
              ...Then click on a searched book title to see the details
            </h3>
          )}
        </div>
      </section>

      <section className="books__col2">
        {selectedBooks.length > 0 ? (
          selectedBooks.map((book: Book) => (
            <motion.div
              key={book.uniqueId}
              className="book-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={images[
                  book.coverPhotoURL.replace('assets/', '').replace('.webp', '')
                ]}
                alt={book.title}
                className="book-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                className="book-info"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
                whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  staggerChildren: 0.55,
                }}
              >
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>
                  Reading Level:
                  {book.readingLevel}
                </p>
                <button
                  onClick={() => handleRemoveBook(book.uniqueId)}
                  className="remove-button"
                  type="button"
                >
                  Remove
                </button>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p>Books Searched with selected Titles will display here...</p>
        )}
      </section>
    </main>
  );
};

export default SearchList;
