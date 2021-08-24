import React from 'react';
import Modal from '@material-ui/core/Modal';
import styles from "./stylesheets/cart.module.css";

export default function SimpleModal() {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div>
            <div className={styles.modal_pop}>
                <div className={styles.modal_pop_text}>
                    <h2>Congratulations, Your Order is Successful</h2>
                    <h5>
                        Your order will be received in a few minutes.
                    </h5>

                    <button className={styles.okBtn} type="button" onClick={handleClose}> OK </button>
                </div>
            </div>

        </div>
    );

    return (
        <div>
            <button className={styles.modal} type="button" onClick={handleOpen}>
                PAY N4,800
            </button>

            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
            
        </div>
    );
}
