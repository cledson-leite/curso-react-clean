import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Login } from './';

describe('Login Component', () => {
    beforeEach(() => {
        render(<Login />)
    })
  it('should begin closed', () => {
    expect(screen.queryByRole('loading')).not.toBeInTheDocument();
    expect(screen.queryByRole('message')).not.toBeInTheDocument();
  })
})