import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import "./modalops.css";
import axios from "axios";
import { BASEURL } from "../helper";

function Modalops({
  open,
  handleclose,
  handlecancel,
  handlePostData,
  home,
  singlepost,
})

// let id = window.localStorage.getItem("postid");
 {
  let name = window.localStorage.getItem("name");
  let [postText, setpostText] = useState([
    {
      title: "",
      post: "",
    },
  ]);
  let [finalpost, setfinalpost] = useState([]);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setpostText((prevPostText) => ({
      ...prevPostText,
      [name]: value,
    }));
  };
  // console.log(id);
  
  useEffect(() => {
    if (!home&&singlepost!==undefined) {
      setpostText({
        title: singlepost.title,
        post: singlepost.post,
      });
    }
  }, [singlepost]);

  const handlePost = () => {
    postText = [...finalpost, postText];
    setfinalpost(postText);
    setpostText("");
    handleclose();
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if(home){
    axios.post(`${BASEURL}/posts/Home`, {
<<<<<<< HEAD
      title: postText.title,
      post: postText.post,
      author: window.localStorage.getItem("name"),
      owner:window.localStorage.getItem("userid"),
    });
  }
  else{
    let myid= window.localStorage.getItem("postid");
    axios.patch(`${BASEURL}/posts/update/${myid}`, {
=======
>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
      title: postText.title,
      post: postText.post,
      author: window.localStorage.getItem("name"),
    });
  }
<<<<<<< HEAD
=======
  else{
    let myid= window.localStorage.getItem("postid");
    axios.patch(`${BASEURL}/posts/update/${myid}`, {
      title: postText.title,
      post: postText.post,
      author: window.localStorage.getItem("name"),
    });
  }
>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
    handlePost();
    handleclose();
  };


  useEffect(() => handlePostData(finalpost), [finalpost]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modals">
          <div className="modalcontent">
            <div className="navb">
              <div className="left">
                <div className="name">
                  <h1>
                    <b>Hi ,{name}</b>
                  </h1>
                  <p className="para">Start Writing anything</p>
                </div>
              </div>
              <div className="right">
                <button onClick={handlecancel}>close</button>
              </div>
            </div>

            <div className="Maincontainer">
              <form onSubmit={handlesubmit}>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  value={postText.title}
                  onChange={handlechange}
                  className="input"
                />
                <textarea
                  type="text"
                  rows={20}
                  placeholder="What do you want to talk about ?"
                  name="post"
                  value={postText.post}
                  onChange={handlechange}
                  className="input"
                />
                <button type="submit">Post</button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Modalops;
