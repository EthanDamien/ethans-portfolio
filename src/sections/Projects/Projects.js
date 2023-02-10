import './Projects.css'
import ReactTypingEffect from 'react-typing-effect'
import { motion } from "framer-motion";
import omwlogo from ".//assets/omwlogo.png";

const Project = () => {
    return (
      <header className="sectionFrame ProjectSection">
        <div className="sectionHeader">
          <h1>Projects</h1>
        </div>
        <div className='carousel'>
          {expCard("omw")}
        </div>
      </header>
    )
}

export default Project;

function expCard(type) {
  switch(type){
    case 'omw':
      return (
        <div className='ProjectCard'>
        <div className='imgContain'>
        <img src={omwlogo} className="cardLogo" alt="logo" />
        </div>
        <div className='expCardContent'>
            <h1>OMW (On My Way)</h1>
            <p className='gradientOrangeStatic'>The Startup Idea</p>
            <p>The OMW app idea served as a starting point to learn how to research and blueprint an idea. During the process I learned to take executive initiative and push my creative limits.</p>
            <p>
              <a href='https://www.smalljuice.com' className='hvr-shrink gradientOrangeStatic'>Read more about the project here.</a>
            </p>
        </div>
        </div> 
        );
      case 'retrotable':
        return (
          <div className='ProjectCard'>
          <div className='imgContain'>
          <img src={omwlogo} className="cardLogo" alt="logo" />
          </div>
          <div className='expCardContent'>
              <h1>OMW (On My Way)</h1>
              <p className='gradientOrangeStatic'>The Startup Idea</p>
              <p>The OMW app idea served as a starting point to learn how to research and blueprint an idea. During the process I learned to take executive initiative and push my creative limits.</p>
              <p>
                <a href='https://www.smalljuice.com' className='hvr-shrink gradientOrangeStatic'>Read more about the project here.</a>
              </p>
          </div>
          </div> 
          )
      
  }
}
