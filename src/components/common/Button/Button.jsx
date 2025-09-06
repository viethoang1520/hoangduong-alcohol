import React from 'react'
import './Button.scss'  
export default function Button({ content, width, height, onClick, buttonType }) {
  return (
    <button style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
      type='submit'
      onClick={onClick}
      className={`button-container ${buttonType}`}
    >
      <span className='button-content'>{ content }</span>
    </button>
  )
}
