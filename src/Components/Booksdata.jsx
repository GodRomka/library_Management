import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Booksdata = ({ title, inputValue }) => {
    const bookData = useSelector(state => state.book);
    const [selectedBookId, setSelectedBookId] = useState(null);

    const searchedValue = inputValue ? inputValue.toLowerCase() : '';

    const filterData = bookData.filter((book) => (
        (book.title && book.title.toLowerCase().includes(searchedValue)) ||
        (book.author && book.author.toLowerCase().includes(searchedValue))
    ));

    return (
        <div className="mt-10 p-5">
            <div className="flex justify-between items-center">
                <h2 className="font-Poppins font-medium text-3xl">
                    {title ? title : 'Popular Books'}
                </h2>
                {!title && (
                    <Link to="/browsebook">
                        <p className="text-black font-normal text-base underline underline-offset-1">
                            View more
                        </p>
                    </Link>
                )}
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {filterData.map((book) => (
                    <div
                        key={book.id}
                        onClick={() => setSelectedBookId(book.id === selectedBookId ? null : book.id)}
                        className={`p-1 rounded transition-all duration-200 cursor-pointer ${
                            selectedBookId === book.id ? 'border-2 border-black' : 'border border-transparent'
                        }`}
                    >
                        <BookCard book={book} />
                    </div>

                ))}
            </div>

            {filterData.length === 0 && (
                <div className="mt-6 text-center text-gray-500 text-sm">
                    No books found
                </div>
            )}
        </div>
    );
};

export default Booksdata;
