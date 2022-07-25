import { useState } from 'react';
import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import Videoplayer from '../videoplayer/videoplayer';

type FilmCardScreenProps = {
  film: Film,
};

function FilmCard({ film }: FilmCardScreenProps): JSX.Element {
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();

  const mouseOver = (): void => {
    setIsShowing(true);
  };

  const mouseLeave = (): void => {
    setIsShowing(false);
  };

  return (
    <article className="small-film-card catalog__films-card" id={film.id} >
      <div className="small-film-card__image" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
        {isShowing ?
          <Videoplayer film={film} autoplay />
          : <img src={film.img} alt={film.alt} width="280" height="175" onClick={() => navigate(AppRoute.Film)} />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={generatePath(AppRoute.Film, { id: film.id })} className="small-film-card__link">{film.title}</Link>
      </h3>
    </article>
  );
}


export default FilmCard;
