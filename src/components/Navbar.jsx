import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './cartWidget/CartWidget';
import logo from '../assets/logo_el_envase.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">      
        <Link to='/' className="navbar-brand"><img src={logo} alt="" width="80" height="80"></img></Link>
        <Link to='/' className="navbar-brand"><h1>EL ENVASE</h1></Link>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/category/jabon' className="nav-link" aria-current="page" href="#">JABÓN</Link>
            <Link to='/category/suavizante' className="nav-link">SUAVIZANTE</Link>
            <Link to='/category/lavandina' className="nav-link">LAVANDINA</Link>
            <Link to='/category/detergente' className="nav-link">DETERGENTE</Link>
          </div>
        </div>
      </div>
      <div>
        <Link to='/cart'>     
        <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;