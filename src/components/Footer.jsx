import React from "react";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";


const FooterLink = ({heading, links}) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4 text-clr-background">
        {heading}
      </h3>
      <ul className=" flex flex-col">
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <a href="#" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
}
function Footer() {
  return (
    <footer className="bg-clr-base text-clr-txt-tertiary  py-8  px-2 max-xl:px-4">
      <div className="container flex justify-between  max-sm:flex-col max-sm:justify-start">
        <div className="flex  flex-col">
          <h2 className="text-3xl font-bold text-clr-background">Educonnect</h2>
          <ul className="flex mt-8 max-sm:mb-10">
            {[
              <IoLogoInstagram size="24" />,
              <FaXTwitter size="24" />,
              <LuFacebook size="24" />,
            ].map((icon, index) => (
              <li
                key={index}
                className="mr-6 bg-clr-surface text-clr-base rounded-full p-[.3rem]"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 lg:grid-cols-3 max-sm:mb-10">
          <FooterLink heading="Quick Links" links={["About Us", "Features"]} />
          <FooterLink
            heading="Legal"
            links={["Privacy Policy", "Terms of Service"]}
          />
          <FooterLink heading="Support" links={["FAQs", "Contact Us"]} />
        </div>
        <div className="max-xl:flex flex-col">
          <label htmlFor="" className="sr-only">
            Subscribe
          </label>
          <input
            placeholder="Subscribe for newsletter"
            className="p-2  rounded-lg w-[300px] bg-transparent border-clr-txt-tertiary border-2  placeholder:text-clr-background "
          />

          <button className="bg-clr-primary  text-clr-background mx-4 px-4 py-2 focus:outline-none focus:ring-2 rounded-2xl max-sm:mx-0 max-sm:my-4 max-xl:mx-0 max-xl:my-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className="container  text-center pt-8">
        <hr />
        <p className="pt-2">© 2024 Educonnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
