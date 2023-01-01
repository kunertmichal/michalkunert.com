import { motion } from 'framer-motion'
import React from 'react'
import { useMousePos } from '../hooks'

const ProjectImg = ({ title, image }) => {
  const { x, y } = useMousePos();
  return (
    <motion.img
      key={title}
      src={image}
      className="hidden md:block fixed top-0 left-0 pointer-events-none origin-center"
      style={{ transform: `translate(${x - 150}px, ${y - 100}px)` }}
      alt={title}
      initial={{ opacity: 0, width: 300, height: 100 }}
      animate={{ opacity: 1, width: 300, height: 200 }}
    />
  )
}

export default ProjectImg
