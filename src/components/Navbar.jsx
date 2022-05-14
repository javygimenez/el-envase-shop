import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import logo from '../assets/logo_el_envase.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="80" height="80"></img>
        </a>
        <a className="navbar-brand" href="#"><h1>EL ENVASE</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">INICIO</a>
            <a className="nav-link" href="#">NOSOTROS</a>
            <a className="nav-link" href="#">PRODUCTOS</a>
            <a className="nav-link" href="#">CARRITO</a>
          </div>
        </div>
      </div>
      <div>     
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;