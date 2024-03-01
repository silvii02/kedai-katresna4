// src/Login.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../dist/css/DaftarPage.css'

const DaftarPage = () => {
  const [username, setUsername] = useState('');
  const [username6, setUsername6] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const handleLogin = () => {

  };

  return (
    <div className="login-container">
      <a href="/">
      <div className="icon-with-text">
        <FontAwesomeIcon className='icon-1' icon={faArrowLeft} />
        <span>kembali</span>
      </div>
      </a>
      <form className="login-form">
        <label>
          <input
            className="login-input"
            type="text" placeholder="Nama"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
         <label>
          <input
            className="login-input"
            type="text" placeholder="Email"
            value={username6}
            onChange={(e) => setUsername6(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="password" placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input
            className="login-input"
            type="password" placeholder="Ketik ulang Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </label>
        <button className="login-button">
          DAFTAR
        </button>
      </form>
    </div>
  );
};

export default DaftarPage;