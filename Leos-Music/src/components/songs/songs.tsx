

export default function Song({song} : {song : any}) {
    return (
        <div className="songBody">
            {song.songName}
        </div>
    )
}