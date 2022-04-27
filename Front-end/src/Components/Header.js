import React from "react"; // Import the React module from React.
import "../App.css"; // Import App stylesheet.

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.jpg"; // Import logo.

// Navbar imported from react-bootstrap.
function Display() {
  return (
    <div id="header">
      <header>
        <img className="image" alt="itunes logo" src={logo} />{" "}
        {/* Displays logo in header. */}
      </header>
    </div>
  );
}

export default Display; // Export Display component.
