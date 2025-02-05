import React from 'react'
import Resume from '../assets/SJackson_RESUME24.pdf'
import { useState } from 'react'

const Intro = () => {
    const [isExpanded, setExpanded] = useState(false)

    const contact = () => {
        setExpanded(!isExpanded)
    }

  return (
    <div className=" pt-24 pb-12">
        <span>Hello, I'm</span>
        <h1 className="my-2 bg-linear-to-br from-sky-300 to-fuchsia-700 bg-clip-text text-transparent">Sabrina Jackson</h1>
        <h3 className="mb-1">Software Engineer</h3>
        <p>With focused experience in frontend development, I bring a creative, personal flair to the web.</p>
        <div className="flex gap-8 mt-8">
            <a href={Resume} target="_blank"><button>View Resume</button></a>
            <button onClick={contact}>Contact Me</button>
        </div>
        <div className={`py-8 ${isExpanded ? '' : 'hidden'}`}>
            <h4 className="mb-4">I'd love to hear from you!</h4>
            <p className="flex gap-2 my-1">Email: <a href="mailto:sabrinapjack@gmail.com">sabrinapjack@gmail.com</a></p>
            
            <p className="flex gap-2 my-1">Phone: <a href="tel:7196612837">(719) 661-2837</a></p>
            
        </div>
    </div>
  )
}

export default Intro