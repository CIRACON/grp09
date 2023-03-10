import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import travLogo from './pics/Travelers-logo.png'



export function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsername = (event) => {
        setUsername(event.target.value);
      };
      const handlePassword = (event) => {
        setPassword(event.target.value);
      }; 

      const handleSubmit = event => {
        event.preventDefault();
        
        // alert(username + ' ' + password);
        // 👇️ redirect to /contacts
        if (username === `wasadmin`)
        navigate('/people')
        if(username === `jbranman`)
        navigate(`/people/manager`)
        if(username === `horsedude`)
        navigate(`/people/employee`)
        if(username === ``){
            alert(`not a valid username or password`);
        }
      };

     

    return(
        <>
    <img src={travLogo} height={130} width={192}/>
    <div className="login-wrapper">
      <h3>Please Log In</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" value ={username} onChange={handleUsername}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" value={password} onChange={handlePassword}/>
          </label>
          <div>
            <button type="submit" style={{marginTop: '15px'}}>Submit</button>
          </div>
          {/* <div>
            <Link to={`/people`} state={{ access: "hr" }}>HR View</Link>
          </div>
          <div>
            <Link to={`/people/manager`} state={{ access: "manager" }}>Manager View</Link>
          </div>
          <div>
            <Link to={`/people/employee`} state={{ access: "employee" }}>Employee View</Link>
          </div> */}
        </form>
    </div>
    </>
      )
}