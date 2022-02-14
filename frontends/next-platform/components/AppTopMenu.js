import { MenuComponent } from '@syncfusion/ej2-react-navigations'

const AppTopMenu = () => {

	const mnuItems = [
		{ text:'Home',url:'/' },
		{ text:'Owners',url:'/owner' },
		{ text:'Projects',url:'/project' }
	]

	return <MenuComponent items={mnuItems} select={el=>console.log(el)} />
}

export default AppTopMenu