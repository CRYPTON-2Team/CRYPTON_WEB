import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Upload from "./page/home/file";
import SignIn from "./page/auth/signIn";

import Main from "./page/home/main";
import { GlobalStyles } from "./style/global";
import UploadMy from "./page/home/upload/my";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/upload/my" element={<UploadMy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
