import React from 'react'
const Experience = ({logo, title, duration,skills}) => {
console.log(skills)
  return (
    <div>
                <div className="mb-8 border-b border-white pb-8">
                  <img src={logo} alt="Thurston Software Solutions" className="w-16 h-16 object-contain mb-4" />
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{duration}</p>
                  <ul className="list-disc list-inside text-white leading-relaxed">
                    {
                        skills.map(skill =><li>{skill}</li>)
                    }
                  </ul>
                </div>
    </div>
  )
}

export default Experience
