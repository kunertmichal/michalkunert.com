import React from 'react'

const ProjectItem = ({ children, project }) => {
  return (
    <div className="space-y-8 md:space-y-0 md:flex py-8 px-6">
      <div className="md:w-20 syne text-5xl">0{project.index + 1}.</div>
      <div className="md:px-10 max-w-xl w-full">
        <h3 className="syne text-2xl mt-2">{project.title}</h3>
        <p className="text-[#C4C4C4] text-md">{project.description}</p>
      </div>
      <div className="ml-auto">
        {children}
      </div>
    </div>
  )
}

export default ProjectItem
