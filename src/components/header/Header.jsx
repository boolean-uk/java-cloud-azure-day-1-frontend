import {useNavigate} from 'react-router-dom';
function Header() {
   const navigate = useNavigate();
    return (
        <header>
            <button onClick={() => navigate('/signin')}>sign in</button>
            <button onClick={() => navigate('/signup')}>sign up</button>

        </header>
    );

}

export default Header;