import React from "react";

//Not Found
function NotFound() {
  return (
    <div className="container flex justify-center items-center flex-col ">
      <h2 className="text-6xl my-10 ">Not found</h2>
      <a
        href="/"
        className="bg-clr-primary  text-clr-background border px-4 py-2 rounded-2xl "
      >
        Return to Home page
      </a>
    </div>
  );
}

export default NotFound;
