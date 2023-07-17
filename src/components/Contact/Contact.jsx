import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.scss'

const Contact = () => {
  return (
    <div>
        <div className="contact">   
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail"> 
                    <input type='text' placeholder='Enter your e-mail...'></input>
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <TelegramIcon></TelegramIcon>
                    <EmailIcon></EmailIcon>
                    <PhoneIcon></PhoneIcon>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
