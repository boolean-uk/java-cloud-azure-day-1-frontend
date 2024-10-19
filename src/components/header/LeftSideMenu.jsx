import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="left-menu">
      <ul>
        <div className="menu-item">
          <Link to={`/author`}> Authors</Link>
        </div>

        <div className="menu-item">
          <Link to={`/genre`}> Genre</Link>
        </div>

        <div className="menu-item">
          <Link to={`/`}> Books</Link>
        </div>
      </ul>
    </div>
  );
}

export default LeftMenu;
