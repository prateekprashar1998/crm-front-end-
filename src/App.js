import React from "react";
import './App.css';
import DefaultLayout from "./layout/DefaultLayout"

import AddTicket  from "./pages/new-ticket/AddTicketpage"
/*import Entry from './pages/Entry/Entrypage'*/
/*import Dashboard  from "./pages/dashboard/Dashboard"*/
/*import Dashboard  from "./pages/dashboard/Dashboard"*/


function App() {
  return (
    <div className="App">
     {/*<Entry/>*/}
     <DefaultLayout>
     { /* <Dashboard /> */}
     <AddTicket/>
      </DefaultLayout>
      

      </div>
  );
}

export default App;
