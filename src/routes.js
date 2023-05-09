import express from 'express';
import { addBook, getBooks, getBookById, updateBook, deleteBook } from './controllers.js';

const router = express.Router();

router.post('/books', addBook);
router.get('/books', getBooks);
router.get('/books/:bookId', getBookById);
router.put('/books/:bookId', updateBook);
router.delete('/books/:bookId', deleteBook);

export default router;
