import "./style.css";
import Header from "../Header";
import BackgroundVideo from "../BackgroundVideo";
import HomeContent from "../HomeContent";

export default function Homepage() {
  return (
    <>
      <Header />
      <BackgroundVideo />

      <HomeContent />
      <div className="web-end"></div>
    </>
  );
}
