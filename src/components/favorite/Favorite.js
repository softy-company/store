import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { SlBasket } from 'react-icons/sl'

const Favorite = () => {
	const favorite = useSelector(f => f.favorite)
	console.log(favorite)
	const dispatch = useDispatch()
	// useDispatch()
	const handleDelete = productId => {
		dispatch({ type: 'DELETE_FAVORITE', payload: { productId } })
		// count === 0
	}
	// const fav = useSelector(fav => fav.favorite)
	// const arr = [fav]
	// console.log(arr)
	// console.log(fav)
	return (
		<div className='flex items-center ml-10 flex-wrap gap-5 pt-5'>
			{favorite.map((el, idx) => (
				<div className='card ml-10 relative' key={el.id}>
					<a
						href='#'
						className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
					>
						<Link to={`/details/${el.id}`}>
							<img
								className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
								src={el.image}
								alt={el.title}
							/>
						</Link>

						<div className='flex flex-col justify-between p-4 items-start leading-normal'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								{el.title}
							</h5>
							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								{el.description}
							</p>
							<h5>
								<span className='mr-2 text-[#A9A9A9]'>Price:</span>
								{el.price}
							</h5>
							<button
								onClick={() => {
									// toggleChange(el.id)
									// quantityChange(el.id)
									// local()
									// setIcon(!icon)
								}}
								className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 mt-10 border-b-4 border-blue-700 hover:border-blue-500 rounded'
							>
								<SlBasket />
							</button>
							<h1
								onClick={() => {
									handleDelete(idx)
								}}
								className='absolute text-red-500 top-0 right-2 font-mono text-4xl rotate-45'
							>
								+
							</h1>
						</div>
					</a>
				</div>
			))}
		</div>
	)
}

export default Favorite
