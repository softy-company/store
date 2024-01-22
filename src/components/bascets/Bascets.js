import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const Baskets = () => {
	const selected = useSelector(state => state.selected)
  const quantity = useSelector(q => q.quantity)
  
	// const [quantity, setQuantity] = useState()
	const dispatch = useDispatch()
	// console.log(selected)
	let saveCounter = 0
	useEffect(() => {
		save()
	}, [])
	function save() {
		saveCounter++
		console.log(`save() called ${saveCounter} times`)

		const data = JSON.parse(localStorage.getItem('store')) || []
		let obj = {
			value: 'aza',
			id: Date.now()
		}
		data.push(obj)
		localStorage.setItem('store', JSON.stringify(data))
	}

	const handleDelete = productId => {
		dispatch({ type: 'DELETE_SELECTED', payload: { productId } })
	}

	return (
		<div className=''>
			<div
				className='relative overflow-x-auto'
				style={{
					display: selected.length === 0 ? 'none' : 'block'
				}}
			>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Product png
							</th>
							<th scope='col' className='px-6 py-3'>
								Product Name
							</th>
							<th scope='col' className='px-6 py-3'>
								Price
							</th>
							<th scope='col' className='px-6 py-3'>
								quantity
							</th>
							<th scope='col' className='px-6 py-3'>
								Delete
							</th>
						</tr>
					</thead>
					<tbody>
						{selected.map((el, idx) => (
							<tr
								key={el.id}
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
								>
									<img
										className='w-40 h-40 object-contain'
										src={el.image}
										alt=''
									/>
								</th>
								<td className='px-6 py-4 '>{el.title}</td>
								<td className='px-6 py-4'>${el.price}</td>
								<td className='px-7 py-4'>{quantity[el.id] || 0}</td>
								<td className='px-6 py-4'>
									<button
										onClick={() => handleDelete(idx)}
										type='button'
										className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
									>
										<RiDeleteBin6Fill />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Baskets
