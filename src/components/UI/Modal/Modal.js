import React from 'react';

const Modal = props => {
    let modal = null;

    if (props.show) {
        modal = (
            <div className="modal">
                <div className="modal-dialog">
                    <form onSubmit={props.submitted}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={props.close}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input className="form-control mb-1" type="text" name="name" placeholder="Your Name"
                                       value={props.name} onChange={props.changed}
                                />
                                <input className="form-control mb-1" type="text" name="phone" placeholder="Your phone"
                                       value={props.phone} onChange={props.changed}
                                />
                                <input className="form-control mb-1" type="text" name="address" placeholder="Your address"
                                       value={props.address} onChange={props.changed}
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary" type="submit">Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return modal;
};

export default Modal;
