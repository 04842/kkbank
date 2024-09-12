// src/App.tsx
import React from 'react';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import ContentList from './components/ContentList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>KKBank</h1>
      <Login />
      <UserProfile />
      <ContentList />
    </div>
  );
};

export default App;
