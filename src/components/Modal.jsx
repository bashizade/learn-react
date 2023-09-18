const Modal = (props) => {
    return (
        <>
            <button className="btn" onClick={() => document.getElementById(props.id).showModal()}>{props.btn}</button>
            <dialog id={props.id} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {props.children}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">بستن</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Modal;