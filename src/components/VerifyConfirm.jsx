import AuthHeader from "./AuthHeader";
import { useNavigate } from "react-router-dom";

// ForgetPassword  page
function VerifyConfirm() {
  const navigate = useNavigate();

  return (
    <div className="container ">
      <AuthHeader />
      <section className="flex justify-center items-center min-h-[80vh] max-sm:my-4 max-sm:mx-3">
        <div className="w-[31.313rem]  border rounded-lg  flex  flex-col justify-center items-center py-10 px-8 max-sm:px-2  ">
          <img src="/icons/check-circle.svg" alt="check-circle icon" />
          <h2 className="text-4xl font-medium my-4"> Account Verified</h2>
          <h3 className="text-clr-txt-secondary  text-center font-inter ">
            Congratulations! Your account has been verified
          </h3>

          <button
            className="mt-8 font-bold text-clr-primary"
            onClick={() => navigate("/dashboard")}
          >
            Proceed
          </button>
        </div>
      </section>
    </div>
  );
}

export default VerifyConfirm;
