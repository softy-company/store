import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Router } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { store } from './components/redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
// const {theme} = useSelector(t => t)
// console.log(theme);
// console.log(root)
// root.style.background =

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)

reportWebVitals()
