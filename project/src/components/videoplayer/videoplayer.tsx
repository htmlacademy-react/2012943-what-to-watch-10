import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film,
  autoplay: boolean,
}

function Videoplayer({ film, autoplay }: VideoPlayerProps): JSX.Element {
  return (
    <video src={film.video} className="player__video" muted autoPlay={autoplay}></video>
  );
}

export default Videoplayer;
