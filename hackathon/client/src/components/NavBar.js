import { Link } from 'react-router-dom';
import travLogo from './pics/Travelers-logo.png'

export function NavBar() {
    return(
        <>
            <div style={{paddingBottom: '20px'}}>
            <Link to="/">
            <img src={travLogo} height={130} width={192}/>
            </Link>
            </div>
        </>
    )
}