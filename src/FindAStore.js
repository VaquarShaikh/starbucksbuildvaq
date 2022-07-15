import React from 'react'
import './FindAStore.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function FindAStore() {
  return (
    <Link className='findAStore' to="">
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindAStore
