import React from "react";

// Destructure the prop 'onDarkModeClick' so the test can call it
function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>My Shopping List</h1>
      {/* The test looks for the text "Mode", so we include it here */}
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;