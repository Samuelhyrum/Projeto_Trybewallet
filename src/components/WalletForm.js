import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoeadas } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoeadas());
  }

  render() {
    const { currencies } = this.props;
    const methotList = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const category = [
      'Alimentação',
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    return (
      <div>
        <div>WalletForm</div>
        <form>
          Valor:
          <input
            data-testid="value-input"
            value="value"
            name="value"
            type="number"
            placeholder="valor"
          />
          Descrição:
          <input
            data-testid="description-input"
            value="Descrição"
            name="Descrição"
            type="text"
            placeholder="Descrição"
          />
          Moeda:
          <label
            htmlFor="moeda"
          >
            <select data-testid="currency-input">
              {currencies.map((coin) => (
                <option key={ coin } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          Método:
          <label
            htmlFor="metodo"
          >
            <select data-testid="method-input">
              <option value="metodo">{methotList[0]}</option>
              <option value="metodo">{methotList[1]}</option>
              <option value="metodo">{methotList[2]}</option>
            </select>
          </label>
          Categoria:
          <label
            htmlFor="category"
          >
            <select data-testid="tag-input">
              <option value="category">{category[0]}</option>
              <option value="categoty">{category[1]}</option>
              <option value="category">{category[2]}</option>
              <option value="category">{category[3]}</option>
              <option value="category">{category[4]}</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
