import { Film } from '../../types/film';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import FormComment from '../../components/form-comment/form-comment';

type ReviewProps = {
  film: Film,
}

function AddReview({ film }: ReviewProps): JSX.Element {
  return (
    <section className="film-card film-card--full " id={String(film.id)}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt='film' />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormComment film={film} />
      </div>
    </section>
  );
}

export default AddReview;
