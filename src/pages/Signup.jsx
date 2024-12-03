import SignLayout from "../components/SignLayout";

//  Sign  up page
function Signup() {
  return (
    <SignLayout>
      <div className="flex  flex-col border max-w-[34.25rem] width-[calc(100% - 2rem)] m-auto p-4 max-sm:max-w-[100%]">
        <h2 className="text-2xl font-bold mb-2 text-center ">
          Join the EduConnect Community!
        </h2>
        <p className="text-clr-txt-secondary text-center text-[1rem]">
          Create your free account today and start connecting with students. Ask
          questions, share knowledge, and achieve your academic goals together.
        </p>
        <form className=" flex flex-col mx-10 my-4 max-sm:mx-0">
          <label htmlFor="fullName" className="flex flex-col ">
            Your Full Name
            <input
              type="text"
              id="fullName"
              name="FullName"
              className="border w-[100%] p-2 rounded-md  mt-2"
              placeholder="Enter your full name"
            />
          </label>
          <br />
          <label htmlFor="fullName" className="flex flex-col "></label>
          Your Email Address
          <div className="border w-[100%] p-2 rounded-md   mt-2 flex justify-between items-center">
            {" "}
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
            <img
              src="/icons/mail.svg"
              alt="mail icon"
              arial-label="mail icon"
            />
          </div>
          <br />
          <label htmlFor="fullName" className="flex flex-col ">
            Your Password
          </label>
          <div className="border w-[100%] p-2 rounded-md   mt-2 flex justify-between items-center">
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <img src="/icons/view-off-slash.svg" alt="password-hide icon" />
          </div>
          <br />
          <label htmlFor="fullName" className="flex flex-col ">
            Confirm Password
          </label>
          <div className="border w-[100%] p-2 rounded-md   mt-2 flex justify-between items-center">
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <img src="/icons/view-off-slash.svg" alt="password-hide icon" />
          </div>
          <div className="flex    my-6">
            <label className="sr-only"></label>
            <input
              type="checkbox"
              name=""
              id=""
              className="w-[18px] h-[18px] "
            />
            <p className=" leading-5 text-clr-txt-secondary pl-2">
              I agree to the Terms and Conditions and Privacy Policy of
              Educonnect.
            </p>
          </div>
          <div className="">
            <button
              type="submit"
              className="signup-btn  bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-4 py-2  rounded-xl w-[100%]"
            >
              Sign up
            </button>
          </div>
          <p className="font-bold my-6">
            Already have an account?{" "}
            <a href="/" className="text-clr-primary">
              {" "}
              Log in
            </a>
          </p>
          <div class="flex items-center mb-6">
            <span class="flex-grow border-t border-gray-300"></span>
            <span class="px-4 text-gray-600">or</span>
            <span class="flex-grow border-t border-gray-300"></span>
          </div>
          <div className="flex flex-col">
            <button className="flex justify-center items-center border px-4 py-2  my-2 rounded-xl bg-transparent  hover:bg-clr-surface">
              <img src="/icons/google.svg" alt="google-icon" />{" "}
              <span className="ml-2 text-clr-txt-secondary">
                Continue with Google
              </span>
            </button>
            <button className=" flex justify-center items-center border px-4 py-2  my-2 rounded-xl bg-transparent hover:bg-clr-surface">
              <img src="/icons/apple.svg" alt="apple-icon" />{" "}
              <span className="ml-2 text-clr-txt-secondary">
                Continue with Apple
              </span>
            </button>{" "}
            <button className="flex justify-center items-center border px-4 py-2  my-2 rounded-xl bg-transparent hover:bg-clr-surface">
              <img src="/icons/facebook.svg" alt="facebook-icon" />{" "}
              <span className="ml-2 text-clr-txt-secondary">
                Continue with Facebook
              </span>
            </button>
          </div>
        </form>
      </div>
    </SignLayout>
  );
}

export default Signup;
