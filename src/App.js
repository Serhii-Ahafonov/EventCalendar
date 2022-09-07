import Calendar from "./components/Calendar/Calendar";
import CalendarNavigator from "./components/Calendar/CalendarNavigator";
import { useState } from "react";
import moment from "moment";

function App() {
    const [currentDate, setCurrentDate] = useState(moment);
    const [months, setCurrentMonth] = useState(moment.months());
    const props = {currentDate, months, setCurrentMonth, setCurrentDate};


  return (
    <div>
        <CalendarNavigator data={props}/>
        <Calendar currentDate={props.currentDate}/>
    </div>
  );
}

export default App;
