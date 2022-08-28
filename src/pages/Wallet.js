import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <Header />
          <p data-testid="email-field">
            Seu e-mail :
            {email}
          </p>
          <p data-testid="total-field">Despesa Total: R$ 0,00</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <WalletForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
