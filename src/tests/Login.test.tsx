// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from '../App';
// import { wait } from '@testing-library/user-event/dist/utils';

// test('can login', () => {
//   render(<App />);
//   const emailElement = screen.getByTestId("email");
//   const senhaElement = screen.getByTestId("password");
//   const submitElement = screen.getByTestId("login");

//   emailElement.setAttribute('value', "admin@gmail.com");
//   senhaElement.setAttribute('value', "123");
//   submitElement.click();

//   const submitButton = screen.queryByText('Usuário ou senha incorretos!')
//   expect(submitButton).not.toBeInTheDocument()

// });
// test('cant login', async () => {
//   render(<App />);
//   const emailElement = screen.getByTestId("email");
//   const senhaElement = screen.getByTestId("password");
//   const submitElement = screen.getByTestId("login");

//   emailElement.setAttribute('value', "admin");
//   senhaElement.setAttribute('value', "321");
//   submitElement.click();
//   await waitFor(() => {
//     expect(screen.getByTestId('erro')).toBeInTheDocument();
//   });

// });

export default {};
