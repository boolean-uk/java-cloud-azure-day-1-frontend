import { Link } from "react-router-dom";

export default function HomeContent() {
  return (
    <>
      <div className="lower-body">
        <div className="content-container">
          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63599bd000a766bb3d7c30f0_cp2.png"
                alt=""
              />
            </div>
            <h2>Explore</h2>
            <p>
              Want to start waddling around and create new friends? Make sure to
              create a Penguin and log in to start your adventure!
            </p>
            <Link to="/penguins">
              <button className="content-button">Explore the penguins!</button>
            </Link>
          </div>

          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/6359a46e39925d53e2db6105_cp3.png"
                alt=""
              />
            </div>
            <h2>Waddle away</h2>
            <p>
              Learn all about what our snowy island has to offer in this section
              designed specifically for parents and other Penguins.
            </p>
            <Link to="/rooms">
              <button className="content-button">Start your journeys!</button>
            </Link>
          </div>

          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://www.bleepstatic.com/content/hl-images/2024/06/05/club-penguin-hacker.jpg"
                alt=""
              />
            </div>
            <h2>Watch out for the villains</h2>
            <p>
              Quick guide of all villains you might encounter on your journeys.
            </p>
            <Link to="/villains">
              <button className="content-button">Explore the villains!</button>
            </Link>
          </div>

          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63599be81b4148449582b6d3_cp1.png"
                alt=""
              />
            </div>
            <h2>Help</h2>
            <p>
              Feeling lost, or need help with your Penguin? You can find answers
              to the most frequently asked questions here.
            </p>
            <Link to="/">
              <button className="content-button">Help me!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
