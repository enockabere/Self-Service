import { useState } from 'react';
import './static/css/LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('username:', username);
    console.log('password:', password);
    console.log('RememberMe:', rememberMe);

    setUsername('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <section className='section'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
            <div className='login-brand'>
              <img src='/img/logo/1.png' alt='Logo' width='100' className='' />
            </div>
            <div className='card card-primary'>
              <div className='card-header'>
                <h4>Login</h4>
              </div>
              <div className='card-body'>
                <form className='needs-validation' onSubmit={handleFormSubmit}>
                  <div className='form-group'>
                    <label>Username</label>
                    <input
                      type='text'
                      className='form-control'
                      name='username'
                      id='username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      autoFocus
                      tabIndex='1'
                    />
                  </div>
                  <div className='form-group'>
                    <div className='d-block'>
                      <label className='control-label'>Password</label>
                      <div className='float-right'>
                        <a
                          href='auth-forgot-password.html'
                          className='text-small'
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input
                      id='password'
                      type='password'
                      className='form-control'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className='invalid-feedback'>
                      please fill in your password
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='custom-control custom-checkbox'>
                      <input
                        type='checkbox'
                        name='remember'
                        value={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className='custom-control-input'
                        id='remember-me'
                      />
                      <label className='custom-control-label'>
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-danger btn-lg btn-block'
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className='simple-footer'>
                Copyright &copy;{' '}
                <span>
                  <a href=''>Kobby Technologies Limited</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
