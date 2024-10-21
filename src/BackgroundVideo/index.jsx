export default function BackgroundVideo() {
  return (
    <>
      <video
        id="video"
        src="https://media.cplegacy.com/assets/media/website/homepagescene_CPL.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        style={{
          display: "block",
          margin: "0 auto",
          minHeight: "100%",
          maxHeight: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <source
          src="https://media.cplegacy.com/assets/media/website/homepagescene_CPL.webm"
          type="video/webm"
        />
        Oops should have been a video here...
      </video>
    </>
  );
}
