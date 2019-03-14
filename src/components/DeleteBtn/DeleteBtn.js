import React, {Component} from 'react';
import './style.css';


 const DeleteBtn = () => {
  return (
      <button className='sender_delBtn'>
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50003 14H2.50003C1.69303 14 0.986526 13.3455 0.925026 12.541L0.00152588 0.538502L0.998526 0.461502L1.92203 12.4645C1.94403 12.75 2.21403 13 2.50003 13H8.50003C8.78603 13 9.05603 12.75 9.07803 12.465L10.0015 0.461502L10.9985 0.538502L10.075 12.541C10.0135 13.3455 9.30703 14 8.50003 14" fill="#FF6666"/>
        </svg>

        Удалить
      </button>
    )
  }


export default DeleteBtn;
