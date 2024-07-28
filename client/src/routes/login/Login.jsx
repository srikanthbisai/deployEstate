import { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const [error , setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {updateUser} = useContext(AuthContext);



    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        const formData = new FormData(e.target);

        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const res = await apiRequest.post("/auth/login", {
                username,
                password,
            }); 
         updateUser(res.data);
          navigate("/");
        } catch(err) {
            console.log(err);
            setError(err.response.data.message)
        }finally {
          setIsLoading(false);
        }
    };
  return (
    <div className="login">
              <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input name="username" required min={3} max={20}  type="text" placeholder="Username" />
                    <input name="password" required type="password" placeholder="Password" />
                    <button disabled={isLoading}>Login</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} have an account? Sign Up</Link>
 
                </form>
              </div>
              <div className="imgContainer">
                <img src="bg.png" alt="login" />
              </div>
    </div>
  )
}

export default Login
