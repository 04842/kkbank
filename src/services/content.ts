// src/services/content.ts
import { fetchApi } from './api';

export const getContentList = () => fetchApi('/content');
