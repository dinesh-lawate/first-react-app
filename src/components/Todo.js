import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default function Todo(props) {
    const [isModelOpen, setIsModelOpen] = useState(false);

    function deleteHandler(e) {
        setIsModelOpen(true);
    }

    function closeModelHandler() {
        setIsModelOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {isModelOpen && <Modal id={props.id} doneHandler={props.doneHandler} closeModelHandler={closeModelHandler} />}
            {isModelOpen && <Backdrop closeModelHandler={closeModelHandler} />}
        </div>
    );
}