import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Product from './components/product/Product'
import Favorite from './components/favorite/Favorite'
import Details from './components/Details'
import Bascets from './components/bascets/Bascets'
import { useSelector } from 'react-redux'

function App() {
	const { theme } = useSelector(t => t)
	// console.log(theme)
	return (
		<div
			style={{
				background: theme ? 'black' : 'white'
			}}
			className='App'
		>
			<Header />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/product' element={<Product />} />
				<Route path='/favorite' element={<Favorite />} />
				<Route path='/bascets' element={<Bascets />} />
				<Route path='/details/:id' element={<Details />} />
				{/* <Route path='basket/:bascet' element={<bas />} /> */}
			</Routes>
			{/* <Home /> */}
		</div>
	)
}

export default App
