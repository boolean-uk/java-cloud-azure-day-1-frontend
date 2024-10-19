import { useContext, useEffect, useState } from "react";
import {ApiContext} from "../../ApiProvider";

function Author() {
  const [authors, setAuthors] = useState([]);
  const {token} = useContext(ApiContext);
  
  const fetchAuthors = async () => {
    try {
        const response = await fetch("http://localhost:5000/authors", {
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
        setAuthors(bookData);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};
;

  useEffect(() => {
    fetchAuthors();
  }, []);

  if(!authors.data) return <p>Please login to access this page</p>

    return (
      <div>
        <h2>Author</h2>
        <ul>
          {authors.data.map((author) => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default Author;