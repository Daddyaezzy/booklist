import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>Add a book to your list</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="book title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        placeholder="author name"
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default BookForm;
