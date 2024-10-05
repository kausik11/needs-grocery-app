import React from 'react'
import './SearchBar.css'
import { RxCross2 } from "react-icons/rx";
const SearchBar = ({status}) => {
  return (
    <div className='searchbar'>
      <form className='searchbarForm'>
        <input type='text'></input>
      </form>
    <RxCross2 onClick={()=>{status(0)}}/>
    </div>
  )
}

export default SearchBar
