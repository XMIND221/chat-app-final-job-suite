import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <h1>Bienvenue sur le Chat App</h1>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default App;