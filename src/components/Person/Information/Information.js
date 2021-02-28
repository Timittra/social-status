import React from 'react';
import './Information.css';

let Information = (props) => {
    const friendsAdded = props.information;
    
    
     const total = friendsAdded.reduce( (total, personal) => (total + (personal.salary * 12)), 0);
     const totalSalary = total.toFixed(2);

    return (
        <div>
            <h2><span className='total-friends'>Total Friend(s):</span> {friendsAdded.length}</h2>
            <h3><span className="total-salary">Total Annual Salary of Friend(s):</span> ${totalSalary}</h3>
        </div>
    );
};

export default Information;