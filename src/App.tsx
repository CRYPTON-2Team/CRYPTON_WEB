import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Upload from "./page/home/file";
import SignIn from "./page/auth/signIn";
import SignUp1 from "./page/auth/signUp/signUp1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp1 />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
