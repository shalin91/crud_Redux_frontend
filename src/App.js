import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Components/User/User";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
