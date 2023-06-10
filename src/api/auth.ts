import { instance } from './instance';

interface PostAuthRequest {
  email: string;
  password: string;
}

interface PostSigninResponse {
  access_token: string;
}

export const postSignin = async (body: PostAuthRequest) => {
  return instance.post<PostSigninResponse>('/auth/signin', body);
};

export const postSignup = async (body: PostAuthRequest) => {
  await instance.post('/auth/signup', body);
};
