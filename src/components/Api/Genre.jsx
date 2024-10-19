import { useContext, useEffect, useState } from "react";
import {ApiContext} from "../../ApiProvider";

function Genre() {
  const [genre, setGenre] = useState([]);
  const {token} = useContext(ApiContext);

  const fetchGenre = async () => {
    try {
        const response = await fetch("http://localhost:5000/genres", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        const genreData = await response.json();
        setGenre(genreData);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

console.table(genre.data);

  useEffect(() => {
    fetchGenre();
  }, []);

  if(!genre.data) return <p>Please login to access this page</p>

    return (
      <div>
        <h2>Genre</h2>
        <ul>
          {genre.data.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default Genre;