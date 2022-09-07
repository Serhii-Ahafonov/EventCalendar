import moment from 'moment';
import './Calendar.css';

function Calendar(props) {
    const date = new Date(),
        today = moment(date).format('YYYY-MM-DD'),
        weekdayShort = moment.weekdaysShort(),
        firstDayOfMonth = moment(props.currentDate).startOf("month").format("d"),
        lastDayOfMonth = moment(props.currentDate).endOf("month").format("d"),
        rows = [],
        blanks = [],
        daysInMonth = [],
        endBlanks = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
        blanks.push(
            <td className="calendar-day empty">{""}</td>
        );
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        endBlanks.push(
            <td className="calendar-day empty">{""}</td>
        );
    }

    for (let d = 1; d <= props.currentDate.daysInMonth(); d++) {
        const isCurrentDate = today === props.currentDate.format('YYYY-MM-DD'),
            currentDay = isCurrentDate && d === +props.currentDate.format('D') ? 'today' : '';

        daysInMonth.push(
            <td key={d} className={`calendar-day ${currentDay}`}>
                {d}
            </td>
        );
    }

    const totalSlots = [...blanks, ...daysInMonth, ...endBlanks];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row); // if index not equal 7 that means not go to next week
        } else {
            rows.push(cells); // when reach next week we contain all td in last week to rows
            cells = []; // empty container
            cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
            rows.push(cells);
        }
    });

    return (
        <table className="calendar">
            <thead className="week-container">
                <tr>
                    {weekdayShort.map(day => (
                        <th key={day} className="week-day">{day}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(d => (<tr>{d}</tr>))}
            </tbody>
        </table>
    );
}

export default Calendar;