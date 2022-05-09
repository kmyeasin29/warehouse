import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddItem from "./Pages/addItem/AddItem";
import ManageItem from "./Pages/ManageItem/ManageItem";
import ManageCar from "./Pages/ManageCar/ManageCar";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/ManageItem' element={<ManageItem></ManageItem>}></Route>
        {/* <Route path='/Extra' element={<Extra></Extra>}></Route> */}
        <Route path="/AddItem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/ManageCar" element={
          <RequireAuth>
            <ManageCar></ManageCar>
          </RequireAuth>
        }></Route>
        <Route path='/Inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
