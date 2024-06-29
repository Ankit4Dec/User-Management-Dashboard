import axios from 'axios';

interface UserCredentials {
  email: string;
  password: string;
}

const USERS_KEY = 'users';

const getUsersFromLocalStorage = (): UserCredentials[] => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

const saveUsersToLocalStorage = (users: UserCredentials[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email,
      password,
    });

    if (response.status === 200) {
      const users = getUsersFromLocalStorage();
      users.push({ email, password });
      saveUsersToLocalStorage(users);
      return response.data;
    }
  } catch (error) {
    throw new Error('Error during sign up');
  }
};

export const login = async (email: string, password: string) => {
  try {
    const users = getUsersFromLocalStorage();
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      return response.data;
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    throw new Error('Invalid email or password');
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
