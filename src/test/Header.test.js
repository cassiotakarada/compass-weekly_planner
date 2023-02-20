import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Login_Registration_Components/Header/Header';

describe('Header component', () => {
  it('renders the welcome message', () => {
    render(<Header paragraph="This is a test paragraph" />);
    expect(screen.getByText('Welcome,')).toBeInTheDocument();
  });

  it('renders the paragraph', () => {
    render(<Header paragraph="This is a test paragraph" />);
    expect(screen.getByText('This is a test paragraph')).toBeInTheDocument();
  });
});