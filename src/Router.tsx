import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Loader from '@/components/common/Loader';
import { TOKEN_KEY } from '@/constants/auth';
import { PATH } from '@/constants/path';
import { getToken } from '@/utils/token';

import ToastProvider from './components/common/Toast';

const NotFoundPage = lazy(() => import('@/pages/404'));
const HomePage = lazy(() => import('@/pages/home'));
const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function Router() {
  return (
    <ToastProvider>
      <Suspense fallback={<Loader />}>
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
    </ToastProvider>
  );
}

export default Router;

const PrivateRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Outlet /> : <Navigate to={PATH.SIGNIN} replace />;
};

const PublicRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Navigate to={PATH.TODO} replace /> : <Outlet />;
};
