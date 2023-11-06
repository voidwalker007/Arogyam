import { Sidenav } from './Sidenav';

function Dashboard() {
  return (
    <div className="flex w-screen h-screen  p-5">
      <Sidenav />
      <div className="flex w-full mx-5 main-button-card h-full ">
      <div className="w-3/4 h-full">
        
        <div className="w-full h-2/8 border border-sky-500">
        top header

        </div>
        
        
        
     
      </div>
      <div className="w-2/4 h-full border-x-4">
        Rght <col />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;