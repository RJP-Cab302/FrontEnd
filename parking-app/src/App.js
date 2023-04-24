import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import LandingPage from './pages/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/aboutpage';
import SignUp from './pages/signuppage';
import Login from './components/Login';
import ListingPage from './pages/listingpage';
import BookingPage from './pages/booking_page';

function App() {
  return (
     <BrowserRouter>
     <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/listing" element={<ListingPage />} />
      <Route path="/login" element={<Login />} />
	  <Route path="/book" element={<BookingPage />} />

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
