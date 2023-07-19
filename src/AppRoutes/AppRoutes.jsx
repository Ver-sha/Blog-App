import { Route, Routes, } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AddBlog from "../pages/AddBlog/AddBlog";


const AppRoutes = () => {

  return (
  <Routes>

    <Route path='/login' element= {<Login />} />
    <Route path='/' element={<Home />} />
    <Route path='/add-your-blog' element={<AddBlog />} />
  </Routes>
  )
}

export default AppRoutes;