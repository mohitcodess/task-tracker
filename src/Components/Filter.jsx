import React from 'react'

function Filter({title,isSelected}) {
  return (
    <button className={`${isSelected ? "bg-primary-light" :"border border-primary-light" } w-28  py-1 rounded-2xl  text-white`}>
        {title}
    </button>
  )
}

export default Filter