import React from 'react';

const Modal = props => {
    let modal = null;

    if (props.show) {
        modal = (
            <div className="modal">
                <div className="modal-dialog">
                    <form>
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

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">Order</button>
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
