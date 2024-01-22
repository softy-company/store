import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { CiLight } from 'react-icons/ci'

const Header = () => {
	const { selected } = useSelector(s => s)
	const { favorite } = useSelector(f => f)
	const { theme } = useSelector(t => t)

	const dispatch = useDispatch()

	const darknode = () => {
		dispatch({ type: 'THEME', payload: !theme })
	}
	// console.log(theme)

	return (
		<div>
			<nav className='bg-white border-gray-200 dark:bg-gray-900'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<a
						href='https://flowbite.com/'
						className='flex items-center space-x-3 rtl:space-x-reverse'
					>
						<img
							src='https://flowbite.com/docs/images/logo.svg'
							className='h-8'
							alt='Flowbite Logo'
							style={{
								color: 'white'
							}}
						/>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white '>
							Flowbite
						</span>
					</a>
					<button
						data-collapse-toggle='navbar-default'
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='navbar-default'
						aria-expanded='false'
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>

					<div
						className='header hidden w-full md:block md:w-auto'
						id='navbar-default'
					>
						<NavLink to={'/home'}>Home</NavLink>
						<NavLink to={'/product'}>Product</NavLink>
						<NavLink to={'/favorite'}>
							Favorite
							{favorite.length === 0 ? null : (
								<h1
									style={{
										position: 'absolute',
										right: '355px',
										top: '8px'
									}}
									className='rounded-full flex items-center justify-center h-6 w-6 bg-red-500 '
								>
									{favorite.length}
								</h1>
							)}
						</NavLink>
						<NavLink to={'/bascets'}>
							Bascet
							{selected.length === 0 ? null : (
								<h1
									style={{
										position: 'absolute',
										right: '256px',
										top: '8px'
									}}
									className='rounded-full flex items-center justify-center h-6 w-6 bg-red-500 '
								>
									{selected.length}
								</h1>
							)}
						</NavLink>
					</div>
					<button
						onClick={darknode}
						className='text-white text-2xl '
						type='button'
					>
						<CiLight />
					</button>
				</div>
			</nav>
		</div>
	)
}

export default Header
