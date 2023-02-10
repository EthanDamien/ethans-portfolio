import './Experience.css'
import ReactTypingEffect from 'react-typing-effect'
import { motion } from "framer-motion";
import awslogo from ".//assets/AWSlogoEmpty.png";
import fidelitylogo from ".//assets/EmptyFidelityLogo.png";
import adslogo from ".//assets/AmazonAdsEmpty.png";

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
    <a className='hvr-shrink' href='https://aws.amazon.com/free/?trk=fce796e8-4ceb-48e0-9767-89f7873fac3d&sc_channel=ps&s_kwcid=AL!4422!3!432339156150!e!!g!!aws&ef_id=CjwKCAiA85efBhBbEiwAD7oLQId5MIZP8KyQPq6Uien2LjY8kF4_ogtuUvGmQ7upTPw_e1OPRzEQqxoCteYQAvD_BwE:G:s&s_kwcid=AL!4422!3!432339156150!e!!g!!aws'>
      <img src={awslogo} className="cardLogo gradientAWS" alt="logo" />
    </a>
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer Intern</h1>
        <p className='gradientOrangeStatic'>Jun 22' - Aug 22' | Seattle</p>
        <p><mark className='gradientOrangeStatic hvr-shrink'>
          <a href='https://aws.amazon.com/pm/ec2/?trk=36c6da98-7b20-48fa-8225-4784bced9843&sc_channel=ps&s_kwcid=AL!4422!3!467723097967!p!!g!!amazon%20ec2&ef_id=CjwKCAiA85efBhBbEiwAD7oLQPxszYEmXldQ_yq6Dt28kKo8LVX1kCWuE8LHhOHmDJL2rlvJoDSbzxoCsdoQAvD_BwE:G:s&s_kwcid=AL!4422!3!467723097967!p!!g!!amazon%20ec2'>EC2 Networking</a></mark> Distributed Systems Engineer. </p>
        <p>Created a proprietary service to promptly propagate 
          data to &gt;20k hosts globally while mitigating 
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
    <a className='hvr-shrink' href='https://www.fidelity.com/about-fidelity/our-company'>
    <img src={fidelitylogo} className="cardLogo gradientFidelity" alt="logo" />
    </a>
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer Intern</h1>
        <p className='gradientGreenStatic'>Jun 22' - Aug 22' | Boston</p>
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
    <a className='hvr-shrink' href='https://advertising.amazon.com/lp/build-your-business-with-amazon-advertising?tag=googhydr-20&ref=pd_sl_37ga81juc3_e_ps_gg_b_us_en_d_core_e_644030686063&k_amazon%20ads&group_144796814053'>
    <img src={adslogo} className="cardLogo gradientAds" alt="logo" />
    </a>
    </div>
    <div className='expCardContent'>
        <h1>Software Engineer 1</h1>
        <p className='gradientBlueStatic'>Starting Aug 23' | NYC</p>
        <p>Fulltime Software Engineer</p>
        <p>
          Check back in August!
        </p>
    </div>
    </div> 
    )
  }
}
