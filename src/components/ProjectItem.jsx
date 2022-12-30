import React from 'react'
import { useMousePos } from '../hooks'

const ProjectItem = ({ children, project }) => {
  const [visibleImgUrl, setVisibleImgUrl] = React.useState(null)
  const { x, y } = useMousePos()
  const isDesktop = matchMedia("(min-width: 768px)").matches

  function handleMouseOver() {
    if (visibleImgUrl !== project.image) {
      setVisibleImgUrl(project.image)
    }
  }

  function handleMouseLeave() {
    setVisibleImgUrl(null)
  }

  return (
    <div
      className="space-y-8 md:space-y-0 md:flex py-8 px-6"

    >
      {isDesktop && visibleImgUrl && (
        <img
          src={visibleImgUrl}
          className="hidden md:block w-[200px] h-[200px] fixed top-0 left-0 opacity-100 pointer-events-none"
          style={{ transform: `translate(${x - 100}px, ${y - 100}px)` }}
          alt={project.title}
        />
      )}
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
