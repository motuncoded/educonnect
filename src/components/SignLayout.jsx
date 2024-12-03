import AuthHeader from "./AuthHeader";
// layout for sign in and out
const SignLayout = ({ children }) => {
  return (
    <div className="container py-4 ">
     <AuthHeader/>
      <div className="mx-8 relative max-sm:mx-4 ">
        <img
          src="icons/book.svg"
          className="book-icon absolute top-2 text-clr-icon-book text-4xl max-sm:hidden  max-xl:hidden "
          alt="book-icon"
        />

        <img
          src="/icons/math.svg"
          size="100"
          className="math-icon absolute top-2 left-[1080px]  font-thin text-clr-icon-math max-sm:hidden  max-xl:hidden"
          alt="math-icon"
        />
        <main>{children}</main>

        <img
          src="/icons/globe.svg"
          className="globe-icon absolute bottom-[290px]   text-clr-icon-globe max-sm:hidden  max-xl:hidden"
          alt="globe-icon"
        />
        <img
          src="/icons/atom.svg"
          className="atom-icon absolute bottom-[290px] left-[1080px] text-clr-icon-atom max-sm:hidden  max-xl:hidden"
          alt="atom-icon"
        />
      </div>
    </div>
  );
};

export default SignLayout;
