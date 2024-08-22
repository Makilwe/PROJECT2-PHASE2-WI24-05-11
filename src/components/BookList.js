import React from 'react';
import Book from './Book';

function BookList = ( { books }) => {
  // Your code here

  return (
    <div>
      {books.map(book => (
        <Book key={book.id} book={book} /> 
      ))}
    </div>
  );
};

export default BookList;