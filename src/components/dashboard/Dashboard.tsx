import { Sidenav } from "./Sidenav";

function Dashboard() {
  return (
    <div className="flex w-screen h-screen  p-5">
      <Sidenav />
      <div className="flex w-full mx-5 main-button-card h-full gap-5 ">
        <div className="w-3/4 ">
          <div className="flex w-full flex-col h-full border border-red-500 gap-5 py-5 mx-5 ">
            <div className="top-header  h-32 border border-blue-500 ">

            <div className="flex justify-between w-full">
        <h1 className="w-half border border-green-500">Hello user</h1>
        <div className="w-half border border-green-500">
          Search box
        </div>
            </div>


            </div>
            <div className="flex-1 h-full border border-sky-500">1sdt</div>
            <div className="flex-1 h-full border border-sky-500">2nd</div>
            <div className="flex-1 h-full border border-sky-500">3rd</div>
          </div>
        </div>
        <div className="flex flex-col w-2/4 h-full border-x-4 gap-5 py-5 mx-5">
          <div className="flex-1 border border-red-500">1st</div>
          <div className="flex-1 border border-red-500">2nd</div>
          <div className="flex-1 border border-red-500">3rd</div>
          <div className="flex-1 border border-red-500">4th</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
