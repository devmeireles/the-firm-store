import './style.css';
import { Link } from 'react-router-dom';


function Navigation(props) {
    return (
        <div className="Navigation">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/produtos" className="nav-link">Produtos</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/contato" className="nav-link">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;