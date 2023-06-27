import './Contact.css'
import ReactTypingEffect from 'react-typing-effect'

const Contact = () => {
    return (
        <div className="Splash">
      <header className="sectionFrame BioSection">
      <div className="sectionHeader">
          <h1>Contact</h1>
        </div>
        <div className='Card'>
          <div className='CardContent'>
            <div className='bioSection'>
              <h1 className='hiIm'>
              <ReactTypingEffect
              speed={50}
              eraseDelay={2000}
              typingDelay={1000}
              eraseSpeed={20}
        text={[
          "Let's Connect on LinkedIn!",
          "Check out my Github!",
          "Let's Collaborate!",
          "Send me an email!"
        ]}/>
              </h1>
              <p>Email: <a href='mailto: ethanchang.d@gmail.com' className='gradientBlue hvr-shrink'>ethanchang.d@gmail.com</a></p>
              <p>LinkedIn: <a href='https://www.linkedin.com/in/ethan-damien-chang/' className='gradientBlue hvr-shrink'>ethan-damien-chang</a></p>
              <p>Github: <a href='https://github.com/EthanDamien' className='gradientBlue hvr-shrink'>EthanDamien</a></p>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
}

export default Contact;