import React from 'react';
import { BsTwitter, BsGithub } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/sujaywebdev" target="_blank" className='app__social-item'>
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/sujay-web-dev" target="_blank" className='app__social-item'>
        <BsGithub />
      </a>
      <a href="https://twitter.com/sujayvadavadagi" target="_blank" className='app__social-item'>
        <BsTwitter />
      </a>
    </div>
  )
}

export default SocialMedia