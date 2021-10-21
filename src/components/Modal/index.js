import React, { useState } from "react";
import "./index.scss";
import { ClickOutsideHook } from "./utils/ClickOutsideHook";

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalRef = ClickOutsideHook(() => {
        setIsModalOpen(false);
    });

    return (
        <div className="modal_main__container">
            <button
                className="btn btn-dark toggle_modal__btn"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                Open Modal
            </button>

            <div
                className={`modal__container ${
                    isModalOpen ? `modal_is_open` : `modal_is_close`
                }`}
            >
                <div ref={modalRef} className="modal__body">
                    <div className="modal__header">
                        <span className="header__name">
                            Add New Transaction
                        </span>

                        <span className="close_icon">
                            <i
                                class="bi bi-x-lg"
                                onClick={() => setIsModalOpen(false)}
                            ></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
