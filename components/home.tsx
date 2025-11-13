"use client"

import { useState } from "react"
import AppBar from "./app-bar"
import DrawerMenu from "./drawer-menu"
import DrawerSearch from "./drawer-search"
import Hero from "./hero"
import Carousel from "./carousel"
import Categories from "./categories"
import CtaDark from "./cta-dark"
import Faq from "./faq"
import Footer from "./footer"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="home-container">
      <AppBar onMenuClick={() => setMenuOpen(!menuOpen)} onSearchClick={() => setSearchOpen(!searchOpen)} />
      {menuOpen && <DrawerMenu onClose={() => setMenuOpen(false)} />}
      {searchOpen && <DrawerSearch onClose={() => setSearchOpen(false)} />}

      <main className="home-content">
        <Hero />
        <Carousel />
        <Categories />
        <CtaDark />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
