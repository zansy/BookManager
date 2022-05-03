import dispatcher from "../appDispatcher";
import * as bookApi from "../api/bookApi";
import actionTypes from "./actionTypes";

export function saveBook(book) {
  return bookApi.saveBook(book).then(savedBook => {
    // Hey dispatcher, go tell all the stores that a book was just created.
    dispatcher.dispatch({
      actionType: book.id
        ? actionTypes.UPDATE_BOOK
        : actionTypes.CREATE_BOOK,
      book: savedBook
    });
  });
}

export function loadBooks() {
  return bookApi.getBooks().then(books => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_BOOKS,
      books: books
    });
  });
}

export function deleteBook(id) {
  return bookApi.deleteBook(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_BOOK,
      id: id
    });
  });
}
