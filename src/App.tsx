import {Route, BrowserRouter, Routes} from "react-router-dom"
import './App.css';
import Upload from "./page/home/file";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
