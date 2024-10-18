import { useEffect, useState } from "react";
import Loading from "../loading/loading";
import Artists from "../artists/artists";
import "./style.css";

export default function Dashboard() {
  const [artists, setArtists] = useState([]);
  const base_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${base_URL}/artists`)
      .then((res) => res.json())
      .then((data) => {
        setArtists(data.data);
        console.log(data);
      });
  }, []);

  if (!artists) {
    return <Loading />;
  }

  return (
    <div className="dashboardMain">
      <div className="dashboardTitle">
        <h1>Trending Artists right now!</h1>
      </div>

      <div className="artistsBody">
        {artists.map((artist, index) => {
          return <Artists key={index} artist={artist} />;
        })}
      </div>
    </div>
  );
}
