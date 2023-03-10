import './Bio.css'
import ReactTypingEffect from 'react-typing-effect'

const Bio = () => {
    return (
        <div className="Splash">
      <header className="sectionFrame BioSection">
      <div className="sectionHeader">
          <h1>Bio</h1>
        </div>
        <div className='Card'>
          <div className='CardContent'>
            <img src='happyEthan.png' className='pfp'/>
            <div className='bioSection'>
              <h1 className='hiIm'>
                Hi I'm Ethan Damien Chang
              </h1>
              <p>I'm a Software Engineer with a passion for work with systems at a global scale.</p>
              <p>I'm an incoming Software Engineer for <mark className='gradientBlue hvr-shrink'><a href="https://advertising.amazon.com/lp/build-your-business-with-amazon-advertising?tag=googhydr-20&ref=pd_sl_37ga81juc3_e_ps_gg_b_us_en_d_core_e_644030686063&k_amazon%20ads&group_144796814053">Amazon Ads</a> </mark>
                 and recently graduated from Rutgers University with a Bachelor of Science in Computer Science. 
              </p>
              <p>I love <ReactTypingEffect
              speed={50}
              eraseDelay={2000}
              typingDelay={1000}
              eraseSpeed={20}
        text={[
          "racing fast cars! (in sims, currently)", 
          "making fun and convenient websites!", 
          "learning about distributed systems!",
          "traveling around the world!",
          "indulging in fashion!"
        ]}
      /></p>
            </div>
          </div>
        </div>
      </header>
    </div>
    )
}

export default Bio;