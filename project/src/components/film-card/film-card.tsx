import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';

type FilmCardScreenProps = {
  film: Film,
  onVideo: () => void,
};

function FilmCard({ film, onVideo }: FilmCardScreenProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <article className="small-film-card catalog__films-card" id={film.id}>
      <div className="small-film-card__image">
        <img src={film.img} alt={film.alt} width="280" height="175" onMouseOver={() => onVideo()} onClick={() => navigate(AppRoute.Film)} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Film} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
