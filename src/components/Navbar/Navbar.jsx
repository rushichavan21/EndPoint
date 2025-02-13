import React from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsopen] = React.useState(0);
  function toggle() {
    setIsopen(!isOpen);
  }
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="navbar--container container">
      <div className="navbar--title">
        <img
          src="/logo.svg"
          alt="logo"
        />
        <h1>EndPoint</h1>
      </div>
      {isOpen ? (
        <div className="nav-toggle-div">
          <button onClick={toggle}>
            <FaTimes />
          </button>
        </div>
      ) : (
        <div className="nav-toggle-div">
          <button onClick={toggle}>
            <FaBars />
          </button>
        </div>
      )}

      <div
        className={`navbar--navigation ${isOpen ? "active" : ""}`}
        ref={navbarRef}
      >
        <ul>
          <button>Services</button>

          <button>Our Achievements</button>

          <button>About Us</button>

          <button id="contactBtn">Contact Us</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
