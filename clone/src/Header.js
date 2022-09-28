import React from 'react'
import './Header.css'
import Person2Icon from '@mui/icons-material/Person2';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import logo from './logo.png' 

const Header = () => {
  return (
    <div className='header'>
       

       <IconButton>
      <Person2Icon fontSize='large' className='header_icon'/>
      </IconButton>
      
<img className='header_logo' src={logo} alt="Tinder Logo" />

<IconButton>
<ForumIcon fontSize='large' className='header_icon' />
</IconButton>
    </div>
  )
}

export default Header
