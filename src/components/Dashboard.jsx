import React from "react";
import DashboardHeader from "./DashboardHeader";
import SubjectModal from "./SubjectModal";
import QuestionChat from "./QuestionChat";
import UserAccount from "./UserAccount";

function Dashboard() {
  return (
    <div className="max-w-[1312px] w-[calc(100% - 1rem)] m-auto ">
      <DashboardHeader />
      <main className="grid grid-cols-12 gap-4 mt-10">
        <SubjectModal />
        <QuestionChat />
        <UserAccount />
      </main>
    </div>
  );
}

export default Dashboard;
