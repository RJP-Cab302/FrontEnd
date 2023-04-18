import "./navbar.css"
import { Link } from "react-router-dom";
// navigation links
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
           <Link to="/home"> Home </Link>
        </li>
        <li>
           <Link to="/listing"> Listings </Link>
        </li>
        <li>
           <Link to="/book"> Book </Link> 
        </li>
        <li>
           <Link to="/about"> About </Link>
        </li>
      </ul>
    </nav>
  );
}