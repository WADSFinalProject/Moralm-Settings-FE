import React, { useState } from 'react';
import './DeleteAccountPopup.css';
import ExclamationMarkIcon from './assets/ExclamationMark.png';

const DeleteAccountPopup = ({ onClose, onDelete }) => {
  const [confirmation, setConfirmation] = useState('');

  return (
    <div className="dap-delete-account-popup">
      <div className="dap-popup-content">
        <button className="dap-close-button-top" onClick={onClose}>×</button>
        <h2 className="dap-popup-title">Delete Account</h2>
        <div className="dap-popup-warning">
          <strong>Warning<img src={ExclamationMarkIcon} className='dap-ExclamationWarning'/></strong>
          <p>
            Deleting this account will remove you from our systems, which means that 
            <strong> you will not be able to log in</strong>, and that you will be 
            <strong> prevented from accessing all of MorAlm's contents</strong> in the near future. 
            This action will be <strong>irreversible</strong>, meaning that it cannot be undone.
          </p>
        </div>
        <div className="dap-confirmation-input">
          <p>If you are okay with this, type "DELETE" in this input box below.</p>
          <input 
            type="text" 
            value={confirmation} 
            onChange={(e) => setConfirmation(e.target.value)} 
          />
        </div>
        <div className="dap-button-container">
          <button 
            className="dap-delete-button" 
            onClick={onDelete} 
            disabled={confirmation !== 'DELETE'}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountPopup;
