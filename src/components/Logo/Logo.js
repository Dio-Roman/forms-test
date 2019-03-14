import React from 'react';
import './style.css';

 const Logo = () => {
  return (
    <svg className='logo' width="230" height="60" viewBox="0 0 230 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill="#C4C4C4"/>
      <circle cx="140" cy="30" r="30" fill="#C4C4C4"/>
      <rect x="70" width="30" height="60" fill="#C4C4C4"/>
      <path d="M200 0H230L200 60H170L200 0Z" fill="#C4C4C4"/>
    </svg>
    
    )
  }

export default Logo;