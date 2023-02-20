import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function auth() {
  return (
    <div>
        <h1>
            Its me
        </h1>
          <Link to={'/auth/login'} >Login in Auth</Link> <br/>
          <Link to={'/auth/register'} >Register in Auth</Link><br/>
          <Link to={'/auth/profile'} >Profile in Auth</Link><br/>
        <Outlet></Outlet>
    </div>
  )
}
