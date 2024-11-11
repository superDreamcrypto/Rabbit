import React from "react";
import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import "../assets/styles/SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <button className="social-btn">
        <FaTwitter />
      </button>
      <button className="social-btn">
        <FaTelegram />
      </button>
      <button className="social-btn">
        <FaDiscord />
      </button>
      <button className="social-btn">
        <FaGithub />
      </button>
      <button className="social-btn">
        <FaInstagram />
      </button>
      <button className="social-btn">
        <FaMedium />
      </button>
    </div>
  );
}

export default SocialLinks;
