import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film,
  autoplay: boolean,
}

function Videoplayer ({film, autoplay}:VideoPlayerProps):JSX.Element {
  return (
    <video src={film.video} className="player__video" muted autoPlay={autoplay}></video>
  );
}

// poster="img/player-poster.jpg"

export default Videoplayer;
