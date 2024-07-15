import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeauteredWorks from './FeauteredWorks';

describe('FeauteredWorks Component', () => {
  it('renders the FeauteredWorks component title', () => {
    render(<FeauteredWorks />);
    const featureText=screen.getByText(/FeauteredWorks/i)
    expect(featureText).toBeInTheDocument();
  });
});
