import React, { useState } from 'react'
export const DerivedState = () => {
    const [users, setUsers] = useState([
            {
                name: 'Shahid',
                age: 21
            },
            {
                name: 'Sehr',
                age: 54
            },
            {
                name: 'Sufyan',
                age: 32
            },
            {
                name: 'rizwan',
                age: 24
            }
        
    ])
    console.log(users);
    //derived state is used
    const userCount = users.length;
    const averageAge = users.reduce((acc, cur) => acc + cur.age, 0) / userCount;

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((curElem, index) => {
                    return (   
                        <li key={index}> 
                        {curElem.name} is {curElem.age} years old</li>
                    );
                })}
            </ul>
            <p>Total number of users: {userCount}</p>
            <p>Average age of users:{averageAge}</p>
        </div>
    );
}