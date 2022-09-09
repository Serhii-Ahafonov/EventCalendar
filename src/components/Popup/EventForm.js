import './EventForm.css';
import Modal from "../UI/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";

function EventFormPopUp(props) {
    const [enteredTitle, setEnteredTitle] = useState(props.item.enteredTitle);
    const [enteredDescription, setEnteredDescription] = useState(props.item.enteredDescription);
    const [enteredDate, setEnteredDate] = useState(props.item.enteredDate);
    const [enteredTime, setEnteredTime] = useState(props.item.enteredTime);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const onChangeDate = (event) => {
        setEnteredDate(event.target.value);
    };

    const onChangeTime = (event) => {
        setEnteredTime(event.target.value);
    };

    const onSaveChanges = () => {
        // if (enteredTitle && )
        const newItemEvent = {
            enteredTitle,
            enteredDescription,
            enteredDate,
            enteredTime
        };
        props.onSave(newItemEvent);
    };



    return (
        <Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="header">
                    { props.item.length
                        ? <h3>Edit idea item</h3>
                        : <h3>Add new idea Item</h3> }
                    <span className="close" onClick={props.onClose}>x</span>
                </div>
                <div className="body">
                    <div className="add-title">
                        <label htmlFor="">Title*</label>
                        <input {...register("title")}
                               className="custom"
                               type="text"
                               placeholder="Title goes here"
                               value={enteredTitle}
                               onChange={titleChangeHandler}/>
                        <i className="id-form"></i>
                    </div>
                    <div className="add-description">
                        <label htmlFor="">Description</label>
                        <textarea className="custom"
                                  name=""
                                  id=""
                                  cols="30"
                                  rows="5"
                                  value={enteredDescription}
                                  onChange={descriptionChangeHandler}/>
                    </div>
                    <div className="date-container">
                        <div className="add-date">
                            <label htmlFor="">Date</label>
                            <input className="custom"
                                   type="date"
                                   value={enteredDate}
                                   onChange={onChangeDate}/>
                        </div>

                        <div className="add-time">
                            <label htmlFor="">Begin time:</label>
                            <input className="custom"
                                   type="time"
                                   value={enteredTime}
                                   onChange={onChangeTime}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="save"
                            onClick={onSaveChanges}>SAVE</button>
                    <input type="submit" />
                </div>
            </form>
        </Modal>
    )
}

export default EventFormPopUp;