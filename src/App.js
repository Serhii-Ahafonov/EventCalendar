import Calendar from "./components/Calendar/Calendar";
import CalendarNavigator from "./components/Calendar/CalendarNavigator";
import { useState } from "react";
import moment from "moment";
import EventFormPopUp from "./components/Popup/EventForm";
import {getStorageItemsEvents, setStorageItemsEvents} from "./services/webStorage";

function App() {
    const [currentDate, setCurrentDate] = useState(moment);
    const [itemEvents, setItemEvents] = useState(getStorageItemsEvents());
    const [currentItemEvent, setCurrentItemEvent] = useState({});
    const [formIsShown, setFormIsShown] = useState(false);
    const props = { currentDate, setCurrentDate, itemEvents };

    const showFormHandler = itemEvent => {
        setFormIsShown(true);
        setCurrentItemEvent(itemEvent || {});
    };

    const hideFormHandler = () => {
        setFormIsShown(false);
    };

    const saveItemEvent = (data) => {
        const creationDate = new Date().toLocaleString();

        if (!!data.creationDate) {
            const index = itemEvents.findIndex((obj => obj.creationDate === data.creationDate));
            itemEvents[index].title = data.title;
            itemEvents[index].description = data.description;
            itemEvents[index].date = data.date;
            itemEvents[index].time = data.time;
            itemEvents[index].creationDate = creationDate;
        } else {
            data.creationDate = creationDate;
            setItemEvents([data, ...itemEvents]);
        }

        hideFormHandler();
    };

    const deleteItemEvent = (data) => {
        const index = itemEvents.findIndex((item => item.creationDate === data.creationDate));
        itemEvents.splice(index, 1);
        setItemEvents(itemEvents);
        hideFormHandler();
    };

    setStorageItemsEvents(itemEvents);

    return (
        <div>
            {formIsShown &&
            <EventFormPopUp onSave={saveItemEvent}
                            onClose={hideFormHandler}
                            onDelete={deleteItemEvent}
                            item={currentItemEvent}/>}
            <CalendarNavigator data={props} onShowForm={showFormHandler}/>
            <Calendar data={props} onShowForm={showFormHandler}/>
        </div>
    );
}

export default App;
