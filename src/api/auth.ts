import { PostAuthRequest, PostSigninResponse } from '@/types/auth';

import { instance } from './instance';

export const postSignin = async (body: PostAuthRequest) => {
  return instance.post<PostSigninResponse>('/auth/signin', body);
};

export const postSignup = async (body: PostAuthRequest) => {
  await instance.post('/auth/signup', body);
};
