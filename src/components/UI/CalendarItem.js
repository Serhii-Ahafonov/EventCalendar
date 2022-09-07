import './CalendarItem.css';

const CalendarItem = (props) => {
    const classes = 'item ' + props.className;

    return <div className={classes}>{props.children}</div>
}

export default CalendarItem;