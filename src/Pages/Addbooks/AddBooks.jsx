import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../../utils/bookSlice';
import { nanoid } from 'nanoid';

const AddBooks = () => {
  const [error, setError] = useState('');
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    type: '',
    image: null,
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setBookData({
      ...bookData,
      [name]: files ? files[0] : value,
    });
  };

  const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, author, image, description } = bookData;

    if (!title || !author || !image || !description) {
      setError('Please ensure all the fields are entered');
      return;
    }

    const base64Image = await toBase64(image);

    const newBooks = {
      id: nanoid(),
      title: bookData.title,
      img: base64Image,
      type: bookData.type,
      author: bookData.author,
      description: bookData.description,
      isNew: true,
    };

    dispatch(addBook(newBooks));
    navigate('/browsebook');
  };

  return (
      <section className="bg-white min-h-screen p-5">
        <form
            className="md:w-1/2 w-full font-Poppins p-12 mx-auto bg-cover bg-center bg-no-repeat relative rounded-lg shadow-md"
            onSubmit={handleSubmit}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507842217343-583bb727c8e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
            }}
        >
          <div className="absolute inset-0 bg-teal-100 bg-opacity-50 rounded-lg z-0"></div>

          <div className="relative z-10">
            <h2 className="font-semibold text-2xl mb-4 text-center text-black">Add new Book</h2>
            <div className="mb-4">
              <label className="font-medium text-lg text-black mb-2 block">Title</label>
              <input
                  type="text"
                  name="title"
                  value={bookData.title}
                  onChange={handleChange}
                  placeholder="Enter a Title of Book"
                  className="w-full h-12 pl-2 pr-5 border-2 border-black outline-none rounded-md bg-white bg-opacity-90"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium text-lg text-black mb-2 block">Author</label>
              <input
                  type="text"
                  name="author"
                  value={bookData.author}
                  onChange={handleChange}
                  placeholder="Enter an Author"
                  className="w-full h-12 pl-2 pr-5 border-2 border-black outline-none rounded-md bg-white bg-opacity-90"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium text-lg text-black mb-2 block">Book Type</label>
              <input
                  type="text"
                  name="type"
                  value={bookData.type}
                  onChange={handleChange}
                  placeholder="Enter a book type eg: fantasy, Non-Fiction, crime, fiction, Science"
                  className="w-full h-12 pl-2 pr-5 border-2 border-black outline-none rounded-md bg-white bg-opacity-90"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium text-lg text-black mb-2 block">Description</label>
              <textarea
                  name="description"
                  value={bookData.description}
                  onChange={handleChange}
                  placeholder="Enter a description"
                  className="w-full h-24 pl-2 pr-5 border-2 border-black outline-none rounded-md bg-white bg-opacity-90"
                  rows="5"
              ></textarea>
            </div>
            <div className="mb-4 flex gap-4">
              <label className="font-medium text-lg text-black mb-2">Upload an Image</label>
              <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="outline-none text-black"
              />
            </div>
            {error && <p className="font-medium text-red-400 text-base mb-4">{error}</p>}
            <button
                type="submit"
                className="px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
            >
              Add book
            </button>
          </div>
        </form>
      </section>
  );
};

export default AddBooks;
