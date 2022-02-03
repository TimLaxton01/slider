import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react'
import images from '../images'

const Carousel = () => {
    console.log(images);
  return (
      <div>
      
  <motion.div className="carousel">
      <motion.div className="inner-carousel">

      </motion.div>
  </motion.div>
  </div>
  );
}

export default Carousel;
