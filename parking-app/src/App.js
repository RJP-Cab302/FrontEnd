import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import LandingPage from './pages/landing/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about/aboutpage';
import SignUp from './pages/signup/signuppage';
import ListingPage from './pages/listing/listingpage';
import Home from './pages/home/homepage';
import LoginPage from './pages/login/loginpage';
import BookingPage from './pages/booking/booking_page';
import UserProfilePage from './pages/userprofile/userprofilepage';
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
		      <Route path="/book" element={<BookingPage />} />
		      <Route path="/user" element={<UserProfilePage />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
