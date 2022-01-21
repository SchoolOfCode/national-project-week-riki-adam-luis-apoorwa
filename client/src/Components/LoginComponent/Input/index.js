import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const Input = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .post("https://soc-oneplace.herokuapp.com/data/users/login", {
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
        <div>
          <input
            type="text"
            className="username_input_field"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="password_input_field"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login_button" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  ) : (
    <div className="Welcome_Container">
      <h2 className="Welcome_Name">Welcome back, John Doe!</h2>
      <div className="Block_Quote">
        <h3 className="Welcome_Quote">
          "Success is not final, failure is not fatal: it is the courage to
          continue that counts."
        </h3>
        <h4 className="Welcome_Quote_Author">
          Quote of the day - Winston Churchill
        </h4>
        <div className="Underline_Greeting"></div>
      </div>
    </div>
  );
};

export default Input;
