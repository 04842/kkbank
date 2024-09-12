// src/services/user.ts
import { fetchApi } from './api';

export const getUserProfile = () => fetchApi('/users/profile');

