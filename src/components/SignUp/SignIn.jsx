import { useContext, useState } from 'react';
import { ApiContext } from '../../ApiProvider';
import { useNavigate } from 'react-router';
function SignIn() {
    const navigate = useNavigate();
    const { setToken, setUser } = useContext(ApiContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (message) {
            setMessage(null);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token);
                setMessage('Signed in successfully');
                navigate('/');

            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            setMessage(error.message); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            {message && <p style={{ color: 'red' }}>{message}</p>}
            <button type="submit">Sign In</button>
        </form>
    );
}

export default SignIn