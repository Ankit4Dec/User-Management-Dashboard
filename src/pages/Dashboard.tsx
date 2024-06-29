import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* <ul>
        {users.map((user) => (
        //   <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Dashboard;
