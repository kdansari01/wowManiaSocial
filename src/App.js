import "./App.css";
import Login from "./componenet/LoginPage/Login";
import SignUp from "./componenet/SignUp/SignUp";

// import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyPost from "./componenet/MyPost/MyPost";
import { useEffect } from "react";
import { customFetch } from "./utils/customFetch";
import { useDispatch } from "react-redux";
import { setUser } from "./componenet/LoginPage/action";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      (async function(){
        const isLoggedIn = !!localStorage.getItem("token");
        if (isLoggedIn) {
          const userData = await customFetch({
            url: `private/user/getUser`,
            isPrivate: true,
          });
          dispatch(setUser(userData.user))
        }
      })()
  }, [])

  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/myPost" exact element={<MyPost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
