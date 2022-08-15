import "./App.css";
import Login from "./componenet/LoginPage/Login";
import SignUp from "./componenet/SignUp/SignUp";

// import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      {/* <TopBar/>     */}

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
