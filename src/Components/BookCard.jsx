import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeBook } from '../utils/bookSlice';

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeBook(book.id));
    };

    return (
        <div className="p-4 border border-dark shadow-sm hover:scale-105 cursor-pointer h-auto w-80" key={book.id}>
            {book.isNew && (
                <p className="bg-black mb-1 text-white text-xs px-2 py-1 font-Poppins font-light w-fit">
                    newly added
                </p>
            )}
            <div className="w-full h-56 overflow-hidden">
                <img
                    src={book.img}
                    alt="book_image"
                    className="w-120 h-full object-cover block mx-auto"
                />
            </div>
            <h3 className="font-semibold text-base font-Poppins mt-2">{book.title}</h3>
            <div className="flex gap-2 items-center mt-2 font-Poppins">
                <p className="bg-blue-50 border-2 border-blue-200 font-Poppins p-1 font-light text-Azure text-xs">
                    Author
                </p>
                <p className="text-Gray-500 font-medium text-sm font-Poppins">{book.author}</p>
            </div>
            <p className="font-Poppins text-sm font-light mt-1">
                {book.description.length >= 40
                    ? book.description.substring(0, 50) + '...'
                    : book.description}
            </p>
            <p className="font-Poppins text-sm font-medium mt-1 text-orange-500">
                Ratings {book.rating}+
            </p>
            <div className="flex mt-2 gap-2">
                <Link to={`/book/${book.id}`}>
                    <button className="font-Poppins px-2 py-1 bg-black text-white text-xs">
                        View details
                    </button>
                </Link>
                <button
                    onClick={handleDelete}
                    className="font-Poppins px-2 py-1 bg-red-600 text-white text-xs"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookCard;
