import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import AuthHeader from "./components/AuthHeader";

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
      
      <main className="p-3 md:p-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
