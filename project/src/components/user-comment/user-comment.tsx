import { Comment } from '../../types/comment';

type CommentProps = {
  comment: Comment
}

function UserComment({ comment }: CommentProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text" id={String(comment.id)}>{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author" id={String(comment.user.id)}>{comment.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{comment.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default UserComment;
