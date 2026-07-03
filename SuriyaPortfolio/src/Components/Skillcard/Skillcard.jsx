import React from 'react'

const Skillcard = (props) => {
  return (
    <div>
        <div className='w-[20vw] h-[8vh] px-2 items-center justify-center flex bg-green-200 text-3xl rounded-3xl shadow-2xl m-5'>{props.skill}</div>
    </div>
  )
}

export default Skillcard