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
    <div class="container">
        <div className="row">
            <div className="col">
                <h2>Books</h2>
            </div>
            <div className="col" align="right">
                <Link className="btn btn-primary" to="/book">
                    Add Book
                </Link>
            </div>
        </div>
      <div className="row" style={{marginTop:"10px"}} >
        <div className="col">
            <BookList books={books} deleteBook={deleteBook} />
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
