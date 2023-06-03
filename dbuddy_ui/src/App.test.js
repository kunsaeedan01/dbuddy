import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


function render(ui, {...renderOptions} = {}) {
  const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

test('renders learn react link', () => {
  render(
      <App />
    );
  const textElement = screen.getByText(/Welcome to DiploMate!/i);
  expect(textElement).toBeInTheDocument();
});

export * from '@testing-library/react'
export {render}
