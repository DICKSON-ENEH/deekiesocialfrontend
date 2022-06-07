import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Detailscreen from "./components/Profile/Detailscreen"
const App=()=> {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
     <Route path = "/" element ={<Home/>}/>
     <Route path = "/detail" element ={<Detailscreen/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
