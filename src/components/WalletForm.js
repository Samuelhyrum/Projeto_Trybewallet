import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMoeadas, fetchCoins } from '../redux/actions';

const Alimentação = 'Alimentação';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentação,
      id: 0,
    };
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMoeadas());
  }

  handle = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  Submit = (event) => {
    event.preventDefault();
    this.setState((previousState) => ({
      id: previousState.id + 1,
    }));
    const { dispatch } = this.props;
    dispatch(fetchCoins(this.state));
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: Alimentação,
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const methotList = [
      'Dinheiro',
      'Cartão de crédito',
      'Cartão de débito',
    ];
    const category = [
      Alimentação,
      'Lazer',
      'Trabalho',
      'Transporte',
      'Saúde',
    ];
    return (
      <div>
        <div>WalletForm</div>
        <form onSubmit={ this.Submit }>
          Valor:
          <input
            data-testid="value-input"
            value={ value }
            name="value"
            onChange={ this.handle }
            type="number"
            placeholder="Valor"
          />
          Descrição:
          <input
            data-testid="description-input"
            value={ description }
            name="description"
            onChange={ this.handle }
            type="text"
            placeholder="Descrição"
          />
          currency:
          <label
            htmlFor="currency"
          >
            <select
              data-testid="currency-input"
              onChange={ this.handle }
              value={ currency }
              name="currency"
            >
              {currencies.map((coin) => (
                <option key={ coin } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          Método:
          <label
            htmlFor="method"
          >
            <select
              data-testid="method-input"
              onChange={ this.handle }
              value={ method }
              name="method"
            >
              <option value={ methotList[0] }>{methotList[0]}</option>
              <option value={ methotList[1] }>{methotList[1]}</option>
              <option value={ methotList[2] }>{methotList[2]}</option>
            </select>
          </label>
          tag:
          <label
            htmlFor="category"
          >
            <select
              data-testid="tag-input"
              onChange={ this.handle }
              value={ tag }
              name="tag"
            >
              <option value={ category[0] }>{category[0]}</option>
              <option value={ category[1] }>{category[1]}</option>
              <option value={ category[2] }>{category[2]}</option>
              <option value={ category[3] }>{category[3]}</option>
              <option value={ category[4] }>{category[4]}</option>
            </select>
          </label>
          <button
            type="submit"
          >
            Adicionar Despesa
          </button>
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
