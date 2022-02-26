import React from 'react'
import Nav from './layout-nav'

export default function Layout({children}) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  )
}
