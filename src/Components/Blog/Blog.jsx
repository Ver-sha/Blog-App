import React, { useEffect, useState } from "react";
import "./Blog.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../pages/fireBaseConfig";


const Blog = () => {
  const [search, setSearch] = useState("");
  const [postList, setPostList] = useState([]);
  const postCollectionRef = collection(db, "new-post");

  useEffect(() => {
    const getPosts = async () => {
      debugger
      const data = await getDocs(postCollectionRef);
      const tempDoc = data.docs.map((doc) => {
        debugger
        return { ...doc.data(), id: doc.id }
      });
      console.log(tempDoc , "tempdoc");
      setPostList(tempDoc);
    }
    getPosts();
  }, [])

  const deletePost = async (id) => {
    const postDoc = doc(db, "new-post", id)
    await deleteDoc(postDoc);
  }

  return (
    <div className="blog-wrapper">
      <input
        className='input'
        type='text'
        placeholder='Search By Title'
        onChange={(e) => setSearch(e.target.value)}

      />
      {postList.filter((post) => {
        debugger
        return search.toLowerCase() === ''
          ? post
          : post.title.toLowerCase().includes(search);
      }).map((post) => {
        debugger
        return (
          <>
            <div className="post" key={post.id}>
              <button className="dlt-btn" onClick={() => deletePost(post.id)} type="submit"> &#128465; </button>
              <div className="post-title">
                <h1>{post.title}</h1>
              </div>
              <div className="post-text-container">
                <p>{post.postContent}</p>
              </div>
              <div className="post-title">
                <h3>{post.author.name}</h3>
              </div>
            </div>

          </>
        )
      }
      )
      }
    </div>
  )
};

export default Blog;