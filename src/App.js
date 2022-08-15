import './App.css';
import Login from './componenet/LoginPage/Login';
import SignUp from './componenet/SignUp/SignUp';
// import TopBar from './componenet/TopBar/TopBar';s

// import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    {/* <TopBar/>     */}


    <Routes>
    <Route path="/Login" exact element={<Login/>} />

    <Route path="/SignUp" exact element={<SignUp/>} />

      {/* <Home/> */}
     
      

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
