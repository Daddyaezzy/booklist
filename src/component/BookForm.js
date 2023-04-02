import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
