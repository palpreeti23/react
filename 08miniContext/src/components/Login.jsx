import React,{useState, useContext} from "react";
import UserContext from '../context/UserContext'



function Login(){
    const [username, setUsername] = useState('')
    const [passward, setPassward] = useState('')
    const {setUser} = useContext(UserContext)

    const submitHandler = (e)=>{
        e.preventDefault();
        setUser({username, passward})
    }
    return(

        <div>
            <h2>Login</h2>
            <input 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"  placeholder="username"/>

            <input 
             value={passward}
             onChange={(e)=>setPassward(e.target.value)}
            type="number" placeholder="password" />

            <button onClick={submitHandler}>submit</button>
        </div>
    )
}

export default Login