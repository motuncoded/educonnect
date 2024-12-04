import AuthHeader from "./AuthHeader";
// Verify email page
function VerifyAccount() {
  return (
    <div className="container ">
      <AuthHeader />
      <section className="flex justify-center items-center min-h-[80vh] max-sm:-my-4 max-sm:mx-3">
        <div className="w-[31.875rem]  border rounded-lg  flex  flex-col justify-center items-center py-10 px-4 max-sm:px-2  ">
          <img src="/icons/mail-lg.svg" alt="mail-lg icon" />
          <h2 className="text-4xl font-medium my-4">Verify Account</h2>
          <h3 className="text-clr-txt-secondary  text-center  ">
            We’ve sent a Verification code to johndoe@gmail.com
          </h3>
          <form className="flex flex-col w-[100%] mt-4 ">
            <label htmlFor="email" className="my-2 ">
              {" "}
              Verification Code
            </label>
            <input
              type="text"
              id="code"
              name="text"
              className="p-2 mb-2 border rounded-[8px] "
              placeholder="Enter Verification Code"
            />
            <button
              type="submit"
              className=" mt-4 bg-clr-btn-default hover:bg-clr-btn-hover  text-clr-background px-4 py-2  rounded-xl w-[100%]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default VerifyAccount;
