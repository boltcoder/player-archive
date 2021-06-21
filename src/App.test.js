import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';


describe("Full App Test", ()=> {
  it('Render home page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Search our archive/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Type in the input', () => {
    render(<App />);
    const inputElement = screen.getByRole('input');
    userEvent.type(inputElement,"ronaldo");
    expect(screen.getByRole('input')).toHaveValue("ronaldo");
  });

  
})

