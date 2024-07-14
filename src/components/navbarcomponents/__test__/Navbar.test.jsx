import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';  
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  it('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blogs')).toBeInTheDocument();
    expect(screen.getByText('Works')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
