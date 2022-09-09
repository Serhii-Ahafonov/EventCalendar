import React from "react";
import moment from "moment";
import './CalendarNavigator.css';

function CalendarNavigator(props) {
    const months = moment.months();
    const currentMonth = () => {
        return props.data.currentDate.format("MMMM");
    };

    const currentYear = () => {
        return props.data.currentDate.format("Y");
    };

    const onChangeMonth = event => {
        const index = event.currentTarget.className === 'next' ? 1 : -1,
            indexMonth = months.indexOf(currentMonth()) + index,
            dateObject = Object.assign({}, props.data.currentDate);

        props.data.setCurrentDate(moment(dateObject).set("month", indexMonth));
    };

    const onChangeDate = event => {
        const newMonth = moment(new Date(event.target.value)).format('MMMM'),
            newYear = moment(new Date(event.target.value)).format('Y'),
            indexMonth = props.data.months.indexOf(newMonth),
            dateObject = Object.assign({}, props.data.currentDate);

        props.data.setCurrentDate(moment(dateObject).set({ 'year': newYear, 'month': indexMonth }));
    };


    return (
        <div className="calendar-nav">
            <div className="calendar-nav__action" onClick={props.onShowForm}>+</div>
            <div className="calendar-nav__filters">
                <div className="filter">
                    <span className="previous" onClick={onChangeMonth}>&lt;</span>
                    <span className="month-container">
                        {months.map(data => (
                            <span className={`month ${data === currentMonth() ? "selected" : ""}`}>{data}</span>
                        ))}
                    </span>
                    <span className="year-container">
                        {currentYear()}
                    </span>
                    <span className="next" onClick={onChangeMonth}>&gt;</span>
                </div>
                <div className="filter">
                    <input type="date" onChange={onChangeDate}/>
                </div>
            </div>
        </div>
    );
}

export default CalendarNavigator;