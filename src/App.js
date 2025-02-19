import logo from './logo.svg';
import './App.css';
import React from 'react';

import avatar from "./assets/sage-avatar.jpeg";
import qrCode from "./assets/Qr-huyenbeo-fix.jpeg";

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from "react-icons/si";

const ProfilePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      <div className="text-center">
        <img src={avatar} alt="Avatar" className="avatar w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-2xl font-semibold mt-2">Huyen</h2>
        {/* <p className="text-gray-400">Mọi người ủng hộ tớ nè</p> */}
        {/* <button className="mt-2 text-2xl">📷</button> */}
      </div>
      
      <div className="button-container w-full max-w-sm mt-4 space-y-3">
        <button 
          className="w-full bg-gray-700 py-2 rounded-lg flex items-center justify-center gap-2" 
          onClick={() => window.location.href = "https://www.facebook.com/huyenbeo23"}
        >
          <FaFacebook className="fb text-blue-500 text-xl" />
          Facebook
        </button>

        <button 
          className="w-full bg-gray-700 py-2 rounded-lg flex items-center justify-center gap-2" 
          onClick={() => window.location.href = "https://www.instagram.com/xaugaitramtinh_/"}
        >
          <FaInstagram className="ig text-pink-500 text-xl" />
          Instagram
        </button>

        <button 
          className="w-full bg-gray-700 py-2 rounded-lg flex items-center justify-center gap-2" 
          onClick={() => window.location.href = "https://www.tiktok.com/@vocungluon"}
        >
          <SiTiktok className="tktk text-white text-xl" />
          TikTok
        </button>
      </div>


      <div className="div-img flex gap-4 mt-6">
        <img src={qrCode} alt="QR Code" className="image-box w-40 rounded-lg" />
        {/* <img src="sad-message.png" alt="Sad Message" className="w-40 rounded-lg" /> */}
      </div>
    </div>
  );
};

export default ProfilePage;
