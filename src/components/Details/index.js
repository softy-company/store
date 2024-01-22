import React from 'react'
import { data } from '../data'
import { useParams } from 'react-router-dom'
import { logDOM } from '@testing-library/react'
import Product from '../product/Product'

const Details = () => {
	// console.log(data)
	const { id } = useParams()
	// console.log(id)
	const ProductDetails = data.find(el => el.id == id)
	// console.log(product)
	return (
		<div className='flex items-center justify-center pt-2 pb-5 rounded-xl'>
			<div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5'>
				<a href='#'>
					<img class='rounded-t-lg' src={ProductDetails.image} alt='' />
				</a>
				<div class='p-5'>
					<a href='#'>
						<h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
							{ProductDetails.title}
						</h5>
					</a>
					<p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						{ProductDetails.description}
					</p>
					<h5 className='text-white mb-5'>
						<span className='mr-2 text-[#A9A9A9] '>Price:</span>
						{ProductDetails.price}
					</h5>
					<a
						href='#'
						class='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Read more
						<svg
							class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Details
