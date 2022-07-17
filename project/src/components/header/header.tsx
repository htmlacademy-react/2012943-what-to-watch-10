import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type HeaderProps = {
  login: string
}

function Header({ login }: HeaderProps): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoute.Main} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.SignIn} className="user-block__link">{login}</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
