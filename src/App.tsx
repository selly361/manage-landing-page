import { AboutSection, Header } from 'Layout'

import { Fragment } from 'react'
import { useNavMenuContext } from 'Context'
import useStickyNav from 'Hooks/useStickyHeader'

function App() {
  const { isNavOpen } = useNavMenuContext()

  const { isScrollIn, isScrollOut, containerRef } = useStickyNav()


  return (
    <Fragment>
      <Header isScrollIn={isScrollIn} isScrollOut={isScrollOut} />
      {isNavOpen ? <div className="overlay" /> : null}
      <main ref={containerRef} className="main">
        <AboutSection />
      </main>
    </Fragment>
  )
}

export default App
