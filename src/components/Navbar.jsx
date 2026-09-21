import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <Link to="/" className="nav-logo">
                    Vishva Patel
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;