import "./App.css";
import Header from "./components/header/header";
import ApiContext from "./ApiProvider";
import { Route, Routes } from "react-router";
import SignIn from "./components/SignUp/SignIn";
import SignUp from "./components/signUp/SignUp";
import Books from "./components/Api/Books.jsx";
import Author from "./components/Api/Authors.jsx";
import Genre from "./components/Api/Genre.jsx";
import LeftMenu from "./components/header/LeftSideMenu.jsx";
function App() {
  return (
    <ApiContext>
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="main-container">
          <nav className="left-menu">
            <LeftMenu />
          </nav>
          <div className="main-content">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Books />} />
              <Route path="/author" element={<Author />} />
              <Route path="/genre" element={<Genre />} />
            </Routes>
          </div>
        </div>
      </div>
    </ApiContext>
  );
}

export default App;
