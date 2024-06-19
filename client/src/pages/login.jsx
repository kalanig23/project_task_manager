import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ArtSection from "../component/artsection";
import EmailIcon from "../assets/emailicon.png";
import PasswordIcon from "../assets/passwordicon.png";
import PasswordLockIcon from "../assets/passwordviewicon.png";
import './loginRegistration.css';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({email:'', password: ''});
    const [error, setError] = useState({emailError: '', passwordError:''});
    const [hideShowPassword, setHideShowPassword] = useState(false);

    const handleOnChangeLogin = (e) => {
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if(loginData.email!=='' && loginData.password!=='') {
            console.log(loginData);
            alert('login successfully', loginData);
            setLoginData({email:'', password: ''});
        } else {
            if(loginData.email===''){
                newErrors.emailError = 'Please enter your email';
            }
            if(loginData.password==='') {
                newErrors.passwordError = 'Please enter your password';
            }
        }
        setError({ ...error, ...newErrors });
    }

    const handleRegisterSwitch=()=>{
        navigate("/registration");
    }   

    const handleHideShowPassword = () => {
        setHideShowPassword(!hideShowPassword);
    }

    return (
        <div className="section-container">
            <div className="section-left">
                <ArtSection/>
            </div>
            <div className="section-right">
                <p className="form-title">Login</p>
                <form className="section-form" onSubmit={handleLoginSubmit}>
                    <div className="email-input section-input-tag">
                        <img src={EmailIcon} alt="email-icon"/>
                        <input placeholder="Email" name='email' type='email' value={loginData.email} onChange={handleOnChangeLogin}/>
                    </div>
                    <span className="error-message">{error.emailError}</span>
                    <div className="password-input section-input-tag">
                        <img src={PasswordIcon} alt="password-icon"/>
                        <input placeholder="Password" name='password' type={hideShowPassword ? 'text' : 'password'} value={loginData.password} onChange={handleOnChangeLogin}/>
                        <img src={hideShowPassword ? EmailIcon : PasswordLockIcon} alt="password-view-icon" className="password-visible-icon" onClick={handleHideShowPassword}/>
                    </div>
                    <span className="error-message">{error.passwordError}</span>
                    <div>
                        <button className="btn-one" type="submit">Log in</button>
                        <h3 className="no-acct-text">Have no account yet?</h3>
                        <button className="btn-two" onClick={handleRegisterSwitch}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;