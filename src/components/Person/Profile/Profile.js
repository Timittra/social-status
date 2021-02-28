import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Profile.css';

const Profile = (props) => {
    const { image, name, email, phone } = props.person;
    const [btnDisable, setBtnDisable] = useState(false);
    return (
        <div className="profile">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>I am {name}</h1>
                <p><small>Email: {email}</small></p>
                <p>Contact no: {phone}</p>
                <button
                    className={btnDisable ? "add-btn disabled" : "add-btn"}
                    onClick={() => {
                        props.handleAddFriend(props.person);
                        setBtnDisable(true);
                    }
                    }
                >
                    <FontAwesomeIcon icon={faPlus} />
                Add Friend
                </button>
            </div>
        </div>
    );
};

export default Profile;