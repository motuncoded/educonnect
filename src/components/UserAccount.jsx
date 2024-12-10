import React from "react";

const CreateAccount = () => {
  return (
    <div class="flex items-center space-x-2 px-4 py-4 border-t">
      <div>
        <img
          src="/icons/tick.svg"
          alt="tick icon"
          className="bg-clr-success rounded-full p-2"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[14px] font-medium text-[#255827]">
          Created an account
        </h3>
        <h4 className=" text-[1rem] text-[#69B36C] font-normal">
          You created an account
        </h4>
      </div>
    </div>
  );
};
const BadgeAccount = ({ heading, paragraph, button }) => {
  return (
    <div class="flex space-x-4 px-4 py-4 border-t">
      <div>
        <img
          src="/icons/trophy-sm.svg"
          alt="tick icon"
          className="bg-[#F5F5F5] p-2 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[14px] font-medium">{heading}</h3>
        <h4 className=" text-[12px] text-[#6A6A6A]">{paragraph}</h4>

        <button className="  bg-clr-btn-default hover:bg-clr-btn-hover text-[12px] text-clr-background px-3 py-2 my-2  rounded-xl max-sm:w-[100%]">
          {button}
        </button>
      </div>
    </div>
  );
};

const AIBadge = ({ heading, paragraph }) => {
  return (
    <div class="flex  space-x-4 pl-4 py-4 border-t">
      <div>
        <img
          src="/icons/trophy-sm.svg"
          alt="tick icon"
          className="bg-[#F5F5F5] mr-2 p-2 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[14px] font-medium">{heading}</h3>
        <h4 className=" text-[12px] text-[#6A6A6A]">{paragraph}</h4>
      </div>
    </div>
  );
};
const ContributorBadge = ({ heading, paragraph }) => {
  return (
    <div class="flex  space-x-4 pl-4 py-4 border-t">
      <div>
        <img
          src="/icons/trophy-sm.svg"
          alt="tick icon"
          className="bg-[#F5F5F5] p-2 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[14px] font-medium">{heading}</h3>
        <h4 className=" text-[12px] text-[#6A6A6A]">{paragraph}</h4>
      </div>
    </div>
  );
};
function UserAccount() {
  return (
    <div className="max-sm:hidden col-span-3 border  h-[446px]  ">
      <div className="flex items-center  space-x-4   py-4 px-4">
        <div>
          <img
            src="/persons/girll.jpeg"
            alt="girl"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <h3 className=" font-medium">Jane Emmanuel</h3>
      </div>

      <CreateAccount />
      <BadgeAccount
        heading="Rising Star"
        paragraph="Ask 10+ questions"
        button="Claim badge"
      />
      <ContributorBadge
        heading="Top Contributor"
        paragraph="Awarded for asking 10+ questions"
      />
      <AIBadge
        heading="AI Guru"
        paragraph="Awarded for using AI assistance effectively in answers"
      />
    </div>
  );
}

export default UserAccount;
