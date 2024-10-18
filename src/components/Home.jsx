import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={`/books`}> Books</Link>
      <div>
      <Link to={`/author`}> Authors</Link>
      </div>
      <Link to={`/genre`}> Genre</Link>
    </div>
  );
}

export default Home;