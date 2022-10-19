import { useState } from "react"
import { Footer } from "./Footer"
import { MobileMenu } from "./MobileMenu"
import { Navbar } from "./Navbar"

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="container">
      <MobileMenu show={showMenu} close={() => setShowMenu(false)} />
      <header>
        <Navbar openMenu={() => setShowMenu(true)} />
      </header>
      <main className="container md:px-16 px-6">{children}</main>
      <Footer />
    </div>
  )
}
