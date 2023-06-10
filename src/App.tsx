import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { TOKEN_KEY } from '@/constants/auth';
import { getToken } from '@/utils/token';

import { PATH } from './constants/path';

const NotFoundPage = lazy(() => import('@/pages/404'));
const HomePage = lazy(() => import('@/pages/home'));
const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={PATH.MAIN} element={<HomePage />} />
        <Route element={<PrivateRouter />}>
          <Route path={PATH.TODO} element={<TodoPage />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path={PATH.SIGNIN} element={<SigninPage />} />
          <Route path={PATH.SIGNUP} element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

const PrivateRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Outlet /> : <Navigate to={PATH.SIGNIN} replace />;
};

const PublicRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Navigate to={PATH.TODO} replace /> : <Outlet />;
};
