import React from "react";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-clr-base text-clr-background ">
      <div className="container">
        <h2 className="text-2xl font-bold">Educonnect</h2>
        <ul className="flex">
          <li>
            <IoLogoInstagram />
          </li>
          <li>
            <FaXTwitter />
          </li>h
          <li>
            <LuFacebook />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
