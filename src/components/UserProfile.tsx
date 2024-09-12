// src/components/UserProfile.tsx
import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../services/user';

const UserProfile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>{profile.username}</h2>
      <p>Email: {profile.email}</p>
      <p>Points: {profile.points}</p>
    </div>
  );
};

