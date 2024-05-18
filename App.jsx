import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"; // Import ikon

import './App.css';

function Login() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Tambahkan state untuk menampilkan password

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Fungsi untuk menampilkan/menyembunyikan password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="background">
        <img src="keranjang.png" alt="Keranjang" />
      </div>
      <div className={`popup ${isPopupVisible ? 'show' : ''}`} id="popup-1">
        <div className="content">
          <h1>Selamat datang!</h1>
          <label>Username</label>
          <div className="input-field">
            <input style={{border:'none', width: '82%' }} placeholder="Masukan username" className="validate" />
          </div>
          <label>Password</label>
          <div className="input-field" style={{ position: 'relative' }}>
            <input 
              style={{ boxShadow: "0px 4px 5px rgba(200, 200, 200, 0.5)", border:'none', width: '82%' }} 
              placeholder="Password" 
              className="validate" 
              type={showPassword ? "text" : "password"} // Tampilkan atau sembunyikan password
            />
            {/* Tambahkan ikon untuk melihat/menyembunyikan password */}
            <div style={{ position: 'absolute', right: '10px', top: '49%', paddingRight:'15%', color:'#C8C8C8'}}>
              {showPassword ? (
                <EyeInvisibleOutlined onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
              ) : (
                <EyeOutlined onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
              )}
            </div>
          </div>
          <button className="second-button">Masuk</button>
          <div className="line">ATAU</div>
          <div className="fb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="ikon_facebook.png" alt="Facebook" style={{ width: "10%", height: "10%" }} />
            <span style={{ fontFamily: 'Poppins', marginLeft: '10px' }}>Lanjut dengan Facebook</span>
          </div>
          <div className="gg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '25px' }}>
            <img src="ikon_google.png" alt="Google" style={{ width: "10%", height: "10%" }} />
            <span style={{ fontFamily: 'Poppins', marginLeft: '12px' }}>Lanjut dengan Google</span>
          </div>
          <p>Belum punya akun? <a href="/daftar.html">Daftar</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
