import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>BOOK LIST</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}-{book.authour}({book.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
