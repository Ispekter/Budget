import React from 'react'
import { Outlet } from 'react-router-dom'
import wave from '../assets/wave.svg'
import Nav from '../components/Nav'

// Test Comment

const Main = () => {
  return (
	<div className="layout">
		<Nav />
		<main>
			<Outlet />
		</main>
		<img src={wave} alt="" />
	</div>
  )
}

export default Main