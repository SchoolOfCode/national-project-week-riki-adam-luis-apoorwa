import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const Input = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .post('https://soc-oneplace.herokuapp.com/data/users/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.payload) {
          setIsLoggedIn(true);
        }
      });
    // async function fetchData() {
    //   const res = await fetch(
    //     `https://soc-oneplace.herokuapp.com/data/users/login`,
    //     {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: {JSON.stringify(details)},
    //     }
    //   );
    //   console.log(res)
    // }
    // fetchData();
  }, [details]);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    setDetails({ ...details, username: username, password: password });
    event.preventDefault();
  }

  return !isLoggedIn ? (
    <div className="Input_Container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!validateForm()}>Login</button>
      </form>
    </div>
  ) : (
    <div>Let's go! 🚀</div>
  );
};

export default Input;
