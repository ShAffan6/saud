import { useState, useEffect } from "react"
import CreateAccount from "./CreateAccount";

import users from './testData.json'

import { Link, useNavigate } from "react-router-dom";

export default function Loginbox(props){


    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[checkbox,setcheckbox] = useState(false)
    const[valid,setvalid] = useState(false)

    let navigate = useNavigate();

    function updateemail(event){
        setemail(event.target.value)
    }

    function updatepassword(event){
        setpassword(event.target.value)
    }

    function updatecheckbox(){
        setcheckbox(!checkbox)
    }

    useEffect(() => {
        if(email === "" || password === ""){
            setvalid(false)
        }
        else{
            setvalid(true)
        }
    });

    function checkUserExists(event){

        let loggedIn = false

        event.preventDefault()
        users.map((user)=>{
            if(user.email.toLowerCase() === email.toLowerCase() && user.password === password){
                navigate('/Home')

                loggedIn = true
            }
        })
        if(!loggedIn){
            alert("Email or Password not valid")
        }
    }

    return(
        <div className="login-box">
            <header>Login</header>
            <form onSubmit={(event)=>checkUserExists(event)}>
                <input type='email' placeholder="Email" value={email} onChange={(event)=>updateemail(event)}/>
                <input className="password" type={checkbox?'text':'password'} value={password} placeholder="Password" onChange={(event)=>updatepassword(event)}/>
                <div className="check-box">
                    <input type='checkbox' checked={checkbox} onClick={updatecheckbox}/>
                    <div >Show Password</div>
                </div>
                <input
                    className={valid?"login-submit":"login-submit-disabled"}
                    type="submit"
                    value="Login"
                    disabled={!valid}
                />    
            </form>
            <p>Not got an account <Link to='/Authorise/CreateAccount'>Click Here</Link> to create one</p>
        </div>
    )
    

}
