export default function Modal(props) {
    function cancelHandler() {
        props.closeModelHandler();
    }

    function confirmHandler() {
        props.doneHandler(props.id);
        props.closeModelHandler();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}