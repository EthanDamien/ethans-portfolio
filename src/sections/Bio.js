import logo from '../EthanDamienLogo.png';
import '../App.css';
import './Bio.css'

const Bio = () => {
    return (
        <div className="Splash">
      <header className="sectionFrame BioSection">
        <div className='Card'>
          <div className='CardContent'>
            <img src='happyEthan.png' className='pfp'/>
            <div className='bioSection'>
              <h1 className='hiIm'>
                Hi I'm Ethan
              </h1>
              <p>I'm a Software Engineer with a passion for work with systems at a global scale.</p>
              <p>I'm an incoming Software Engineer for Amazon Ads 
                and recently graduated from Rutgers University with a Bachelor of Science in Computer Science. 
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
}

export default Bio;