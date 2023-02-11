import React from 'react'
import { motion } from "framer-motion";
import { images } from "../../constants"
import AppWrap from '../../wrapper/AppWrap';
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {



  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info" >
        <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sujay V</h1>
            </div>
          </div>

         

          <div className="tag-cmp app__flex">
            <p className="p-text">Front End Developer</p>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">MERN Fullstack Developer</p>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Blockchain Developer</p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg " />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="Profile Circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        <div className='app__header-circle'>
        {[images.react,images.redux,images.javascript,images.node].map((circle,index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        </div>
        <div className='app__header-circle'>
        {[images.MongoDB,images.Solidity,images.sass,images.hardhat].map((circle,index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        </div>
      </motion.div>

    </div>
  )
}

export default AppWrap(Header,'home')