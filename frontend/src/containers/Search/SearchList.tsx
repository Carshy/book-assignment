import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { searchBooks } from '../../redux/actions/actionCreate';
import { RootState } from '../../redux/configureStore';
import { formatString } from '../Utils/Utils';
import { clearBookList, updateBooksLoaded } from '../../redux/reducers/searchBooksReducer';

// export default SearchList;

const SearchList: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState('none');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchBooksState = useSelector((state: RootState) => state.searches);

  useEffect(() => {
    // Optionally, dispatch an initial search
    // dispatch(searchBooks(''));
  }, [dispatch]);

  useEffect(() => {
    if (searchValue.length > 0) {
      dispatch(searchBooks(searchValue));
    }
  }, [searchValue, dispatch]);

  const handleBookClick = (book) => {
    if (formatString(book.title) !== currentPage) {
      dispatch(clearBookList());
      dispatch(updateBooksLoaded({
        name: formatString(book.title),
        base: 'i',
      }));
      setCurrentPage(formatString(book.title));
      navigate(`./${formatString(book.title)}`);
    }
  };

  const handleKeyDown = (event, book) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleBookClick(book);
    }
  };

  return (
    <main className="ingredients">
      <section className="books__col1">
        <div className="books__header">
          <input
            type="text"
            placeholder="Search books by title..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>

        <div className="books__container">
          {searchBooksState.loading && <p>Loading...</p>}
          {searchBooksState.books.length === 0 && !searchBooksState.loading && searchValue.length > 0 && (
            <h3 style={{ textAlign: 'center', width: '100%', color: '#3e5c1c' }}>
              No books found.
            </h3>
          )}
          {Array.isArray(searchBooksState.books) && searchValue.length > 0 &&
            searchBooksState.books.filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((book) => (
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
              ))
          }
        </div>
      </section>

      {/* Placeholder for details or additional sections */}
      {/* Adjust based on your application layout and needs */}
      {/* {mediaWidth > 700 && (
        <section className="books__col2" style={{ width: '50%' }}>
          {outlet || (
            <h2>
              Click a searched ingredient to display more information about it.
            </h2>
          )}
        </section>
      )} */}
    </main>
  );
};

export default SearchList;
