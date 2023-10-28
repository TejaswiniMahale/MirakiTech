import React, { useState } from "react";
import "./Login.css"

function Login() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Replace with your authentication logic, e.g., API call to validate credentials.
    // For this example, we'll use hardcoded credentials.
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
    return (
     <div className="Login_main">
        <div className="login_container">
                <h1>Login</h1>
                <form>
                <input type="text" placeholder="Username" value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" onClick={handleLogin}>Login</button>
                </form>
        </div>
     </div>
    );
  }
  
  export default Login;