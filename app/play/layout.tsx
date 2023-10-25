import Link from "next/link"
import React from 'react'
import Party from '/public/icons/sidebar/party.svg'
import Location from '/public/icons/sidebar/location.svg'
import Npc from '/public/icons/sidebar/npc.svg'
import Monster from '/public/icons/sidebar/monster.svg'
import Items from '/public/icons/sidebar/items.svg'
import Magic from '/public/icons/sidebar/magic.svg'

function Sidebar () {
  return (
    <nav className='flex flex-col items-center h-full gap-6 w-12 px-1'>
      <Party className="sidebar-icon"/>
      <Location className="sidebar-icon"/>
      <Npc className="sidebar-icon"/>
      <Monster className="sidebar-icon"/>
      <Items className="sidebar-icon"/>
      <Magic className="sidebar-icon"/>
    </nav>
  )
}

function Aside () {
  return (
    <aside></aside>
  )
}
  
export default function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-row'>
      {<Sidebar/>}
      {children}
    </div>
  )
}
