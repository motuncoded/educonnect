import SignLayout from "../components/SignLayout";
import { CiMail } from "react-icons/ci";

//  Sign  up page
function Signup() {
  return (
    <SignLayout>
      <div className="flex   flex-col border max-w-[34.25rem] width-[calc(100% - 2rem)] m-auto p-4">
        <h2 className="text-2xl font-bold mb-2 tex-center ">
          Join the EduConnect Community!
        </h2>
        <p className="text-clr-txt-secondary text-center text-[1rem]">
          Create your free account today and start connecting with students. Ask
          questions, share knowledge, and achieve your academic goals together.
        </p>
        <form className=" flex flex-col mx-10 my-8">
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
            <CiMail size="24" />
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
              className="border w-[100%] p-2 rounded-md  mt-2"
              placeholder="Enter your password"
            />
          </div>
          <br />
          <label htmlFor="fullName" className="flex flex-col ">
            Confirm Password
            <input
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              className="border w-[100%] p-2 rounded-md mt-2"
              placeholder="Confirm your password"
            />
          </label>
        </form>
      </div>
    </SignLayout>
  );
}

export default Signup;
