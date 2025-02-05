import React from 'react'

const TechItem = (props) => {

  return (
    <div className="p-4 w-40 text-center border border-slate-700 rounded-md cursor-pointer hover:border-fuchsia-200 transition-colors duration-200">
        <div className="h-30 w-30 flex items-center justify-center mb-4">
            <img className="object-fill max-h-full max-w-full" src={props.img.src} alt={props.img.alt}/>
        </div>
        <h4>{props.name}</h4>
    </div>
  )
}

export default TechItem