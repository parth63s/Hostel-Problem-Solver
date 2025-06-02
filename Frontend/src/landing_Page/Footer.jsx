import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-5 border-top min-background pt-3 bg-white" >
      <div class="f-info">
        <div class="f-info-socials ">
          <i class="fa-regular fa-copyright"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div class="f-info-brand pt-2">Hostel Wardens Limited</div>
        <div class="f-info-links pt-2 pb-3">
          <a href="/help" class>
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
