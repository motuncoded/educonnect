import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";

// ForgetPassword  page
function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <AuthHeader />
      <section className="flex justify-center items-center min-h-[80vh] max-sm:my-4 max-sm:mx-3">
        <div className="w-[31.813rem]  border rounded-lg  flex  flex-col justify-center items-center py-10 px-8 max-sm:px-2  ">
          <img src="/icons/mail-lg.svg" alt="mail-lg icon" />
          <h2 className="text-4xl font-medium my-4">Forget Password</h2>
          <h3 className="text-clr-txt-secondary  text-center ">
            Enter the email address linked to your account to reset your
            password{" "}
          </h3>
          <form className="flex flex-col w-[100%] mt-4 ">
            <label htmlFor="email" className="my-2 ">
              {" "}
              Your Email Address
            </label>
            <div className="flex justify-between items-center p-2 border rounded-[8px] ">
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none"
                placeholder="Enter your email address"
              />
              <img src="/icons/mail.svg" alt="mail icon" />
            </div>
            <button
              type="submit"
              className=" mt-4 bg-clr-btn-default hover:bg-clr-btn-hover  text-clr-background px-4 py-2  rounded-xl w-[100%]"
            >
              Request reset link{" "}
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

export default ForgetPassword;
