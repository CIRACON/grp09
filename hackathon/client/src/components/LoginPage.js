import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const [toDashboard, setToDashboard] = useState(false);
    if (toDashboard === true) {
        return <Navigate to="/people" />;
      }

    const handleUsername = (event) => {
        setUsername(event.target.value);
      };
    function toHomePage() {
        navigate(`/people`)
    }

    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={handleUsername}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit" onSubmit={() => toDashboard(true)}>Submit</button>
          </div>
          <div>
            <Link to={`/people`} state={{ access: "hr" }}>HR View</Link>
          </div>
          <div>
            <Link to={`/people`} state={{ access: "manager" }}>Manager View</Link>
          </div>
          <div>
            <Link to={`/people`} state={{ access: "employee" }}>Employee View</Link>
          </div>
        </form>
    </div>
      )
}