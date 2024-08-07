import {Route, BrowserRouter, Routes} from "react-router-dom"
import './App.css';
import Upload from "./page/home/file";
import SignIn from "./page/auth/signIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
