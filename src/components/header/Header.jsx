import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../ApiProvider";
import { useContext } from "react";
function Header() {
  const { token, setToken } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <button onClick={token ? handleSignOut : () => navigate('/signin')}>
        {token ? 'Sign Out' : 'Sign In'}
      </button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </header>
  );
}

export default Header;
