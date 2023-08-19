import { CloseIcon, LogoIcon, OpenIcon } from 'Icons'

import { useNavMenuContext } from 'Context'
import { useRef } from 'react'

function Header({ isScrollIn, isScrollOut }: any) {
  const { isNavOpen, toggleNav } = useNavMenuContext()

  const MenuIcon = isNavOpen ? CloseIcon : OpenIcon

  const navRef = useRef<HTMLElement | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)

  const handleNavToggle = () => {
    if (isNavOpen) {
      navRef.current?.classList.add('header__nav--mobile--close')
      setTimeout(toggleNav, 750)
    } else toggleNav()
  }

  
  

  return (
    <header
      ref={headerRef}
      className={`header ${isScrollIn ? 'header--scroll-in' : ''} 
      ${isScrollOut ? 'header--scroll-out' : ''}`}>
      <div className="header__container">
        <nav>
          <a href="/">
            <LogoIcon />
          </a>
        </nav>
        <nav
          ref={navRef}
          className={`header__nav ${isNavOpen ? 'header__nav--mobile--open' : ''}`}>
          <a href="#Pricing" className="header__nav__anchor">Pricing</a>
          <a href="#Product" className="header__nav__anchor">Product</a>
          <a href="#About" className="header__nav__anchor">About Us</a>
          <a href="#Community" className="header__nav__anchor">Community</a>
        </nav>
        <MenuIcon className="header__menu-icon" onClick={handleNavToggle} />
        <button className="header__button button button--primary">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Header
