import { useState,useEffect } from "react";
import users from "./testData.json"
import {
    Link,
    useNavigate
  } from "react-router-dom"
 
export default function CreateAccount(props){
 
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [confirmpassword,setconfirmpassword] = useState('')
    const [checkbox,setcheckbox] = useState(false)
    const [valid,setvalid] = useState(false)
    const navigate = useNavigate()
 
    let passwordsame = false
 
    function updateFirstname(event){
        setfirstname(event.target.value)
    }
 
    function updateLastname(event){
        setlastname(event.target.value)
    }
 
    function updateEmail(event){
        setemail(event.target.value)
    }
   
    function updatePassword(event){
        setpassword(event.target.value)
    }
   
    function updateConfirmpassword(event){
        setconfirmpassword(event.target.value)
    }
   
    function updateCheckbox(event){
        setcheckbox(!checkbox)
    }
 
    function checkPasswordsSame(event){
 
        if(password === confirmpassword){
            passwordsame = true
            alert("Account Created")
            navigate("/Home")
        }
        else{
            passwordsame = false
            alert("Passwords must match")
        }
    }
 
    function checkUserExists(event){
       
        let existinguser = false
 
        users.map((user)=>{
            if(email===user.email){
                existinguser=true
            }
        });
        if(existinguser===true){
            alert("Email has already been registered")
        }
        else{
               
            checkPasswordsSame(event)
            if(passwordsame===false){
                setpassword('')
                setconfirmpassword('')
            }
        }
    }
   
    useEffect(()=>{
        if(firstname==='' || lastname==='' || email==='' || password==='' || confirmpassword===''){
            setvalid(false)
        }
        else{
            setvalid(true)
        }
    }
    )
 
    return(
        <div className="main-box">
            <h1 className="title">Create your account</h1>
                <form className="form-box" onSubmit={(event)=>checkUserExists(event)}>
                    <div className="names-div">
                        <input
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(event)=>updateFirstname(event)}
                        />
 
                        <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(event)=>updateLastname(event)}
                        />
                    </div>
                    <div className="email-div">
                        <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(event)=>updateEmail(event)}
                        />
                    </div>
                    <div className="password-div">
                        <input
                        type={!checkbox? "password":"text"}
                        placeholder="Password"
                        value={password}
                        onChange={(event=>updatePassword(event))}
                        />  
                        <input  
                        type={!checkbox? "password":"text"}
                        placeholder="Confirm password"
                        value={confirmpassword}
                        onChange={(event)=>updateConfirmpassword(event)}
                        />
                    </div>
                    <div className="show-password-div">
                        <input
                        type="checkbox"
                        value="Show password"
                        checked={checkbox}
                        onClick={updateCheckbox}
                        />
                        <label>Show Password</label>
                    </div>
                    <div className="button-div">
                        <input
                        className={valid? "submit-button":"submit-button-disabled"}
                        type="submit"
                        value="Submit"
                        disabled={!valid}
                        />
                    </div>
                    <div> Already have an account? Click <Link to="/Login">Here</Link> to log in</div>
                </form>
        </div>
    )
}