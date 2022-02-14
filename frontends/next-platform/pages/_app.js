import { SidebarComponent } from '@syncfusion/ej2-react-navigations'

import { AppTopMenu } from '../components'

import '../node_modules/@syncfusion/ej2-base/styles/material.css'
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css'
import '../styles/globals.css'


const App = ({ Component, pageProps }) => {
	return (
		<div id="wrapper">
			<div>
				<SidebarComponent>
					<div></div>		
				</SidebarComponent>
			</div>

			<div>
				<AppTopMenu />
				<Component {...pageProps} />
			</div>
		</div>
	)
}

export default App

/**
 * <div>
				head!
			</div>
			<div>
				<AppTopMenu />
				<Component {...pageProps} />
			</div>
 */