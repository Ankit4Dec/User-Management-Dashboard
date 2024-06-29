// src/pages/SignIn.tsx
import React, { useState } from 'react';
import axios from 'axios';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Log the request data to verify
    console.log('Request Data:', { email, password });

    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      console.log('Response:', response.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        // Handle specific API error response
        console.error('API Error:', err.response.data);
        setError(err.response.data.error);
      } else {
        console.error('Unexpected Error:', err);
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
