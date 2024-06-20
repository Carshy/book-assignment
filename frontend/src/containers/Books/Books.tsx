// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { motion } from 'framer-motion';
// import {
//   Grid, Card, CardContent, CardMedia, Typography,
// } from '@mui/material';
// import { fetchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
// import { RootState } from '../../redux/configureStore';
// import { images } from '../../constants';

// const Books: React.FC = () => {
//   const dispatch = useDispatch();
//   const books = useSelector((state: RootState) => state.fetchBooks);

//   useEffect(() => {
//     dispatch(fetchBooksThunk());
//   }, [dispatch]);

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div style={{ padding: '1rem' }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         All Books
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {books.map((book) => {
//           const imageKey = book.coverPhotoURL.replace('assets/', '').replace('.webp', '');
//           return (
//             <Grid item key={book.title}>
//               <motion.div
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 variants={itemVariants}
//               >
//                 <Card
//                   component={motion.div}
//                   whileHover={{ scale: 1.05 }}
//                   sx={{
//                     position: 'relative',
//                     overflow: 'hidden',
//                     width: '14rem',
//                     height: '18rem',
//                     border: '1px solid #ccc',
//                     borderRadius: '10px',
//                     backgroundColor: '#fff',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                     transition: 'all 0.3s ease-in-out',
//                     cursor: 'pointer',
//                     '&:hover': {
//                       backgroundColor: '#cffafa',
//                     },
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={images[imageKey]}
//                     alt={book.title}
//                     sx={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       transition: 'transform 0.6s ease-in-out',
//                       '&:hover': {
//                         transform: 'scale(1.1)',
//                       },
//                     }}
//                   />
//                   <CardContent
//                     component={motion.div}
//                     whileInView={{ opacity: [0, 1], scale: [0, 1] }}
//                     transition={{
//                       duration: 0.4,
//                       ease: 'easeInOut',
//                       staggerChildren: 0.45,
//                     }}
//                     sx={{
//                       padding: '10px',
//                       textAlign: 'center',
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       width: '100%',
//                       height: '100%',
//                       backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                       borderRadius: '0.5rem',
//                       opacity: 0,
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         opacity: 1,
//                       },
//                     }}
//                   >
//                     <Typography variant="h6" gutterBottom sx={{ color: '#f76434' }}>
//                       {book.title}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
//                       {book.author}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
//                       Reading Level: {book.readingLevel}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </div>
//   );
// };

// export default Books;

// ****************************************************

// Books.tsx
// Books.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  Grid, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { RootState } from '../../redux/configureStore';
import { fetchBooksThunk } from '../../redux/thunks/fetchBooksThunk';
import { images } from '../../constants';
import { v4 as uuidv4 } from 'uuid'; // Import UUID

const Books: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState<string | null>(null); // State to hold selected book ID
  const books = useSelector((state: RootState) => state.fetchBooks);

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleBookClick = (bookId: string) => {
    setSelectedBook(bookId); // Set selected book ID when a book is clicked
  };

  return (
    <div style={{ padding: '1rem' }} id="books-section">
      <Typography variant="h4" align="center" gutterBottom>
        All Books
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {books.map((book) => {
          const imageKey = book.coverPhotoURL.replace('assets/', '').replace('.webp', '');
          return (
            <Grid item key={book.id}>
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
                    position: 'relative',
                    overflow: 'hidden',
                    width: '14rem',
                    height: '18rem',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    backgroundColor: '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#cffafa',
                    },
                  }}
                  onClick={() => handleBookClick(book.id)} // Handle click event
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={images[imageKey]}
                    alt={book.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <CardContent
                    component={motion.div}
                    whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                      staggerChildren: 0.45,
                    }}
                    sx={{
                      padding: '10px',
                      textAlign: 'center',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '0.5rem',
                      opacity: 0,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: '#f76434' }}>
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
                      {book.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
                      Reading Level: {book.readingLevel}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
      {selectedBook && (
        <ShowBook bookId={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default Books;

