import React, { useState } from "react";
import Modalops from "./Modalops";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useCookies } from "react-cookie";
import { BASEURL } from "../helper";
function Post({ item, mypost }) {
  const [cookies, Setcookiet] = useCookies(["access_token"]);
  const [singlepost,setsinglepost]=useState();
  const [open, setopen] = useState(false);
  const handledeletepostid = async (postid) => {
    const fetchPosts = async () => {
      try {
<<<<<<< HEAD
        await axios.delete(`${BASEURL}/posts/delete/${postid}`);
=======
        await axios.delete(`${BASEURL}/posts/delete/${postid}`, {
          headers: { authorization: cookies.access_token },
        });
>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
      } catch (error) {}
    };
    fetchPosts();
  };
  const handleedit = async(myid) => {
    window.localStorage.setItem("postid", myid);

    // let id = window.localStorage.getItem("postid");
    const editdata = await axios.get(
      `${BASEURL}/posts/update/${myid}`
    );
    // console.log(editdata.data);
    setsinglepost(editdata.data.singlePost[0]);
   await setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };
  const handlecancel = () => {
    setopen(false);
  };
  const handlepost = (postAr) => {
    
  };
<<<<<<< HEAD
  const date = new Date(item.date);
  const options = { month: 'long', day: 'numeric', year: 'numeric',hour: '2-digit',
  minute: '2-digit',
  second: '2-digit', };
    const formattedDate = date.toLocaleDateString(undefined, options);
=======
  
>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602

  return (
    <>
      <div>
        <h1>{item.title}</h1>
        <p>{item.post}</p>
        <h6 style={{ float: "right", marginRight: "10%" }}>-{item.author}</h6>
<<<<<<< HEAD
        <h6>{formattedDate}</h6>
=======
        <h6>{item.date}</h6>
>>>>>>> a34dad6790b20306130c0bd988b1ae6db461d602
        <div className="icons d-flex py-3">
        {mypost ? (
          <p  className="px-3" onClick={() => handledeletepostid(item._id)}><DeleteIcon /></p>
        ) : (
          <p> </p>
        )}
        {mypost ? <p className="px-2" onClick={() => handleedit(item._id)}><EditIcon /></p> : <p> </p>}
        </div>
        <Modalops
          open={open}
          handleclose={handleclose}
          handlecancel={handlecancel}
          handlePostData={handlepost}
          singlepost={singlepost}

        />
      </div>
    </>
  );
}

export default Post;
