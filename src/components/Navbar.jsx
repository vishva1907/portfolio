import { Link } from "react-router-dom";

function NavBar() {
    return (
        <header className="navbar">

            <div className="logo">
                Vishva Patel
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>

        </header>
    );
}

export default NavBar;