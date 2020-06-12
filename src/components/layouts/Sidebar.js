import React from 'react'
import './sidebar.css'

const Sidebar = () => {

    return (
        <React.Fragment>
            <div className="sidebar" id="sidebar">
                <div className="">
                    <div className="logo" />
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Place bookings</li>
                    </ul>
                </div>

                <div className="fixed-bottom">
                    <button>Fcebook</button>
                    <button>Instagrram</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
