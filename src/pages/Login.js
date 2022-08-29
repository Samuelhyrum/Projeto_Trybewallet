import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { password, email } = this.state;
      const minLength = 6;

      if (password.length >= minLength && this.validateEmail(email)) {
        this.setState({
          buttonDisable: false,
        });
      } else {
        this.setState({
          buttonDisable: true,
        });
      }
    });
  };

  validateEmail = (email) => {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]/;
    return regex.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { data, history } = this.props;

    data({ email });
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonDisable } = this.state;
    return (
      <div>
        Login
        <form onSubmit={ this.handleSubmit }>
          E-mail:
          <input
            type="text"
            placeholder="email"
            data-testid="email-input"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <br />
          Senha:
          <input
            type="password"
            data-testid="password-input"
            placeholder="senha"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <br />
          <button
            type="submit"
            disabled={ buttonDisable }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  data: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  data: (userProfile) => dispatch(loginUser(userProfile)),
});

export default connect(null, mapDispatchToProps)(Login);
