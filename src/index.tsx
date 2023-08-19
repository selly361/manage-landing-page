import 'Styles/index.scss'

import App from './App'
import { NavMenuProvider } from 'Context'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<StrictMode>
		<NavMenuProvider>
			<App />
		</NavMenuProvider>
	</StrictMode>
)
