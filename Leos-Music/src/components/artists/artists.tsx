import Albums from "../albums/albums";
import "./style.css";

export default function Artists({ artist }: { artist: any }) {
  const albums: [] = artist.albums;
  return (
    <div className="artistCard">
      <div className="artistName">
        <h3>{artist.artistName}</h3>
      </div>
      <div className="">
        {albums.length < 1 ? "No albums for this artist" :albums.map((album, index) => {
          return <Albums album={album} key={index} />;
        })}
      </div>
    </div>
  );
}
