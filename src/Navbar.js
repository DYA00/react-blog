import { Link, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/articles">Articles</Link>
            </li>
        </ul>
    )
}

export default Navbar;