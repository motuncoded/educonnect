import SignLayout from "../components/SignLayout";

//  Sign in page
function Signin() {
  return (
    <SignLayout>
      <div className="flex  flex-col border rounded-lg  max-w-[34.25rem] w-[calc(100% - 2rem)] m-auto p-4 max-sm:max-w-[100%]">
        <h2 className="text-3xl font-bold mt-4 mb-2 text-center ">
          Welcome Back to EduConnect!{" "}
        </h2>
        <p className="text-clr-txt-secondary text-center text-[1rem]">
          Log in to continue your learning journey. Access your personalized
          dashboard, connect with peers, and get answers to your study questions
          anytime, anywhere.
        </p>
        <form className=" flex flex-col mx-10 my-6 max-sm:mx-0">
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
          <a href="#" className="text-clr-primary my-6">Forget Password?</a>
          <div className="">
            <button
              type="submit"
              className="bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-4 py-2  rounded-xl w-[100%]"
            >
              Log in
            </button>

          </div>
          <p className="font-bold my-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-clr-primary">
              {" "}
              Sign up
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

export default Signin;
