import { List } from '@material-ui/icons'
import { useState } from 'react'
import Center from '../centerItems/Center'
import './topbar.css'

const TopBar = ({setSelected, selected}) => {
  const centerList = [
    {
      id: "breakfast",
      title: "Breakfast",
    },
    {
      id: "lunch",
      title: "Lunch",
    },
    {
      id: "dinner",
      title: "Dinner",
    },
  ]


  return (
    <div className='topbar'>
      <div className="left">
        <div className="imgContainer">
          <img src="/img/logo.png" alt="" className="logo" />
        </div>
        <span className="logoText">Dami's Food Hut</span>
      </div>
      <div className="center">
        {centerList.map( (item) => (
          <Center title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ) )}
      </div>
    </div>
  )
}

export default TopBar


