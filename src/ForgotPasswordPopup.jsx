import React from 'react';
import './ForgotPasswordPopup.css';
import emailIcon from './assets/EmailIcon.png';
import smsIcon from './assets/SMSIcon.png';

const ForgotPasswordPopup = ({ onClose }) => {
  return (
    <div className="forgot-password-popup">
      <div className="forgot-password-popup-content">
        <button className="forgot-password-popup-close-button" onClick={onClose}>×</button>
        <h2 className="forgot-password-popup-title">Forgot Password</h2>
        <p className="forgot-password-popup-choose-text">Choose whether you want your 4 digit OTP code to be sent through Email or SMS.</p>
        <div className="forgot-password-popup-option" onClick={() => alert('OTP sent via Email!')}>
          <img src={emailIcon} alt="Email Icon" className="forgot-password-popup-email-icon" />
          <div className="forgot-password-popup-option-details">
            <label>Email</label>
            <p>Your OTP will be sent to john.smith@moringa.com.</p>
          </div>
        </div>
        <div className="forgot-password-popup-option" onClick={() => alert('OTP sent via SMS!')}>
          <img src={smsIcon} alt="SMS Icon" className="forgot-password-popup-sms-icon" />
          <div className="forgot-password-popup-option-details">
            <label>SMS</label>
            <p>Your OTP will be sent to +62 812 3456 ****.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
