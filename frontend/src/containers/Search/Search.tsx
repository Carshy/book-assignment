import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { useNavigate, useOutlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { searchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
import { RootState } from '../../redux/configureStore';
import { formatString } from '../Utils/Utils';
import './Ingredients.scss';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPageIng, setCurrentPageIng] = useState('none');

  const dispatch = useDispatch();

  const searchBooks = useSelector((state: RootState) => state.searchBooks);

  useEffect(() => {
    dispatch(searchBooksThunk(query));
  }, [dispatch]);

  // const handleBookClick = (book) => {
  //   if (formatString(book.name) !== (appState.mealListLoaded.name || currentPageIng)) {
  //     dispatch(clearMealList());
  //     dispatch(updateMealListLoaded({
  //       name: formatString(ingredient.name),
  //       base: 'i',
  //     }));
  //     setCurrentPageIng(formatString(ingredient.name));
  //     navigate(`./${formatString(ingredient.name)}`);
  //   }
  // };

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
          {searchValue.length > 0 &&
            searchBooks.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((book) => (
                <span
                  key={uuidv4()}
                  className="ingredient"
                  onClick={() => handleBookClick(book)}
                >
                  {book.title}
                </span>
              ))}

          {searchValue.length <= 0 && (
            <h3 style={{ textAlign: 'center', width: '100%', color: '#3e5c1c' }}>
              Input a letter in the search field to find your meal
              <br />
              ...Then click on a searched ingredient
            </h3>
          )}
        </div>
      </section>

      {mediaWidth > 700 && (
        <section className="ingredients__col2" style={{ width: '50%' }}>
          {outlet || (
            <h2>
              Click a searched ingredient to display more information about it.
            </h2>
          )}
        </section>
      )}
    </main>
  );
};

export default Search;