import React from 'react'
import DashboardHeader from './DashboardHeader'
import SubjectModal from './SubjectModal';


function Dashboard() {
  return (
    <div className="max-w-[1312px] w-[calc(100% - 1rem)] m-auto ">
      <DashboardHeader />
      <main className="grid grid-cols-3 gap-4 mt-10">
        <SubjectModal/>
      </main>
    </div>
  );
}

export default Dashboard

