import React, { useState } from 'react';
import { Appwarp, MotionWrap } from '../../wrapper';
import { images } from "../../constants"
import "./Recognition.scss";
import { AiFillEye, AiOutlineCloseCircle } from 'react-icons/ai';

const Recognition = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [imgPath, setImgPath] = useState(null);
    const body = document.querySelector("body");

    const handlePopup = (img) => {
        setShowPopup(true);
        setImgPath(img);

        setTimeout(() => {
            body.style.overflow = "hidden";
        }, 1);
    }



    const closeModal = function (e) {
        body.style.overflow = "auto";
        setShowPopup(false)
    };

    return (
        <div className='app__recognition'>
            {showPopup && (
                <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
                    <div className="popup-content">
                        <div className='popupClose'>
                            <AiOutlineCloseCircle className='popupCloseBtn' onClick={() => closeModal()} />
                        </div>
                        <img src={imgPath} alt={images.Hackathon} />
                        <button onClick={() => closeModal()}>Close</button>
                    </div>
                </div>
            )}
            <h2 className="head-text">Recognitions, <span>Hackathons</span> & <span>Awards</span> </h2>
            <div className='app__recognition-cards'>
                <ul class="card-wrapper">
                    <li class="card">
                        <img src={images.Hackathon} alt='' />
                        <div className='imgOpenIcon' >
                            <AiFillEye onClick={() => handlePopup(images.Hackathon)} />
                        </div>
                        <h3 className='p-text'>Hackathon</h3>
                        <p className='p-text'>I successfully developed a MERN Full Stack Application, in response to a challenge presented during a Hackathon event.</p>
                    </li>
                    <li class="card">
                        <img src={images.Award} alt='' />
                        <div className='imgOpenIcon' >
                            <AiFillEye onClick={() => handlePopup(images.Award)} />
                        </div>
                        <h3 className='p-text'>Go Above Award</h3>
                        <p className='p-text'>Awarded for exceptional execution of wireframe conversion into functional components, resulting in significant improvement of user experience.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Appwarp(
    MotionWrap(Recognition, 'app__recognition'),
    'recognitions',
    'app__whitebg',
);