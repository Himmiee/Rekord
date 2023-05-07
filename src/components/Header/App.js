import './app.css';
import { useRef } from 'react';
import { Link as Link1 } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaBars , FaTimes} from 'react-icons/fa';

const App = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className="wrap" id='main'>
    <header>
      <nav ref={navRef}>
      <a href="#" id="logo">Rekord<span>-NAU</span></a>
      <ul>
        <li><Link to="main" spy={true} offset={-100} duration={500} className="txt">Section</Link></li>
        <li><Link to="about" spy={true} offset={-100} duration={500} className="txt">About</Link></li>
        <li><Link to="testimonial" spy={true} offset={-100} duration={500} className="txt">Testimonies</Link></li>
      </ul>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
      <FaTimes />
    </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
    </header>
   <center>
   <h1>THE REKORD JOURNEY</h1>
    <div id="line-container"><div id="line"></div></div>
    <p>
      Press the button below to proceed to the screen <br />
       recorder on the Rekord-now website.
    </p>
    <Link1 to='/record'><button id="brown-Btn">Record Now</button></Link1>

   </center>
    </div>

  );
}

export default App;
