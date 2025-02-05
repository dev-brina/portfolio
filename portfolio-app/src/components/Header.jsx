import React from 'react'

const Header = () => {
  return (
    <header className="px-4 py-4 border-b border-slate-800 sticky top-0">
        <div id="header-content" className="flex flex-col max-w-screen-lg mx-auto">
            <span>Hello, I'm</span>
            <h1>Sabrina Jackson</h1>
            <span>Software Engineer</span>
        </div>
    </header>
  )
}

export default Header