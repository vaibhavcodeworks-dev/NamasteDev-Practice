import React, { useEffect, useState } from 'react';
import './styles.css'

function DarkModeToggle() {
  const [currentMode, setCurrentMode] = useState(true)
  const styles = currentMode ? 'light-mode' : 'dark-mode'

  return (
    <div className={`container ${styles}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox"
            checked={currentMode}
            onChange={(e) => setCurrentMode(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{currentMode ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;