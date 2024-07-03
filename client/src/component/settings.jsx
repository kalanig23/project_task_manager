import React, {useState} from "react";
import EmailIcon from "../assets/emailicon.png";
import PasswordIcon from "../assets/passwordicon.png";
import PasswordLockIcon from "../assets/passwordviewicon.png";
import PasswordUnHideIcon from "../assets/clarity_eye-hide-line.png";
import NameIcon from "../assets/usernameicon.png";
import './settings.css';

const Settings = () => {
    const [updateUserData, setUpdateUserData] = useState({name: '', email:'', oldpassword: '', newpassword: ''});
    const [error, setError] = useState({nameError: '', emailError:'', oldpasswordError: '', newpasswordError: ''});
    const [hideShowNewPassword, setHideShowNewPassword] = useState(false);
    const [hideShowOldPassword, setHideShowOldPassword] = useState(false);

    const handleOnChangeUpdateField = (e) => {
        setUpdateUserData({...updateUserData,[e.target.name]:e.target.value})
    }
    
    const handleUpdateSubmit=(e)=>{
        e.preventDefault();
        let newErrors = {};
        if(updateUserData.name!=='' && updateUserData.email!=='' && updateUserData.oldpassword!=='' && updateUserData.newpassword!=='') {
            console.log(updateUserData);
            if(updateUserData.oldpassword === updateUserData.newpassword){
                alert('Old Password and New Password field does not same');
            }else {
                alert('Update successfully', updateUserData);
                setUpdateUserData({name: '', email:'', oldpassword: '', newpassword: ''});
            }            
        } else {
            if(updateUserData.name===''){
                newErrors.nameError = 'Please enter your name';
            }
            if(updateUserData.email==='') {
                newErrors.emailError = 'Please enter your email';
            }
            if(updateUserData.oldpassword===''){
                newErrors.oldpasswordError = 'Please enter your oldpassword';
            }
            if(updateUserData.newpassword==='') {
                newErrors.newpasswordError = 'Please enter your password';
            }
        }
        setError({ ...error, ...newErrors });
    }

    const handleHideShowNewPassword = () => {
        setHideShowNewPassword(!hideShowNewPassword);
    }

    const handleHideShowOldPassword = () => {
        setHideShowOldPassword(!hideShowOldPassword);
    }

    return (
        <div className="setting-container">
             <form className="section-form" onSubmit={handleUpdateSubmit}>
                    <div className="name-input section-input-tag">
                        <img src={NameIcon} alt="user-icon"/>
                        <input placeholder="Name" name="name" value={updateUserData.name} onChange={handleOnChangeUpdateField}/>
                    </div>
                    <span className="error-message">{error.nameError}</span>
                    <div className="email-input section-input-tag">
                        <img src={EmailIcon} alt="email-icon"/>
                        <input placeholder="Update Email" name="email" type='email' value={updateUserData.email} onChange={handleOnChangeUpdateField}/>
                    </div>
                    <span className="error-message">{error.emailError}</span>
                    <div className="password-input section-input-tag">
                        <img src={PasswordIcon} alt="password-icon"/>
                        <input placeholder="Old Password" name="oldpassword" type={hideShowOldPassword ? 'text' : 'password'} value={updateUserData.oldpassword} onChange={handleOnChangeUpdateField}/>
                        <img src={hideShowOldPassword ? PasswordUnHideIcon : PasswordLockIcon} alt="password-view-icon" className="password-visible-icon" onClick={handleHideShowOldPassword}/>
                    </div>
                    <span className="error-message">{error.oldpasswordError}</span>
                    <div className="password-input section-input-tag">
                        <img src={PasswordIcon} alt="password-icon"/>
                        <input placeholder="New Password" name="newpassword" type={hideShowNewPassword ? 'text' : 'password'} value={updateUserData.newpassword} onChange={handleOnChangeUpdateField}/>
                        <img src={hideShowNewPassword ? PasswordUnHideIcon : PasswordLockIcon} alt="password-view-icon" className="password-visible-icon" onClick={handleHideShowNewPassword}/>
                    </div>
                    <span className="error-message">{error.newpasswordError}</span>
                    <div>
                        <button className="btn-one" type='submit'>Update</button>
                    </div>
                </form>
        </div>
    )
}

export default Settings;