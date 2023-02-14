import React, { useState } from 'react';

import { images } from '../../constants';
import { Appwarp, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { SocialMedia } from "../../components"

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a style={{fontSize:"16px",fontWeight:600}} href="mailto:sujaywebdev@gmail.com" className="p-text">sujaywebdev@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a style={{fontSize:"16px",fontWeight:600}} href="tel:+91 9035 925-456" className="p-text">+91 9035 925-456</a>
        </div>
      </div>
      <SocialMedia/>

    </>
  );
};

export default Appwarp(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);