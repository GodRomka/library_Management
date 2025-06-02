import { createSlice } from '@reduxjs/toolkit';
import { bookData } from './mockData';

// Завантажуємо книги з localStorage, якщо є, інакше - дефолтні
const savedBooks = localStorage.getItem('books');
const initialState = savedBooks ? JSON.parse(savedBooks) : bookData;

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('books', JSON.stringify(state)); // зберігаємо у localStorage
        },
        removeBook: (state, action) => {
            const idToRemove = action.payload;
            const newState = state.filter(book => book.id !== idToRemove);
            localStorage.setItem('books', JSON.stringify(newState));
            return newState;  // Повертаємо оновлений стан
        },
    }
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
