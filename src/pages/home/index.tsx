import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      홈 페이지입니다.<button onClick={() => navigate('/todo')}>클릭</button>
    </div>
  );
};

export default HomePage;
