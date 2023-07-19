import { Link } from "react-router-dom";
import "./AddBlog.css";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

const AddBlog = () => {
  const { authStatus } = useAuthContext();
  const userLogIn = authStatus.isAuth;
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const postCollectionRef = collection(db, "new-post");
  let navigate = useNavigate();
  const createPost = async () => {
    console.log("createpost done.....");
    await addDoc(postCollectionRef, {
      title, postContent, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/");
  }

  useEffect(() => {
    if (!userLogIn ) {
      navigate("/login");
    }
  },[])
  

//   (()=>{
//     console.log("imeediately function run");
//   })
// ()
  return (
    <>
      <div className="write">
        <Link to={"/"}> Go Back</Link>

        <div>
          <div className="writeFormGroup">
            <label htmlFor="label">
              Title
            </label>

            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              onChange={(e) => {setTitle(e.target.value) }}
            />
          </div>
          <div className="writeFormGroup">
            <label htmlFor="label">
              Message
            </label>
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              onChange={(e) => {setPostContent(e.target.value) }}

            />
          </div>
          <button onClick={createPost} className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </div>
    </>

  );
}
export default AddBlog;

