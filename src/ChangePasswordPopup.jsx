import React, { useState } from 'react';
import './ChangePasswordPopup.css'; // Import the unique CSS file
import lockIcon from './assets/LockIcon.png';
import ForgotPasswordPopup from './ForgotPasswordPopup';

const ChangePasswordPopup = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      alert('Password changed successfully!');
      onClose();
    } else {
      alert('New passwords do not match!');
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const handleCloseForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(false);
  };

  return (
    <div className="changepassword-popup">
      <div className="popup-content">
        <button className="close-button-top" onClick={onClose}>×</button>
        <h2 className="popup-title">Change Password</h2>
        <p>Create a new password that’s strong and memorable. For extra security, try to combine <strong>uppercase letters, numbers, and symbols</strong>. It is not recommended to use common words and names.</p>
        <div className="input-group">
          <label>Verify Old Password</label>
          <div className="input-container">
            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            <img src={lockIcon} alt="Lock Icon" className="input-icon" />
          </div>
          <a href="#" className="forgot-password-link" onClick={handleForgotPasswordClick}>Forgot Password?</a>
        </div>
        <div className="input-group">
          <label>New Password</label>
          <div className="input-container">
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <img src={lockIcon} alt="Lock Icon" className="input-icon" />
          </div>
        </div>
        <div className="input-group">
          <label>Confirm New Password</label>
          <div className="input-container">
            <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
            <img src={lockIcon} alt="Lock Icon" className="input-icon" />
          </div>
        </div>
        <button className="update-password-button" onClick={handleChangePassword}>Update Password</button>
      </div>
      {showForgotPasswordPopup && (
        <ForgotPasswordPopup onClose={handleCloseForgotPasswordPopup} />
      )}
    </div>
  );
};

export default ChangePasswordPopup;
