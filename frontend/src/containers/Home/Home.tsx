import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { images } from '../../constants';
import { Books } from '..';
import './Home.scss';

const StyledButton = styled(Button)({
  fontFamily: 'Muli, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  lineHeight: 1.75,
  textTransform: 'uppercase',
  fontSize: '1rem',
  fontWeight: 800,
  color: '#fff',
  padding: '1rem 2rem',
  background: '#5acccc',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: '#4aa088',
  },
});

const StyledPara = styled('p')({
  width: '50%',
  margin: '0 auto',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 1.5,
});

const Home = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = document.getElementById('books-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'books-section' not found.");
    }
  };
  const read = "Ignite Your Child's Love for Reading!";
  const para = "Discover over 700 expertly crafted, books designed to match your child's reading level. Cultivate a passion for reading—no frustration, just pure joy!";
  return (
    <div className="app__home">
      <div className="app__home-upper">
        <img src={images.home2} alt="Home" />
        <p className="app__home-header">{ read }</p>
        <StyledPara>{ para }</StyledPara>
        <StyledButton
          // component="a"
          href="#books-section"
          onClick={handleButtonClick}
        >
          Explore Reading Sets
        </StyledButton>
      </div>
      <Books />
    </div>
  );
};

export default Home;
