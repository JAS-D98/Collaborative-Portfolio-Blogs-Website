
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { describe, it,expect } from 'vitest';

describe('Footer Component', () => {
  it('renders Footer component', () => {
    render(<Footer />);
    const paragraph = screen.getByRole("paragraph")
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument(/© 2024\. all rights reserved/i)
    
  });

});
