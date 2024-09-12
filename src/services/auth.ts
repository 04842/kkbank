// src/services/auth.ts
import { fetchApi } from './api';

export const login = (email: string, password: string) =>
  fetchApi('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

