import Song from "../songs/songs";
import "./style.css";

export default function Albums({ album }: { album: any }) {
  const songs: [] = album.songList;
  return (
    <div className="albumBody">
      <div className="albumTitle">
        <h4>{album.albumName}</h4>
        {songs.length < 1
          ? "No songs in this album"
          : songs.map((song, index) => {
              return <Song song={song} key={index} />;
            })}
      </div>
    </div>
  );
}
