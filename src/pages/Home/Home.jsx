import TopNav from "../../Components/TopNav/TopNav";
import Header from "../../Components/Header/Header";
import Blog from "../../Components/Blog/Blog";
// import {React , useState} from "react";
// import EmptyList from "../../Components/EmptyList/EmptyList";
// import blogData from "../../Components/Data/BlogData";


const Home = () => {
  // const [blogs, setBlogs] = useState(blogData);
  // const [searchKey, setSearchKey] = useState('');

  // // Search submit
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  //   handleSearchResults();
  // };

  // // Search for blog by category
  // const handleSearchResults = () => {
  //   const allBlogs = blogData;
  //   const filteredBlogs = allBlogs.filter((blog) =>
  //     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
  //   );
  //   setBlogs(filteredBlogs);
  // };

  // // Clear search and show all blogs
  // const handleClearSearch = () => {
  //   setBlogs(blogData);
  //   setSearchKey('');
  // };



  return (
    <div>
      <TopNav />
      <Header />
      <Blog />
    
    </div>
  )
}

export default Home;