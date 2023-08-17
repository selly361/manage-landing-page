import { INavMenuContext, INavMenuProps } from './NavMenu.types'
import { createContext, useContext, useEffect, useState } from 'react'

const navMenuContext = createContext<INavMenuContext>({
	isDesktop: false,
	isNavOpen: false,
	toggleNav: () => {},
})

function NavMenuProvider({ children }: INavMenuProps) {
	const [isDesktop, setIsDesktop] = useState(false)
	const [isNavOpen, setIsNavOpen] = useState(false)

	const toggleNav = () => setIsNavOpen((e) => !e)

	useEffect(() => {
		const handleResize = () => setIsDesktop(window.innerWidth > 768)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (isDesktop) {
			setIsNavOpen(false)
		}

        if(isNavOpen){
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }

	}, [isNavOpen, isDesktop])

	return (
		<navMenuContext.Provider
			value={{
				isDesktop,
				isNavOpen,
				toggleNav,
			}}
		>
			{children}
		</navMenuContext.Provider>
	)
}

export const useNavMenuContext = () => useContext(navMenuContext)

export default NavMenuProvider
