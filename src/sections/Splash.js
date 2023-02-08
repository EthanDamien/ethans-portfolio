import logo from '../EthanDamienLogo.png';
import '../App.css';
import './Splash.css'

const Splash = () => {
    return (
        <div className="Splash">
      <header className="sectionFrame splashSection">
        <img src={logo} className="EthanLogo" alt="logo" />
      </header>
    </div>
    )
}

export default Splash;