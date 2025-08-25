import React from 'react'
import './SocialButton.scss'
import { Icon } from '@iconify/react/dist/iconify.js'
function SocialButton({label, icon, type}) {
  return (
    <div className='social-button-wrapper'>
      <div className="icon-wrapper">
        <Icon icon={icon} width="22" height="22" />
      </div>
      <span className='social-button-label'>{label}</span>
    </div>
  )
}

export default SocialButton