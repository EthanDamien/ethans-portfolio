import logo from './logo.svg';
import './App.css';
import Splash from './sections/Splash';
import Bio from './sections/Bio';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ id })  {
  if (id == 1){
    return (
      <Splash/>
    )
  }
  else if (id == 2){
    return (
      <Bio/>
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
