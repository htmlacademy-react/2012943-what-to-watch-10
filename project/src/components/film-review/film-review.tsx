import { Comments } from '../../types/comment';
import UserComment from '../user-comment/user-comment';

type FilmReviewProps = {
  comments: Comments,
}

function FilmReview({ comments }: FilmReviewProps): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.filter((_, index) => index % 2 === 0).map((comment) => <UserComment key={comment.id} comment={comment} />)}
      </div>
      <div className="film-card__reviews-col">
        {comments.filter((_, index) => index % 2 !== 0).map((comment) => <UserComment key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
}

export default FilmReview;
