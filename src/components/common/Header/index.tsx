import './style.scss';

import { NavLink } from 'react-router-dom';

import { PATH } from '@/constants/path';

const Header = () => {
  return (
    <header className="header">
      <div className="profile">
        <img src="profile.webp" alt="profile" className="profile-image" />
        <h3>PRE-ONBOARDING</h3>
        <span className="profile-desc">frontend intership</span>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to={PATH.TODO} className="navbar-link">
              투두리스트
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.SIGNIN} className="navbar-link">
              로그인
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH.SIGNUP} className="navbar-link">
              회원가입
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
