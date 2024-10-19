import { useState } from "react"
import { useContext } from "react"
import { ApiContext } from '../../ApiProvider';
function SignUp() {
    const { setUser } = useContext(ApiContext);
    const [message, setMessage] = useState(null);
    const [formData, setFormData] = useState({
       username: '',
        email: '',
        password: '',
        role: [] 
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'role') {
            const selectedRoles = Array.from(e.target.selectedOptions, option => option.value);
            setFormData((prev) => ({
                ...prev,
                [name]: selectedRoles,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('http://localhost:5000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if(response.ok) {
                const data = await response.json()
                setUser(data)
                setMessage('User created successfully')
            } else {
                const errorData = await response.json();
                setMessage(errorData.message);
            }
        } catch (error) {
            console.error("Failed to sign up", error);
            setMessage("An unexpected error occurred. Please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
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
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
    
          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="ROLE_USER">User</option>
              <option value="ROLE_MODERATOR">Moderator</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
          </div>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <button type="submit">Sign Up</button>
        </form>
      );
    }
export default SignUp