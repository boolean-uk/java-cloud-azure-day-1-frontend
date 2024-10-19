import { useContext, useEffect, useState } from "react";
import {ApiContext} from "../../ApiProvider";

function Books() {
  
  const [books, setBooks] = useState([]);
  const {token} = useContext(ApiContext);

  const fetchBooks = async () => {
    try {
        const response = await fetch("http://localhost:5000/books", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const bookData = await response.json();
        setBooks(bookData);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

console.table(books.data);

  useEffect(() => {
    fetchBooks();
  }, []);

  if(!books.data) return <p>Please login to access this page</p>

    return (
      <div>
        <h2>Books</h2>
        <ul>
          {books.data.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    );
}

export default Books;