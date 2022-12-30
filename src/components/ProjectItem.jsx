import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMousePos } from '../hooks'

const ProjectItem = ({ children, project }) => {
  const [isVisible, setIsVisible] = React.useState(null)
  const { x, y } = useMousePos()
  const isDesktop = matchMedia("(min-width: 768px)").matches

  function handleMouseOver() {
    if (isVisible !== true) {
      setIsVisible(true)
    }
  }

  function handleMouseLeave() {
    setIsVisible(false)
  }

  return (
    <div
      className="space-y-8 md:space-y-0 md:flex py-8 px-6"

    >
      <AnimatePresence>
        {isDesktop && isVisible && (
          <motion.img
            key={project.title}
            src={project.image}
            className="hidden md:block fixed top-0 left-0 pointer-events-none origin-center"
            style={{ transform: `translate(${x - 150}px, ${y - 100}px)` }}
            alt={project.title}
            initial={{ opacity: 0, width: 300, height: 100 }}
            animate={{ opacity: 1, width: 300, height: 200 }}
          />
        )}
      </AnimatePresence>
      <div className="md:w-20 syne text-5xl">0{project.index + 1}.</div>
      <div
        className="md:px-10 flex-1 cursor-none"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="syne text-2xl mt-2 max-w-xl w-full">{project.title}</h3>
        <p className="text-[#C4C4C4] text-md max-w-xl w-full">{project.description}</p>
      </div>
      <div className="ml-auto w-30">
        {children}
      </div>
    </div>
  )
}

export default ProjectItem
