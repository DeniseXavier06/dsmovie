import {ReactComponent as githubIcon} from '../../assets/img/gitmusica.svg';
import '../navbar/estilos.css';

function Navbar(){
    return(
        <header>
<nav className="container">
  <div className="Plataform-nav-content">
    <h1>Plataforma Xavier</h1>
    <a href="https://github.com/DeniseXavier06/dsmovie">
    <div className="plataform-contact-conteiner">
      <githubIcon />
      <p classeName="plataform-contact-link">/Plataforma Xavier</p>
    </div>
    </a>
  </div>
</nav>

  </header>
    )
}

export default Navbar;