import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import LandingPage from './pages/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/aboutpage';
import SignUp from './pages/signuppage';
import ListingPage from './pages/listingpage';
import Home from './pages/homepage';
import LoginPage from './pages/loginpage';
import UserProfilePage from './pages/userprofile';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/vehicles" element={<ListingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserProfilePage />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
