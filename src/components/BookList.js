import React from 'react';
import Book from './Book';

const BookList = ( { books }) => {
  // Creating BookList component that takes in a prop called books

  return (
    <div>
      {books.map(book => (
        <Book key={book.id} book={book} /> 
      ))}
    </div>
  );
};

export default BookList;