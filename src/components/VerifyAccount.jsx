import AuthHeader from "./AuthHeader";
// Verify email page
function VerifyAccount() {
  return (
    <div className="container ">
      <AuthHeader />
      <section className="flex justify-center items-center min-h-[80vh]">
        <div className="max-w-[31.875rem]  w-[calc(100% - 2rem)] m-auto border rounded-lg  flex  flex-col justify-center items-center py-10 px-8">
          <img src="/icons/mail-lg.svg" alt="mail-lg icon" />
          <h2 className="text-4xl font-medium my-4">Verify Account</h2>
          <h3 className="text-clr-txt-secondary text-[1rem] max-w-sm">
            We’ve sent a Verification code to johndoe@gmail.com
          </h3>
          <form className="flex flex-col w-[100%] mt-2 max-w-2xl">
            <label htmlFor="email" className="my-2">
              {" "}
              Verification Code
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 mb-2 border rounded-[8px]"
              placeholder="Enter Verification Code"
            />
            <button
              type="submit"
              className=" mt-2 bg-clr-btn-default hover:bg-clr-btn-hover  text-clr-background px-4 py-2  rounded-xl w-[100%]"
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
