import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Booksdata from '../../Components/Booksdata';
import left_icon from '../../assets/left_icon.svg';

const BookDetail = () => {
    const { id } = useParams();
    const bookDatas = useSelector(state => state.book);
    const book_data = bookDatas.find(book => book.id === id);

    return (
        <section className="bg-white min-h-screen p-5">
            <Link to="/browsebook">
                <button className="px-3 py-1 mb-5">
                    <img src={left_icon} alt="Back" className="w-7 h-7" />
                </button>
            </Link>
            <div
                className="flex md:flex-row flex-col justify-start gap-10 p-6 w-full max-w-4xl mx-auto bg-cover bg-center bg-no-repeat relative rounded-lg shadow-md"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb727c8e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`, // Replace with your background image URL
                }}
            >
                {/* Semi-transparent overlay for better text readability */}
                <div className="absolute inset-0 bg-teal-100 bg-opacity-50 rounded-lg z-0"></div>

                {/* Content with higher z-index to appear above the overlay */}
                <div className="relative z-10 flex md:flex-row flex-col gap-6">
                    <img
                        src={book_data.img}
                        alt="book_img"
                        className="h-[400px] w-70 object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black">
                        <h2 className="font-semibold font-Poppins text-3xl mb-2">
                            Title: {book_data.title}
                        </h2>
                        <p className="font-Poppins text-lg mb-2">
                            Description: {book_data.description}
                        </p>
                        <h4 className="text-md font-semibold font-Poppins mb-2">
              <span className="px-2 py-1 bg-black text-white font-medium text-sm font-Poppins rounded">
                Author
              </span>
                            : {book_data.author}
                        </h4>
                        <p className="font-Poppins text-sm font-medium text-orange-500">
                            Ratings: {book_data.rating}+
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Booksdata title={'See other books'} />
            </div>
        </section>
    );
};

export default BookDetail;