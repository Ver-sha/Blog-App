import { Link } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "../fireBaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
  let navigate = useNavigate();
  const { authStatus, setAuthStatus } = useAuthContext();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      localStorage.setItem("isAuth", true)
      setAuthStatus({
        ...authStatus, 
        isAuth: true,
        email: user.email,
        name: user.displayName
      });
      navigate("/");
    })
  };

  return (
    <>
      <div className="login">
        <Link to={"/"}> Go Back</Link>
        <span className="loginTitle">Login</span>
        <button className="loginButton" onClick={LoginWithGoogle} >Login</button>
      
      </div>
    </>

  );
}
export default Login;
