import React, { useState, useEffect } from "react";
import bookStore from "../stores/bookStore";
import BookList from "./BookList";
import { Link } from "react-router-dom";
import { loadBooks, deleteBook } from "../actions/bookActions";

function BooksPage() {
  const [books, setBooks] = useState(bookStore.getBooks());

  useEffect(() => {
    bookStore.addChangeListener(onChange);
    if (books.length === 0) loadBooks();
    return () => bookStore.removeChangeListener(onChange); // cleanup on unmount
  }, [books.length]);

  function onChange() {
    setBooks(bookStore.getBooks());
  }

  return (
    <>
      <h2>Books</h2>
      <Link className="btn btn-primary" to="/book">
        Add Book
      </Link>
      <BookList books={books} deleteBook={deleteBook} />
    </>
  );
}

export default BooksPage;
