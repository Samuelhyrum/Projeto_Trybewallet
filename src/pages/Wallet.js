import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  totalCurrency = (expenses) => (
    expenses.reduce((acc, data) => {
      const { currency } = data;
      return acc + (data.value * data.exchangeRates[currency].ask);
    }, 0)
  );

  render() {
    const { email, expenses } = this.props;
    const valorTotal = this.totalCurrency(expenses);
    return (
      <div>
        <header>
          TrybeWallet
          <Header />
          <p data-testid="email-field">
            Seu e-mail :
            {email}
          </p>
          <p data-testid="total-field">{valorTotal.toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(Wallet);
