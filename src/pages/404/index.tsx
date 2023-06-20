import './style.scss';

import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';
import { PATH } from '@/constants/path';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(PATH.MAIN);
  };

  return (
    <div className="inner-wrapper">
      <b className="log">404</b>
      <p className="description">없는 페이지입니다!</p>
      <Button onClick={handleButton}>홈으로 돌아가기</Button>
    </div>
  );
};

export default NotFoundPage;
