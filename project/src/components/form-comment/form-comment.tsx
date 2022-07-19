import { ChangeEvent, FormEvent, useState } from 'react';
import { Film } from '../../types/film';

type FormCommentProps = {
  film: Film,
}

function FormComment({ film }: FormCommentProps): JSX.Element {
  const [form, setForm] = useState({
    id: film.id,
    rating: '',
    reviewtext: ''
  });

  const submitHandler = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const formChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.currentTarget;
    setForm({ ...form, [name]: value });
  };

  const createField = (counter: number):JSX.Element => (
    <>
      <input className="rating__input" id={`star-${counter}`} type="radio" name="rating" value={`${counter}`} onChange={formChangeHandler} />
      <label className="rating__label" htmlFor={`star-${counter}`}>Rating {counter}</label>
    </>
  );

  const createRaiting = ():JSX.Element => {
    let increment: JSX.Element;

    for (let i = 0; i < 10; i++) {
      increment += createField(i);
    }
    return increment;
  }

  return (
    <form action="#" className="add-review__form" onSubmit={submitHandler}>
      <div className="rating">
        <div className="rating__stars">

        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="reviewtext" id="review-text" placeholder="Review text" value={form.reviewtext} onChange={formChangeHandle}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" >Post</button>
        </div>

      </div>
    </form>
  );
}

export default FormComment;
