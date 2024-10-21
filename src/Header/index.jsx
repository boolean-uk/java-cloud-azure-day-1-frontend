import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo-image">
          <img
            src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/632ad06579b9d3fb62347ccc_logo-p-500.png"
            alt=""
          />
        </div>
        <nav>
          <ul className="nav-links">
            <div className="link-container">
              <Link className="link" to={"/penguins"}>
                Explore the penguins!
              </Link>
            </div>

            <div className="link-container">
              <Link to={"/rooms"} className="link">
                See what is happening in some of our rooms!
              </Link>
            </div>

            <div className="link-img">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63293ab4889a145e015cd7f4_playbutton.png"
                alt=""
              />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
