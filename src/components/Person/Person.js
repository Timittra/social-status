import React, { useEffect, useState } from 'react';
import Profile from './Profile/Profile';
import Information from './Information/Information';
import userData from '../../userData';


const Person = () => {

    const personData = userData;
    console.log(personData);

    return (
        <div className="person-container">
            <div className="profile">
             <Profile></Profile>
            </div>
            <div className="information">
             <Information></Information>
            </div>
        </div>
    );
};

export default Person;