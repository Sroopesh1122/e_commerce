import React from 'react';
import {motion} from 'framer-motion';

const AnimateWrapper = ({children ,initial={opacity:0} ,animate={opacity:1},exit={},transition={duration:1}},key) => {

  console.log(exit)
  return (
        <motion.div key={key} initial={initial} animate={animate} exit={exit} transition={transition}>
      {
        children
      }
    </motion.div>
    
  )
}

export default AnimateWrapper
