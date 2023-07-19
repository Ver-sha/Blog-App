import { Link } from 'react-router-dom';
import "./TopNav.css";
import { useAuthContext } from '../../context/AuthContext/AuthContext';
import { auth } from '../../pages/fireBaseConfig';
import { signOut } from 'firebase/auth';



const TopNav = () => {
  const { authStatus } = useAuthContext();
  const userLogIn = authStatus.isAuth;

  const LogOut = () => {
   signOut(auth).then(()=>{
      localStorage.clear();
      // setAuthStatus(false);
      window.location.pathname="/login"
    })
  }
  return (

    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        </ul>
      </div>
      {!userLogIn ? (
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/add-your-blog">
              ADD YOUR BLOG
            </Link>
            </li>
            <li className="topListItem">
            <Link className="link" onClick={LogOut}>   
          LOGOUT
          </Link>
            </li>
          </ul>
        </div>
      )
      }


    </div>
  );
}

export default TopNav;
