import React from 'react'

function DashboardHeader() {
  return (
    <div className="max-w-[1312px] w-[calc(100% - 1rem)] m-auto flex justify-between items-center  h-[112px]">
      <header className="">
        <h1 className="text-4xl font-bold text-clr-primary ">Educonnect</h1>
      </header>
      <form action="">
        <div className="flex  items border bg-clr-border py-3 px-4 w-[468px] ">
          <img src="/icons/search.svg" alt="search icon" />
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search"
            className="bg-clr-border mx-2 placeholder-[#bababa]"
          />
        </div>
      </form>
      <button
        type="submit"
        className="bg-clr-btn-default hover:bg-clr-btn-hover text-clr-background px-6 py-3  rounded-xl"
      >
        Ask a question
      </button>
      <img src="/icons/notification.svg" alt="notification icon" />
      <div>
        <img src="" />
      </div>
    </div>
  );
}

export default DashboardHeader
