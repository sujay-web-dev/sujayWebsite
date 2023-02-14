import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { Appwarp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from "../../constants"
import './Testimonials.scss';
import { FaDownload } from 'react-icons/fa';

const Testimonial = () => {


  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Sujay_UI_Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Sujay_UI_Resume.pdf';
        alink.click();
      })
    })
  }


  return (
    <div>
      <h2 className="head-text">Checkout my <span>Resume</span></h2>
      <div className='app__resume'>
        <div className='app__resume-Img'>
          <img src={images.resumePic} alt="" />
        </div>
        <div class="app__resume-download">
          <button className='app__resume-download-btn' onClick={onButtonClick}><FaDownload /> Resume.pdf</button>
        </div>
      </div>
    </div>
  );
};

export default Appwarp(
  MotionWrap(Testimonial, 'app__resume'),
  'resume',
  'app__primarybg',
);