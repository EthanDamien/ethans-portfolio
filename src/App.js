import logo from './logo.svg';
import './App.css';
import Splash from './sections/Splash/Splash';
import Bio from './sections/Bio/Bio';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects'
import Contact from './sections/ContactMe/Contact';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";



function Section({ id })  {
  switch(id){
    case 1: 
      return <Splash />
    case 2:
      return <Bio/>
    case 3:
      return <Experience/>   
    case 4:
      return <Projects/>  
    case 5:
      return <Contact/>
    default:
  }
} 

function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref
  }
  );
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <div className='container' ref={ref}>
    <video autoPlay loop muted playsInline className='backgroundVideo'>
      <source src='https://ethanportfolioassets.s3.amazonaws.com/CarBackground.mp4'></source>
    </video>
      {[1,2,3,4,5].map((section) =>
        (
        <Section id = {section}/>
      ))}
    <motion.div className="progress" style={{ scaleX }} />
    </div>
    
    </>
  )
}

export default App;
