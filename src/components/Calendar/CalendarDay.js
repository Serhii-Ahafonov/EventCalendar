import React from "react";

import './CalendarDay.css';
import CalendarItem from "../UI/CalendarItem";

function CalendarDay(props) {
    console.log(props.title)

    return (
        <CalendarItem className="calendar-day">
            <div className="calendar-day__description">
                <h3>3</h3>
                <h3>Tu</h3>
            </div>
        </CalendarItem>
    );
}

export default CalendarDay;