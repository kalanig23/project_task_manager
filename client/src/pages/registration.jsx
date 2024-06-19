import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ArtSection from "../component/artsection";
import EmailIcon from "../assets/emailicon.png";
import PasswordIcon from "../assets/passwordicon.png";
import PasswordLockIcon from "../assets/passwordviewicon.png";
import NameIcon from "../assets/usernameicon.png";
import './loginRegistration.css';

const Registration = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({name: '', email:'', confirmpassword: '', password: ''});
    const [error, setError] = useState({nameError: '', emailError:'', confirmpasswordError: '', passwordError: ''});
    const [hideShowPassword, setHideShowPassword] = useState(false);
    const [hideShowConfirmPassword, setHideShowConfirmPassword] = useState(false);

    const handleOnChangeRegister = (e) => {
        setRegisterData({...registerData,[e.target.name]:e.target.value})
    }

    const handleLoginSwitch=()=>{
        navigate("/login");
    }

    const handleRegisterSubmit=(e)=>{
        e.preventDefault();
        let newErrors = {};
        if(registerData.name!=='' && registerData.email!=='' && registerData.confirmpassword!=='' && registerData.password!=='') {
            console.log(registerData);
            if(registerData.confirmpassword === registerData.password){
                alert('Register successfully', registerData);
                setRegisterData({name: '', email:'', confirmpassword: '', password: ''});
            }else {
                alert('Confirm Password and Password field does not same');
            }            
        } else {
            if(registerData.name===''){
                newErrors.nameError = 'Please enter your name';
            }
            if(registerData.email==='') {
                newErrors.emailError = 'Please enter your email';
            }
            if(registerData.confirmpassword===''){
                newErrors.confirmpasswordError = 'Please enter your confirmpassword';
            }
            if(registerData.password==='') {
                newErrors.passwordError = 'Please enter your password';
            }
        }
        setError({ ...error, ...newErrors });
    }

    const handleHideShowPassword = () => {
        setHideShowPassword(!hideShowPassword);
    }

    const handleHideShowConfirmPassword = () => {
        setHideShowConfirmPassword(!hideShowConfirmPassword);
    }


    return(
        <div className="section-container">
            <div className="section-left">
                <ArtSection/>
            </div>
            <div className="section-right">
                <p className="form-title">Register</p>
                <form className="section-form" onSubmit={handleRegisterSubmit}>
                    <div className="name-input section-input-tag">
                        <img src={NameIcon} alt="user-icon"/>
                        <input placeholder="Name" name="name" value={registerData.name} onChange={handleOnChangeRegister}/>
                    </div>
                    <span className="error-message">{error.nameError}</span>
                    <div className="email-input section-input-tag">
                        <img src={EmailIcon} alt="email-icon"/>
                        <input placeholder="Email" name="email" type='email' value={registerData.email} onChange={handleOnChangeRegister}/>
                    </div>
                    <span className="error-message">{error.emailError}</span>
                    <div className="password-input section-input-tag">
                        <img src={PasswordIcon} alt="password-icon"/>
                        <input placeholder="Confirm Password" name="confirmpassword" type={hideShowConfirmPassword ? 'text' : 'password'} value={registerData.confirmpassword} onChange={handleOnChangeRegister}/>
                        <img src={hideShowConfirmPassword ? EmailIcon : PasswordLockIcon} alt="password-view-icon" className="password-visible-icon" onClick={handleHideShowConfirmPassword}/>
                    </div>
                    <span className="error-message">{error.confirmpasswordError}</span>
                    <div className="password-input section-input-tag">
                        <img src={PasswordIcon} alt="password-icon"/>
                        <input placeholder="Password" name="password" type={hideShowPassword ? 'text' : 'password'} value={registerData.password} onChange={handleOnChangeRegister}/>
                        <img src={hideShowPassword ? EmailIcon : PasswordLockIcon} alt="password-view-icon" className="password-visible-icon" onClick={handleHideShowPassword}/>
                    </div>
                    <span className="error-message">{error.passwordError}</span>
                    <div>
                        <button className="btn-one" type='submit'>Register</button>
                        <h3 className="no-acct-text">Have no account yet?</h3>
                        <button className="btn-two" onClick={handleLoginSwitch}>Log in</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;