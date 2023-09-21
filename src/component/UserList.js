import React, { useState, useEffect } from 'react';
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);


    const fetchUsers = () => {
        axios.get('http://localhost:3000/getAllData')
            .then((response) =>{
                console.log(response);
                setUsers(response)
            } )
            .catch((error) => console.log(error));
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
