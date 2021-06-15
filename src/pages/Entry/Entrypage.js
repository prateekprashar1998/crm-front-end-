import React, {useState} from "react";
import "./Entry.style.css";
import Jumbotron from 'react-bootstrap/Jumbotron'
import  LoginForm  from '../../components/Login/Logincomponent';
import ResetPassword from '../../components/password-reset/PasswordReset';
export const Entrypage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(" ");
    const [formload, setformload] = useState("login");


const handleOnchange = e =>{
    const {name,value } = e.target
    switch(name){
        case 'email':
        setEmail(value);
        break; 
        case 'password':
        setPassword(value);
        break; 
        default:
        break;
    }

    

};
const handleOnSubmit = (e) =>
{
    e.preventDefault();
    if(!email || !password)
    {
        alert("Fill up all the details");
    }
    console.log(email,password);
};
const handleOnResetSubmit = (e) =>
{
    e.preventDefault();
    if(!email )
    {
        alert("Please enter the email");
    }
    console.log(email);
};
const formSwitcher = formtype =>{
    setformload(formtype);
}; 
    return (
        <div className={"Entry-page bg-info"}>
            <div className="jumbo">
          <Jumbotron>
              {formload === 'login' &&
              <LoginForm
          handleOnchange={handleOnchange}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
          email ={email}
          pass={password}         
          />}
            {formload === 'reset' &&
            <ResetPassword 
          handleOnchange={handleOnchange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email ={email}
         
                 
          />}
          </Jumbotron>
            </div>
            </div>
            
    )
}
export default Entrypage;