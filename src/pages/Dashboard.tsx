import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  // add other fields as needed
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
