import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Detailscreen from "./components/Profile/Detailscreen"
import Register from "./components/Auth/Register"
import Signin from "./components/Auth/Signin"
import NewPassword from "./components/Auth/NewPassword";
import ConfirmEmailVerification from "./components/Auth/ConfirmEmailVerification";
// import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";
// import NewPassword from "./components/Auth/NewPassword";
const App=()=> {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path = "/" element ={<Home/>}/>
     <Route path = "/signin" element ={<Signin/>}/>
     <Route path = "/register" element ={<Register/>}/>
     <Route path = "/detail" element ={<Detailscreen/>}/>
     <Route path="/requestReset" element={<ResetPassword />} />
     <Route path="/newPassword" element={<NewPassword />} />
     <Route
					path="/api/user/token/:id/:token"
					element={<ConfirmEmailVerification />}
				/>
        <Route path="/api/user/reset/:id/:token" element={<NewPassword />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
