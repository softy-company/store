import React from 'react'
import { useSelector } from 'react-redux'

const Favorite = () => {
	const fav = useSelector(fav => fav.favorite)
	// const arr = [fav]
	// console.log(arr)
	console.log(fav)
	return <div>{/* <h1>{fav.title}</h1> */}</div>
}

export default Favorite
