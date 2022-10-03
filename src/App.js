import React from "react";
import Notification from "./components/Notification";
import "bootstrap/dist/css/bootstrap.min.css";
import notificationContext from "./context/notificationContext";
import {notifications} from "./api/notifications";
import { useState } from "react";

const App = () => {
    const [notifState,setNotifState] = useState(notifications);
  return (
    <notificationContext.Provider value={{notifications:notifState,setNotifState}}>
      <Notification />
    </notificationContext.Provider>
  );
};

export default App;
