import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import bookStore from "../stores/bookStore";
import { toast } from "react-toastify";
import * as bookActions from "../actions/bookActions";

const ManageBookPage = props => {
  const [errors, setErrors] = useState({});
  const [books, setBooks] = useState(bookStore.getBooks());
  const [book, setBook] = useState({
    id: null,
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    bookStore.addChangeListener(onChange); // from the path `/books/:id`
    if (books.length === 0) {
      bookActions.loadBooks();
    } else if (props.match.params.id) {
      setBook(bookStore.getBookByID(props.match.params.id));
    }
    return () => bookStore.removeChangeListener(onChange);
  }, [books.length, props.match.params.id]);

  function onChange() {
    setBooks(bookStore.getBooks());
  }

  function handleChange({ target }) {
    setBook({
      ...book,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!book.title) _errors.title = "Title is required";
    if (!book.authorId) _errors.authorId = "Author ID is required";
    if (!book.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    bookActions.saveBook(book).then(() => {
      props.history.push("/books");
      toast.success("Book saved.");
    });
  }

  return (
    <>
      <h2>Manage Book</h2>
      <BookForm
        errors={errors}
        book={book}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageBookPage;
