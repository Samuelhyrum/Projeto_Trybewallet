import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteCostumer } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, dispatchDelete } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((dados) => (
            <tr key={ dados.id }>
              <td>{dados.description}</td>
              <td>{dados.tag}</td>
              <td>{dados.method}</td>
              <td>{Number(dados.value).toFixed(2)}</td>
              <td>{dados.exchangeRates[dados.currency].name}</td>
              <td>{Number(dados.exchangeRates[dados.currency].ask).toFixed(2)}</td>
              <td>
                {
                  Number(dados.value * dados.exchangeRates[dados.currency].ask).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button type="button">
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => dispatchDelete(dados.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  dispatchDelete: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  dispatchDelete: (costumerId) => dispatch(deleteCostumer(costumerId)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
