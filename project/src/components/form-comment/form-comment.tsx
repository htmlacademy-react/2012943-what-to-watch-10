import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function FormComment(): JSX.Element {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userEmail: '',
    userPassword: '',
  });

  const formChangeHandle = (evt: FormEvent<HTMLFormElement>): void => {
    const { name, value } = evt.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <form action="#" className="sign-in__form">
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={() => formChangeHandle} value={form.userEmail} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={() => formChangeHandle} value={form.userPassword} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" onClick={() => navigate(AppRoute.SignIn)}>Sign in</button>
      </div>
    </form>
  );
}

export default FormComment;
