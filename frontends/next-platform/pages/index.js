import { MenuComponent } from '@syncfusion/ej2-react-navigations'

const Home = () => {

	const mnuItems = [
		{ text:'Home' },
		{ text:'Owners' },
		{ text:'Projects' }
	]

	return <MenuComponent items={mnuItems} />
}

export default Home