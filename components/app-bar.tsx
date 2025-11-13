"use client"

interface AppBarProps {
  onMenuClick: () => void
  onSearchClick: () => void
}

export default function AppBar({ onMenuClick, onSearchClick }: AppBarProps) {
  return (
    <header className="appbar">
      <div className="appbar-container">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">nemuinaja</span>
        </div>
        <div className="appbar-actions">
          <button className="icon-btn" aria-label="Search" onClick={onSearchClick}>
            🔍
          </button>
          <button className="icon-btn hamburger" aria-label="Menu" onClick={onMenuClick}>
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
