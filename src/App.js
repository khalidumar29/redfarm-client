import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import SignIn from "./Pages/Login/SignIn/SignIn";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import NotFound from "./Shared/NotFound/NotFound";
import Inventory from "./Pages/Inventory/Inventory";
import { Toaster } from "react-hot-toast";
import RequiredAuth from "./Shared/RequiredAuth/RequiredAuth";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import AddNewItems from "./Pages/AddNewItems/AddNewItems";
import MyItems from "./Pages/MyItems/MyItems";
const App = () => {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route
          path='/inventory'
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path='/inventory/:id'
          element={
            <RequiredAuth>
              <ProductDetails />
            </RequiredAuth>
          }
        ></Route>
        <Route
          path='/manageinventories'
          element={
            <RequiredAuth>
              <ManageInventories></ManageInventories>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path='/addnewitems'
          element={
            <RequiredAuth>
              <AddNewItems></AddNewItems>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path='/myitems'
          element={
            <RequiredAuth>
              <MyItems></MyItems>
            </RequiredAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default App;
