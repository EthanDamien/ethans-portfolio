import '../App.css';
import './Experience.css'
import ReactTypingEffect from 'react-typing-effect'
import { motion } from "framer-motion";
import awslogo from "../AWSlogoEmpty.png";
import fidelitylogo from "../EmptyFidelityLogo.png";
import adslogo from "../AmazonAdsEmpty.png";

const Experience = () => {
    return (
      <header className="sectionFrame ExperienceSection">
        <div className="sectionHeader">
          <h1>Experiences</h1>
        </div>
        <div className='carousel'>
          {expCard("ads")}
          {expCard("aws")}
          {expCard("fidelity")}
        </div>
      </header>
    )
}

export default Experience;

function expCard(type) {
  if (type == 'aws'){
    return (
    <div className='ExperienceCard'>
    <div className='imgContain'>
    <img src={awslogo} className="cardLogo gradientAWS" alt="logo" />
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer Intern</h1>
        <p className='gradientOrangeStatic'>Jun 22' - Aug 22'</p>
        <p>Control Plane Distributed Systems Engineer. </p>
        <p>Created a proprietary service to promptly propagate 
          data to >20k hosts globally while mitigating 
          negative customer impact.
        </p>
    </div>
    </div> 
    )
  }
  if (type == 'fidelity'){
    return (
    <div className='ExperienceCard'>
    <div className='imgContain'>
    <img src={fidelitylogo} className="cardLogo gradientFidelity" alt="logo" />
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer Intern</h1>
        <p className='gradientGreenStatic'>Jun 22' - Aug 22'</p>
        <p>Proprietary Full-Stack Engineer. </p>
        <p>Led the creation of multiple full-stack applications with 6 interns. 
          Exceeded customer expectations with efficient UX and Backend design.
        </p>
    </div>
    </div> 
    )
  }
  if (type == 'ads'){
    return (
    <div className='ExperienceCard'>
    <div className='imgContain'>
    <img src={adslogo} className="cardLogo gradientAds" alt="logo" />
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer 1</h1>
        <p className='gradientBlueStatic'>Starting Aug 23'</p>
        <p>Fulltime Software Engineer</p>
        <p>
          Check back in August!
        </p>
    </div>
    </div> 
    )
  }
}
