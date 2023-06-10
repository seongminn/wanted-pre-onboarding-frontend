import axios from 'axios';

import { TOKEN_KEY } from '@/constants/auth';
import { getToken } from '@/utils/token';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const token = getToken(TOKEN_KEY);

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Authorization: token ? `Bearer ${token}` : '' },
});
