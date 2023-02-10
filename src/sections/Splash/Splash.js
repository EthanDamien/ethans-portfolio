import logo from './EmptyEthanLogo.png';

import './Splash.css'

const Splash = () => {
    return (
        <div className="Splash">
      <header className="sectionFrame splashSection">
        <img src={logo} className="EthanLogo gradientLogo" alt="logo" />
      </header>
    </div>
    )
}

export default Splash;