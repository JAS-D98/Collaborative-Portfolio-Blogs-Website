import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import RecentPosts from './RecentPosts';
import blogs from '../../../Data/landingpagedata/LandingPage'

describe('RecentPosts Component', () => {
    it('renders Recent Posts header', () => {
      render(
        <MemoryRouter>
          <RecentPosts />
        </MemoryRouter>
      );
      const headerText = screen.getByText(/Recent Posts/i);
      expect(headerText).toBeInTheDocument();
    });
  
    it('renders View All link', () => {
      render(
        <MemoryRouter>
          <RecentPosts />
        </MemoryRouter>
      );
      const viewAllLink = screen.getByText(/View All/i);
      expect(viewAllLink).toBeInTheDocument();
    });
  });