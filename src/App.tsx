import './App.scss';

import Header from '@/components/common/Header';
import Router from '@/Router';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Router />
    </div>
  );
}

export default App;
