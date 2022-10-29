
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/DashBoard/Blogs/Blog";
import Contacts from "./Pages/DashBoard/Contact/Contacts";
import MainContent from "./Pages/DashBoard/Content/MainContent";
import DashBoardHome from "./Pages/DashBoard/Home/DashBoardHome";
import Instagram from "./Pages/DashBoard/Instagram/Instagram";
import Orders from "./Pages/DashBoard/Order/Orders";
import Packages from "./Pages/DashBoard/Package/Packages";
import Projects from "./Pages/DashBoard/Projects/Projects";
import Slider from "./Pages/DashBoard/Slider/Slider";
import User from "./Pages/DashBoard/User/User";
import Home from "./Pages/Home/Home";



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dash-board' element={<DashBoardHome />} >
            <Route path='/dash-board/blog' element={<Blog />}></Route>
            <Route path='/dash-board/contact' element={<Contacts />}></Route>
            <Route path="/dash-board/project" element={<Projects />}></Route>
            <Route path="/dash-board/instagram" element={<Instagram />}></Route>
            <Route path="/dash-board/slider" element={<Slider />}></Route>
            <Route path="/dash-board/user" element={<User />}></Route>
            <Route path="/dash-board/package" element={<Packages />}></Route>
            <Route path="/dash-board/main-content" element={<MainContent />}></Route>
            <Route path="/dash-board/order" element={<Orders />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
