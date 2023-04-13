import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import LandingPage from './pages/landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/aboutpage';
import SignUp from './pages/signuppage';
function App() {

  return (
     <BrowserRouter>
     <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />


      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
