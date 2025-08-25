import React from 'react'
import "./CustomInput.scss"
function CustomInput({name, type, placeholder, onChange, value, width}) {
  return (
    <div style={{height: '55px', width}} className='input-wrapper'>
      <input
        className='input-form'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
  
      />
    </div>
  )
}

export default CustomInput