import './Projects.css'
import omwlogo from ".//assets/omwlogo.png";
import retrologo from ".//assets/retrotablecent.png";
import glimpselogo from ".//assets/glimpse.png";

const Project = () => {
    return (
      <header className="sectionFrame ProjectSection">
        <div className="sectionHeader">
          <h1>Projects</h1>
        </div>
        <div className='carousel'>
          {expCard("omw")}
          {expCard("retrotable")}
          {expCard("glimpse")}
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
          <img src={retrologo} className="cardLogo" alt="logo" />
          </div>
          <div className='expCardContent'>
              <h1>Retrotable</h1>
              <p className='gradientOrangeStatic'>The AI Study App</p>
              <p>Combining the ideas of Spaced-Repetition, Supermemo-2, and OpenAI's ChatGPT. We are innovating on making student's lives easier in the new climate of AI assistance.</p>
              <p>
                <a href='https://www.smalljuice.com' className='hvr-shrink gradientOrangeStatic'>Read more about the project here.</a>
              </p>
          </div>
          </div> 
          )
      case 'glimpse':
        return (
          <div className='ProjectCard'>
          <div className='imgContain'>
          <img src={glimpselogo} className="cardLogo" alt="logo" />
          </div>
          <div className='expCardContent'>
              <h1>Glimpse</h1>
              <p className='gradientOrangeStatic'>FaceID for Small Employers</p>
              <p>A proof of concept Clock-in/Clock-out app which uses AWS Rekognition and full cloud implementation. Meant for small businesses, prioritizing non-contact convenience.</p>
              <p>
                <a href='https://www.smalljuice.com' className='hvr-shrink gradientOrangeStatic'>Check out our University Project here.</a>
              </p>
          </div>
          </div> 
          )
      default:
  }
}
