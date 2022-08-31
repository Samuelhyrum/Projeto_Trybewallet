import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import renderWithRouterAndRedux from './renderWith';

describe('test page HOME', () => {
  const pathHome = '/';
  const pathWallet = '/carteira';
  test('the page should have a input e-mail', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: [pathHome],
    });
    const testEmail = 'samuelhymp@gmail.com';
    const testPassword = '9984521';
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByRole('button');
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(email).toHaveValue('');
    expect(password).toHaveValue('');

    userEvent.type(email, testEmail);
    userEvent.type(password, testPassword);

    userEvent.click(button);

    expect(history.location.pathname).toBe(pathWallet);
  });
});
