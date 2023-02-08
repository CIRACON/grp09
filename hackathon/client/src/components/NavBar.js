import { Link } from 'react-router-dom';

export function NavBar() {
    return(
        <>
            <Link to="/">
            <span>
                Home
            </span>
            </Link>
            <span>
                Login
            </span>
        </>
    )
}