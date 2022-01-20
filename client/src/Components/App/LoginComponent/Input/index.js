import React, { useState, useEffect } from 'react';

const Input = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [details, setDetails] = useState({ username: '', password: '' });
  console.log(details);
  // useEffect(() => {
  //   async function fetchData() {
  //     await fetch(
  //       `https://soc-oneplace.herokuapp.com/data/users${}`
  //     );

  //   }
  //   fetchData();
  // }, []);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    setDetails({ ...details, username: username, password: password });
    event.preventDefault();
  }

  return (
    <div>
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
  );
};

export default Input;
