import React from 'react'

function Filter({title,isSelected,onClick}) {
  return (
    <button className={`${isSelected ? "bg-primary-light" :"border border-primary-light" } w-28  py-1 rounded-2xl  text-white`} onClick={onClick}>
        {title}
    </button>
  )
}

export default Filter