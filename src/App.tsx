import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./page/auth/signIn";
import Main from "./page/home/main";
import { GlobalStyles } from "./style/global";
import UploadMy from "./page/home/upload/my";
import SignUp1 from "./page/auth/signUp/signUp1";
import SignUp2 from "./page/auth/signUp/signUp2";
import SignUp3 from "./page/auth/signUp/signUp3";
import SignUp4 from "./page/auth/signUp/signUp4";
import Search from "./components/modal/Search";
import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider as CryptonClientProvider } from "react-query";
import UploadComplete from "./page/home/upload/my/upload-complete";

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      })
  );
  return (
    <CryptonClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/signup3" element={<SignUp3 />} />
          <Route path="/signup4" element={<SignUp4 />} />
          <Route path="/components" element={<Search />} /> 
          <Route path="/" element={<Main />} />
          <Route path="/upload/my" element={<UploadMy />} />
          <Route path="/upload/complete" element={<UploadComplete />} />
        </Routes>
      </BrowserRouter>
    </CryptonClientProvider>
  );
}

export default App;
