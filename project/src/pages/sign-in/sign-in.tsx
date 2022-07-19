import Footer from '../../components/footer/footer';
import FormLogin from '../../components/form-login/form-login';
import Logo from '../../components/logo/logo';

function SignIn(): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <FormLogin />
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
