import React, { useState } from "react";
import { LuFacebook } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";  

const FooterLink = ({ heading, links }) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4 text-clr-background">
        {heading}
      </h3>
      <ul className=" flex flex-col">
        {links.map((link, index) => (
          <li key={index} className="mb-1">
            <Link to="/" className="hover:underline">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
function Footer() {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
   const [success, setSuccess] = useState("");

   const handleSubmit = async (e) => {
     e.preventDefault();
     setError("");
     setSuccess("");

     // Check if email is valid
     if (!/\S+@\S+\.\S+/.test(email)) {
       setError("Please enter a valid email");
       return;
     }

     // Insert email into Supabase
     const { error: insertError } = await supabase
       .from("subscribers")
       .insert([{ email }]);

     if (insertError) {
       setError("Error subscribing to newsletter: " + insertError.message);
     } else {
       setSuccess("Thank you for subscribing!");
       setEmail(""); // Clear the input field
     }
   };  


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
                <a href="/" target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 max-xl:grid-cols-1 lg:grid-cols-3 max-sm:mb-10">
          <FooterLink heading="Quick Links" links={["About Us", "Features"]} />
          <FooterLink
            heading="Legal"
            links={["Privacy Policy", "Terms of Service"]}
          />
          <FooterLink heading="Support" links={["FAQs", "Contact Us"]} />
        </div>
        <form onSubmit={handleSubmit} className="max-xl:flex flex-col">
          <label htmlFor="" className="sr-only">
            Subscribe
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Subscribe for newsletter"
            className="p-2  rounded-lg w-[347px] bg-transparent border-clr-txt-tertiary border-[1px]  placeholder: text-clr-txt-tertiary max-sm:w-full  "
          />
          <button
            type="submit"
            className="bg-clr-btn-default hover:bg-clr-btn-hover mx-4 px-4 py-2  rounded-xl max-sm:mx-0 max-sm:my-4 max-xl:mx-0 max-xl:my-4"
          >
            Subscribe
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p className="text-clr-success mx-2 my-3">{success}</p>}{" "}
        </form>
      </div>
      <div className="container  text-center pt-8">
        <hr />
        <p className="pt-2">© 2024 Educonnect. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
