import React, { useState } from 'react'
import Modal from "./Modal"
import './floatBtn.css'

const FloatingBtn = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <React.Fragment>
            {isOpen ? <Modal closeModal={closeModal}/> : null}

            <div className="floatBtn" onClick={openModal}>
                <p>Book session</p>
            </div>
        </React.Fragment>
    )
}

export default FloatingBtn
