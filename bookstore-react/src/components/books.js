import React from "react";

function Books(props) {
  return (
    <div>
      <h1>Books from the Ruby API</h1>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
            <button>Edit Book</button>
            <button>Remove Book</button>
          </div>
        );
      })}
    </div>
  );
}

export default Books;

