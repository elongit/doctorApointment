import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import AuthHeader from "./components/authHeader";
import Contact from "./pages/contact";
import DoctorList from "./pages/doctorsList";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();


  return (
    <>
      
      {location.pathname === '/login' || location.pathname === '/signUp' ? (
        <AuthHeader />
      ) : (
        <Header />
      )}
      
      <main className="p-3 md:p-5 ">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/doctorsList" element={<DoctorList/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
