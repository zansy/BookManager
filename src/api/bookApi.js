import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/books/";

export function getBooks() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getBookByID(bookID) {
  return fetch(baseUrl + "?id=" + bookID)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then(books => {
        if (books.length !== 1) throw new Error("Book not found: " + bookID);
        return books[0]; // should only find one book for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveBook(book) {
  return fetch(baseUrl + (book.id || ""), {
    method: book.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...book,
      // Parse authorId to a number (in case it was sent as a string).
      authorId: parseInt(book.authorId, 10)
    })
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(baseUrl + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
