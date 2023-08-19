import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { BASEURL } from "../helper";

function Myposts() {
  const [data, setdata] = useState([]);

  let useridd = window.localStorage.getItem("userid");
  const [cookies, Setcookiet] = useCookies(["access_token"]);
  const [, Setcookie] = useCookies(["name"]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {

        const response = await axios.get(`${BASEURL}/posts/mypost/${useridd}`, {
          headers: { authorization: cookies.access_token }
        });
// >>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
        setdata(response.data.response);
      } catch (error) {
        navigate("/auth/login");
      }
    };

    fetchdata();
  }, [data]);

  const logout = () => {
    Setcookiet("access_token", "");
    Setcookie("name", "");
    window.localStorage.removeItem("useridd");
    window.localStorage.removeItem("name");
    navigate("/");
  };

  return (
    <div className="background">
      <nav class="navbar navbar-expand-lg bg-body-tertiary px-5 navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/posts/Home">
            Daily-Journels
          </a>

          <div>
            <ul class="navbar-nav">
              <li class="nav-item px-5" className="nav-link">
                <Link
                  to={`/posts/Home`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Home</b>
                </Link>
              </li>
              <li class="nav-item p-5 " className="nav-link">
                <Link
                  to={`/posts/mypost/${useridd}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Myposts</b>
                </Link>
              </li>
              <li class="nav-item p-5 " className="nav-link">
                <Link
                  to={`/posts/fav/${useridd}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Favroites</b>
                </Link>
              </li>
              <li class="nav-item px-5" className="nav-link">
                <b onClick={logout} style={{ cursor: "pointer", font: "bold" }}>
                  logout
                </b>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="posts">
        {data.length === 0 ? (
          <h1>No Posts</h1>
        ) : (
          data.map((item) => (
            <div
              className="singlepost shadow  bg-#aaa8a7 rounded"
              key={item.id}
            >
              <Post item={item} mypost={true} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Myposts;
