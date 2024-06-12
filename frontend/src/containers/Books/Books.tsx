import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
import { RootState } from '../../redux/configureStore';
import { images } from '../../constants';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.fetchBooks);

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        All Books
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => {
          // Extract the filename from the coverPhotoURL
          const imageKey = book.coverPhotoURL.replace('assets/', '').replace('.webp', '');
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.title}>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{ 
                    '&:hover': {
                      backgroundColor: '#cffafa',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={images[imageKey]}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {book.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {book.readingLevel}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Books;
