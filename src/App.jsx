import { useState } from "react";
import axios from "axios";
import "./assets/style.css";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

function App() {
  const [formData, setFormData] = useState({
    username: "min82814@gmail.com",
    password: "",
  });
  const [isAuth, setIsAuth] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({ ...preData, [name]: value }));
  };
  return (
    <>
      {!isAuth ? (
        <div className="container login">
          <h1>請登入</h1>
          <form className="form-floating ">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="username"
                placeholder="name@example.com"
                value={formData.username}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="username">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              onClick={() => {}}
            >
              登入
            </button>
          </form>
        </div>
      ) : (
        <div className="container">已登入</div>
      )}
    </>
  );
}

export default App;
