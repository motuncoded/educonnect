import React from 'react'

import { LiaBookSolid } from "react-icons/lia";
import { PiAtomThin } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { TbSquareRoot2 } from "react-icons/tb";

const SignLayout =({children})=>{
    return (
      <div className="container py-4">
        <header className="">
          <h1 className="text-2xl font-bold text-clr-primary h-40">
            Educonnect
          </h1>
        </header>
        <div className="mx-8 relative">
        <img src="/book.svg"
            className="book-icon absolute top-2 text-clr-icon-book text-4xl "
            aria-label="Book icon"
          />

          <img src="/math.svg"
            size="100"
            className="math-icon absolute top-2 left-[1180px]  font-thin text-clr-icon-math "
            aria-label="Square-root icon"
          />
          <main>{children}</main>
  
          <img src="/globe.svg"
            className="globe-icon absolute top-[274px]   text-clr-icon-globe "
            aria-label="globe icon"
          />
          <img src="/atom.svg"
            className="atom-icon absolute top-[274px] left-[1180px] text-clr-icon-atom"
            aria-label="Atom icon"
        />
        </div>
      </div>
    );
}

export default SignLayout;