import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backArrowIcon from './assets/BackArrowIcon.png';
import notificationIcon from './assets/NotifIcon.png';
import darkModeIcon from './assets/MoonIcon.png';
import languageIcon from './assets/LanguageIcon.png';
import changePasswordIcon from './assets/KeyIcon.png';
import deleteAccountIcon from './assets/TrashIcon.png';
import rightArrowIcon from './assets/RightArrowIcon.png';
import DeleteAccountPopup from './DeleteAccountPopup';
import ChangePasswordPopup from './ChangePasswordPopup';

const Settings = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleChangePasswordClick = () => {
    setShowChangePasswordPopup(true);
  };

  const handleClosePopup = () => {
    setShowDeletePopup(false);
    setShowChangePasswordPopup(false);
  };

  const handleDeleteAccount = () => {
    // Add delete account logic here
    alert('Account deleted successfully!');
    setShowDeletePopup(false);
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <Link to="/" className="settings-back-arrow-link">
          <img src={backArrowIcon} alt="Back Arrow" className="settings-back-arrow-icon" />
        </Link>
        <h1>Settings</h1>
      </div>
      <div className="settings-content">
        <div className="settings-option">
          <img src={notificationIcon} alt="Notification" className="settings-icon" />
          <div className="settings-details">
            <label>Notifications</label>
            <p>Enable website notifications for everything, ensuring you stay informed about all activities in real-time.</p>
          </div>
          <label className="settings-toggle-switch">
            <input type="checkbox" />
            <span className="settings-slider"></span>
          </label>
        </div>
        <div className="settings-option">
          <img src={darkModeIcon} alt="Dark Mode" className="settings-icon" />
          <div className="settings-details">
            <label>Accessibility - Dark Mode</label>
            <p>Display the page with a darker color scheme for those who prefer it.</p>
          </div>
          <label className="settings-toggle-switch">
            <input type="checkbox" />
            <span className="settings-slider"></span>
          </label>
        </div>
        <div className="settings-option">
          <img src={languageIcon} alt="Change Language" className="settings-icon" />
          <div className="settings-details">
            <label>Change Language</label>
            <p>Select your preferred language for the website.</p>
          </div>
          <div className="settings-language-dropdown">
            <select>
              <option>English</option>
              <option>Bahasa Indonesia</option>
            </select>
            <span className="settings-custom-arrow"></span>
          </div>
        </div>

        <div className="settings-option" onClick={handleChangePasswordClick}>
          <img src={changePasswordIcon} alt="Change Password" className="settings-icon" />
          <div className="settings-details">
            <label>Change Password</label>
            <p>Update your password to enhance account security. Make sure your new password is strong and unique.</p>
          </div>
          <img src={rightArrowIcon} alt="Right Arrow" className="settings-right-arrow-icon" />
        </div>
        <div className="settings-option" onClick={handleDeleteClick}>
          <img src={deleteAccountIcon} alt="Delete Account" className="settings-icon" />
          <div className="settings-details">
            <label>Delete Account</label>
            <p>Permanently delete your account, removing all data from our system. This action is <b>irreversible</b>.</p>
          </div>
          <img src={rightArrowIcon} alt="Right Arrow" className="settings-right-arrow-icon" />
        </div>
      </div>
      {showDeletePopup && (
        <DeleteAccountPopup onClose={handleClosePopup} onDelete={handleDeleteAccount} />
      )}
      {showChangePasswordPopup && (
        <ChangePasswordPopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Settings;
