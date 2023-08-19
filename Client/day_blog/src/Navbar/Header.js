import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
function Header() {
    let userid = window.localStorage.getItem("userid");
    const [cookies, Setcookiet] = useCookies(["access_token"]);
    const [, Setcookie] = useCookies(["name"]);
    let navigate = useNavigate();
    const logout = () => {
        Setcookiet("access_token", "");
        Setcookie("name", "");
        window.localStorage.removeItem("userid");
        window.localStorage.removeItem("name");
        
        navigate("/");
      };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary px-5 ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/posts/Home">
            Daily-Journels
          </a>

          <div>
            <ul class="navbar-nav">
            
              
              <li class="nav-item px-5 py-3" className="nav-link">
                <Link
                  to={`/posts/mypost/${userid}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Favorites</b>
                </Link>
              </li>
              
              <li class="nav-item px-5 py-3" className="nav-link">
                <b onClick={logout} style={{ cursor: "pointer", font: "bold" }}>
                  logout
                </b>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
