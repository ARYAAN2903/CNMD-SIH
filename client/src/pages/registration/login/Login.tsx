import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Customer() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here and handle errors
    // Assuming login is successful, you can redirect to the dashboard page
    if (username === 'aryaan2903' && password === '1234') {
      // Replace 'yourUsername' and 'yourPassword' with your actual validation logic
      // Redirect to the dashboard page
      navigate('/customer-dashboard');
    } else {
      // Handle login errors and set the error state if necessary
      setError('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <div className="loginbox">
        <style>
          {`
            * {
              margin: 0;
              padding: 0px;
              font-family: sans-serif;
            }

            body {
              height: 100vh;
              width: 100%;
              background-repeat: no-repeat;
              background-color: #2a3447;
              background-size: cover;
              background-position: center;
            }

            .avatar {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              position: absolute;
              top: -50px;
              left: calc(50% - 50px);
            }

            .loginbox {
              max-width: 500px;
              width: 90%;
              height: auto;
              border-radius: 25px;
              background: rgb(252, 250, 247);
              color: white;
              top: 50%;
              left: 50%;
              position: absolute;
              transform: translate(-50%, -50%);
              box-sizing: border-box;
              padding: 50px 30px;
            }

            h1 {
              margin: 0;
              padding: 0 0 20px;
              text-align: center;
              font-size: 32px;
              color: rgb(94, 78, 78);
            }

            .loginbox p {
              margin: 10px;
              padding: 0;
              font-weight: bold;
              font-size: 22px;
              color: rgb(94, 78, 78);
            }

            .loginbox input {
              width: 100%;
              margin-top: 10px;
            }

            .loginbox input[type="text"],
            .loginbox input[type="password"] {
              border: none;
              border-bottom: 1px solid rgb(17, 15, 15);
              background: transparent;
              outline: none;
              height: 40px;
              color: black;
              font-size: 26px;
              margin-top: 10px;
              margin-left: 10px;
            }

            .loginbox input[type="submit"] {
              margin-top: 30px;
              border: none;
              outline: none;
              height: 40px;
              background: linear-gradient(90deg, black 0%, rgb(75, 14, 154, 1) 35%, cyan 100%);
              color: #fff;
              font-size: 18px;
              border-radius: 20px;
            }

            .loginbox input[type="submit"]:hover {
              cursor: pointer;
              background: #ffc107;
              color: #000;
            }

            .loginbox a {
              display: block;
              text-decoration: none;
              font-size: 22px;
              line-height: 20px;
              color: rgb(244, 241, 241);
              margin-top: 20px;
              text-align: center;
            }

            .loginbox a:hover {
              color: #ffc107;
              color: black;
            }

            .create a {
              text-decoration: none;
              font-size: 22px;
              line-height: 20px;
              color: rgb(108, 104, 104);
              margin-top: 20px;
              text-align: center;
            }

            @media (max-width: 768px) {
              body {
                background-size: cover;
                background-position: top;
              }
            }

            @media (max-width: 576px) {
              body {
                background-size: cover;
                background-position: center;
              }
            }
          `}
        </style>

        <h1>Customer Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" /><br /><br />
          <div className='create'>
            <Link to="/signup">Don't have an Account? Create One</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Customer;
