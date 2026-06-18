import React from 'react'
import './Toolbar.css'

export default function Toolbar({ darkMode, setDarkMode, fontSize, setFontSize }) {
  const sizes = ['small', 'medium', 'large', 'xlarge']

  const decrease = () => {
    const idx = sizes.indexOf(fontSize)
    if (idx > 0) setFontSize(sizes[idx - 1])
  }

  const increase = () => {
    const idx = sizes.indexOf(fontSize)
    if (idx < sizes.length - 1) setFontSize(sizes[idx + 1])
  }

  return (
    <div className="toolbar">
      {/* Font size */}
      <div className="toolbar-group">
        <button
          className="toolbar-btn"
          onClick={decrease}
          disabled={fontSize === 'small'}
          title="Decrease font size"
        >
          A-
        </button>
        <span className="toolbar-label">A</span>
        <button
          className="toolbar-btn"
          onClick={increase}
          disabled={fontSize === 'xlarge'}
          title="Increase font size"
        >
          A+
        </button>
      </div>

      {/* Divider */}
      <div className="toolbar-divider" />

      {/* Dark mode */}
      <button
        className={`toolbar-toggle ${darkMode ? 'toolbar-toggle--active' : ''}`}
        onClick={() => setDarkMode(!darkMode)}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="toolbar-toggle-icon">{darkMode ? '☀️' : '🌙'}</span>
        <span className="toolbar-toggle-label">{darkMode ? 'Light' : 'Dark'}</span>
      </button>
    </div>
  )
}