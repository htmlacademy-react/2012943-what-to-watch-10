import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Films,
};

function FilmList ({films}:FilmListProps):JSX.Element {
  const [id, setId] = useState <number>();

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} onVideo={() => setId(id)}/>)}
    </div>
  );
}

export default FilmList;
