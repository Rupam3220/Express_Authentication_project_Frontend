import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginRegister from "./components/pages/auth/LoginRegister";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="loginreg" element={<LoginRegister/>} />
            <Route path="send-password-reset-email" element={<SendPasswordResetEmail/>} />
            <Route path="reset-password" element={<ResetPassword/>} />
          </Route>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="*" element={<h1>Error 404, Page not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
