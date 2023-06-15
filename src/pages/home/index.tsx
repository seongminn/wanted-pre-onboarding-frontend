import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="inner-wrapper">
      <h3>투두리스트를 간편하게 관리해보아요 !</h3>
      <Button
        onClick={() => {
          navigate('/todo');
        }}
      >
        투두리스트 입력하러 가기
      </Button>
    </section>
  );
};

export default HomePage;
