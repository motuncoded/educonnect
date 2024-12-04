import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";

// Verify email page
function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <AuthHeader />
      <section className="flex justify-center items-center min-h-[80vh] max-sm:my-4 max-sm:mx-4">
        <div className="w-[39.25rem] max-sm:w-[24.875rem]  border rounded-lg  flex  flex-col justify-center items-center py-10 px-4 max-sm:px-0  ">
          <h2 className="text-4xl font-bold my-2 max-sm:text-[1.75rem]">
            Reset your Password
          </h2>
          <h3 className="text-clr-txt-secondary  text-center  ">
            Enter a new password for your account{" "}
          </h3>
          <form className="flex flex-col w-[29.25rem] max-sm:w-[18.875rem] mt-10 ">
            <label htmlFor="password" className="flex flex-col ">
              Your Password
            </label>
            <div className="border p-2 rounded-md mt-2 flex justify-between items-center">
              <input
                type="text"
                id="password"
                name="password"
                className="outline-none"
                placeholder="Enter your password"
              />
              <img src="/icons/view-off-slash.svg" alt="password-hide icon" />
            </div>
            <br />
            <label htmlFor="password" className="flex flex-col ">
              Confirm Password
            </label>
            <div className="border w-[100%] p-2 rounded-md   mt-2 flex justify-between items-center">
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                className="outline-none"
                placeholder="Confirm Password"
              />
              <img src="/icons/view-off-slash.svg" alt="password-hide icon" />
            </div>
            <a
              href="/forgetpassword"
              className="text-clr-primary font-medium my-6"
            >
              Forget Password?
            </a>
            <button
              type="submit"
              className="  bg-clr-btn-default hover:bg-clr-btn-hover  text-clr-background px-4 py-2  rounded-xl w-[100%]"
            >
              Log in
            </button>
            <button
              className="mt-8 font-bold font-inter"
              onClick={() => navigate("/signin")}
            >
              {" "}
              Back to Login{" "}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;
