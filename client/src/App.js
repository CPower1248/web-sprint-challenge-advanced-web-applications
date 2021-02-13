import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"
import PrivateRoute from "./utils/PrivateRoute"

import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import "./styles.scss";

const initialLoginForm = {
  credentials: {
    username: "",
    password: ""
  }
}

function App() {
  const [ loginForm, setLoginForm ] = useState(initialLoginForm)
  // const { push } = useHistory()

  const handleChange = e => {
    setLoginForm({
      credentials: {
        ...loginForm.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/login", loginForm.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        window.location.href="/protected";
        setLoginForm(initialLoginForm)
      })
  }

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={handleChange} value={loginForm.username} />
          <input type="password" name="password" placeholder="password" onChange={handleChange} value={loginForm.password} />
          <button>submit</button>
        </form>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/protected" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
