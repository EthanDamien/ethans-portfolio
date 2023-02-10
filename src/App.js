import logo from './logo.svg';
import './App.css';
import Splash from './sections/Splash/Splash';
import Bio from './sections/Bio/Bio';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import Experience from './sections/Experience/Experience';


function Section({ id })  {
  if (id == 1){
    return (
      <Splash />
    )
  }
  else if (id == 2){
    return (
      <>
      <Bio/>
      </>
    )
  }
  else if (id == 3){
    return(
      <>
      <Experience/>
      </>
    )
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
      {[1,2,3,3,5].map((section) =>
        (
        <Section id = {section}/>
      ))}
    <motion.div className="progress" style={{ scaleX }} />
    </div>
    
    </>
  )
}

export default App;
