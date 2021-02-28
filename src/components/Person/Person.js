/* eslint-disable react-hooks/exhaustive-deps */
import Profile from './Profile/Profile';
import Information from './Information/Information';
import userData from '../../userData/users';
import { useEffect, useState } from 'react';
import './Person.css';


let Person = () => {

    let personData = userData;
    // console.log(personData);
    const [persons, setPersons] = useState([]);
    const [friendsAdded, setFriendsAdded] = useState([]);

    useEffect(() =>{
        setPersons(personData);
    }, []); 

    const handleAddFriend = (persons) => {
        const newFriend = [...friendsAdded, persons]; 
        setFriendsAdded(newFriend); 
    }

    return (
        <div className="person-container">
            <div className="profile-container">
             
                 {
                     persons.map(person =><Profile 
                        handleAddFriend={handleAddFriend}
                        person={person}>
                        </Profile>)
                 }
            </div>
            <div className="information-container">
             <Information information={friendsAdded}></Information>
            </div>
        </div>
    );
};

export default Person;