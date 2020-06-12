import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const modalRoot = document.getElementById('modal-root');

function Modal(props) {
    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <div style={{
                    padding: '20px',
                    background: '#0b0c10',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '300px',
                    justifySelf: 'center',
                    color: 'white',
                    border: '3px solid black'
                }}>
                    {props.children}

                    {props.avoidEmail ?
                        null :
                        <div>
                            <h3>Book a session today!</h3>
                            <form onSubmit={props.onClose}>
                                <label>Full name</label><br />
                                <input type="text" placeholder="Enter your name" required /><br /><br />

                                <label>Email</label><br />
                                <input type="email" placeholder="Enter your email" required /><br /><br />

                                <label>Phone</label><br />
                                <input type="text" placeholder="Enter phone number" required /><br /><br />

                                <label>Location</label><br />
                                <input type="text" placeholder="What state ?" required /><br /><br />

                                <label>Type of event</label><br />
                                <select>
                                    <option>Fashion</option>
                                    <option>Beauty</option>
                                    <option>Product</option>
                                    <option>Potrait</option>
                                    <option>Weddings</option>
                                    <option>Events</option>
                                </select><br /><br />
                                <button className="book-btn"> Book session</button>
                                <button className="close-btn" onClick={props.closeModal}>Close</button>
                            </form>
                        </div>
                    }


                </div>

            </div>
        </>,
        modalRoot
    );
}

export default Modal;
