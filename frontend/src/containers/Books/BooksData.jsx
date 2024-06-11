import { v4 as uuidv4 } from 'uuid';
import { images } from '../../constants';

export const fetchBooksData = [
  { id: uuidv4(), name: 'JavaScript', image: images.javascript },
  {
    id: uuidv4(),
    title: 'Curious Princess and the Enchanted Garden',
    author: 'Reese Smith',
    coverPhotoURL: images.image1,
    readingLevel: 'H',
  },
  {
    id: uuidv4(),
    title: 'Clever Monster on the Wonder Island',
    author: 'Jordan Jones',
    coverPhotoURL: images.image2,
    readingLevel: 'I',
  },
];
