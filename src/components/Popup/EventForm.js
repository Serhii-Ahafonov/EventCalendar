import './EventForm.css';
import Modal from "../UI/Modal";
import { useForm } from "react-hook-form";

function EventFormPopUp(props) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        data.creationDate = props.item.creationDate;
        props.onSave(data);
    };

    return (
        <Modal>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="header">
                    { !!props.item.creationDate
                        ? <div>
                            <h3>Edit idea item</h3>
                            <div className="creation-time">Created at: {props.item.creationDate}</div>
                          </div>
                        : <h3>Add new idea Item</h3> }
                    <span className="close" onClick={props.onClose}>x</span>
                </div>
                <div className="body">
                    <div className="add-title">
                        <label htmlFor="">Title*</label>
                        <input className="custom"
                               type="text"
                               placeholder="Title goes here"
                               {...register("title",{
                                   required: true,
                                   value: props.item.title,
                                   maxLength: 20
                               })}/>
                        <i className="id-form"></i>
                    </div>
                    <div className="add-description">
                        <label htmlFor="">Description</label>
                        <textarea className="custom"
                                  cols="30"
                                  rows="5"
                                  {...register("description", {
                                      value: props.item.description
                                  })}/>
                    </div>
                    <div className="date-container">
                        <div className="add-date">
                            <label htmlFor="">Date</label>
                            <input className="custom"
                                   type="date"
                                   {...register("date", {
                                       value: props.item.date
                                   })}/>
                        </div>

                        <div className="add-time">
                            <label htmlFor="">Begin time:</label>
                            <input className="custom"
                                   type="time"
                                   {...register("time", {
                                       value: props.item.time
                                   })}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={props.onDelete.bind(null, props.item)} className="delete">DELETE</button>
                    <input className="save" type="submit" value="SAVE"/>
                </div>
            </form>
        </Modal>
    )
}

export default EventFormPopUp;