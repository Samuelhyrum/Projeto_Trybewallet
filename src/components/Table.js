import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    // const { expenses } = this.props;
    // const { description } = expenses;
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </table>
    );
  }
}

// Table.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

export default Table;
