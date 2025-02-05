import React from 'react'
import TechItem from './TechItem'
import ReactLogo from '../assets/react.png'
import TailwindLogo from '../assets/tailwind.png'
import CSSLogo from '../assets/css.png'
import JavascriptLogo from '../assets/javascript.png'
import JQueryLogo from '../assets/jquery.png'
import GitLogo from '../assets/git.png'

const Technologies = () => {
  return (
    <div>
        <h2 className="text-center">Favorite Technologies</h2>
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto py-8">
            <TechItem 
                img={{
                    src: ReactLogo,
                    alt: "React Logo"
                }}
                name="React"
            />
            <TechItem 
                img={{
                    src: TailwindLogo,
                    alt: "Tailwind Logo"
                }}
                name="Tailwind"
            />
            <TechItem 
                img={{
                    src: JavascriptLogo,
                    alt: "Javascript Logo"
                }}
                name="Javascript"
            />
            <div class="col-span-3">
                <p>Blah blah blah</p>
            </div>
            <TechItem 
                img={{
                    src: JQueryLogo,
                    alt: "JQuery Logo"
                }}
                name="JQuery"
            />
            <TechItem 
                img={{
                    src: GitLogo,
                    alt: "Git Logo"
                }}
                name="Git"
            />
            <TechItem 
                img={{
                    src: CSSLogo,
                    alt: "CSS Logo"
                }}
                name="CSS"
            />
        </div>
    </div>
  )
}

export default Technologies