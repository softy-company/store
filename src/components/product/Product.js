import React, { useState, useEffect } from 'react'

const Product = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [local, setLocal] = useState(() => {
		return JSON.parse(localStorage.getItem('test')) || []
	})

	useEffect(() => {
		localStorage.setItem('test', JSON.stringify(local))
	}, [local])

	function getLocal() {
		let obj = {
			Email: email,
			Password: password
		}

		setLocal(prevLocal => [...prevLocal, obj])

		setEmail('')
		setPassword('')
		if (email.trim() === '' || password.trim() === '') {
			alert('error')
			// setLocal('')
		}
	}
	console.log(local)

	return (
		<div className='flex items-center justify-center flex-col mt-10 gap-5 '>
			<input
				onChange={e => setEmail(e.target.value)}
				value={email} // controlled input
				type='text'
				className='px-1 py-2 rounded-sm bg-black text-white'
				placeholder='email'
			/>
			<input
				onChange={e => setPassword(e.target.value)}
				value={password}
				className='px-1 py-2 rounded-sm bg-black text-white'
				type='text'
				placeholder='password'
			/>
			<button onClick={getLocal} className='bg-green-400 px-3 py-2 rounded-xl'>
				login
			</button>
			<div>
				{local.map((el, index) => (
					<div key={index}>
						<h1>{el.Email}</h1>
						<h1>{el.Password}</h1>
					</div>
				))}
			</div>
		</div>
	)
}

export default Product
