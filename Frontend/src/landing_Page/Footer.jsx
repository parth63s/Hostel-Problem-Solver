import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-5 border-top min-background pt-3 bg-white" >
      <div className="f-info">
        <div className="f-info-socials ">
          <i className="fa-regular fa-copyright"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="f-info-brand pt-2">Hostel Wardens Limited</div>
        <div className="f-info-links pt-2 pb-3">
          <a href="/help" >
            Help
          </a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
