// src/components/Register.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { registerSchema } from '../validationSchema'
import { Button, Input } from '@material-tailwind/react';
import Header from "./Header"

const Register = () => {
  // Initialize react-hook-form with yup validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:7000/register', data);
      // Check if response status is 200 (OK)
      if (response.status === 200) {
        console.log('Registration successful:', response.data);
        // Optionally show a success message or redirect
        alert('Registration successful!');
      } else {
        console.error('Unexpected response status:', response.status);
        // Handle unexpected status codes
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Backend response error:', error.response.data);
        alert(`Registration failed: ${error.response.data.message || 'An error occurred'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        alert('No response received from server. Please try again.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
        alert('An error occurred while setting up the request.');
      }
    }
  };

  return (
  <>
  <Header/>
    <section className="p-4">
      <h2 className="text-xl font-semibold text-red-100">Register</h2>
      <form className="mt-4 max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            {...register('username')}
            label="Username"
            error={errors.username ? errors.username.message : ''}
          />
        </div>
        <div className="mb-4">
          <Input
            {...register('email')}
            label="Email"
            type="email"
            error={errors.email ? errors.email.message : ''}
          />
        </div>
        <div className="mb-4">
          <Input
            {...register('password')}
            label="Password"
            type="password"
            error={errors.password ? errors.password.message : ''}
          />
        </div>
        <Button color="blue" fullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </section>
    </>
  );
};

export default Register;