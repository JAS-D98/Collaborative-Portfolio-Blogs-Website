import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FeauteredWorks from './FeauteredWorks';
import { works } from '../../../data/landingpagedata/WorkData';
import WorkCard from '../../workcardcomponent/WorkCard';

describe('FeauteredWorks Component', () => {
  it('renders the FeauteredWorks component', () => {
    render(<FeauteredWorks />);
    const featureText=screen.getByText(/FeauteredWorks/i)
    expect(featureText).toBeInTheDocument();
  });
});
