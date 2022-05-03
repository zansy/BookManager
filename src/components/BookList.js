import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BookList(props) {
  return (
    <table className="table table-hover border">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map(book => {
          return (
            <tr key={book.id}>
              <td>
                <Link to={"/book/" + book.id}>{book.title}</Link>
              </td>
              <td>{book.authorId}</td>
              <td>{book.category}</td>
              <td>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            props.deleteBook(book.id);
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired
};

export default BookList;
