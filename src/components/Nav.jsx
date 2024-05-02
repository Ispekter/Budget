import React from 'react'
import { NavLink } from 'react-router-dom'
import logomark from '../assets/logomark.svg'
import { fetchData } from '../helpers'
import { toast } from 'react-toastify'

const Nav = () => {
  const userName = fetchData('userName')

  const deleteUser = () => {
    localStorage.removeItem('userName')
    toast.success('You have successfully delete user.')
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <nav>
      <NavLink to="/">
        <img src={logomark} alt="logo" />
        <span>HomeBudget</span>
      </NavLink>
      { userName &&
        <button onClick={deleteUser} className="btn btn--warning">
          <span>Delete User</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg>
        </button>
      }
    </nav>
  )
}

export default Nav