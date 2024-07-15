import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroContainer from './HeroContainer';

describe('HeroContainer Component', () => {
    it('Renders the hero title message', () => {
        render(<HeroContainer />);
        const headerText = screen.getByRole('heading', { level: 1 });
        expect(headerText).toBeInTheDocument();
        expect(headerText).toHaveTextContent(/Hi, I am Marya, a creative Technologist/i);
    });

    it('Renders the paragraph text', () => {
        render(<HeroContainer />);
        const paragraphText = screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit./i);
        expect(paragraphText).toBeInTheDocument();
    });

    it('Renders the Download Resume button', () => {
        render(<HeroContainer />);
        const button = screen.getByRole('button', { name: /Download Resume/i });
        expect(button).toBeInTheDocument();
    });

    it('Renders the hero section image', () => {
        render(<HeroContainer />);
        const img = screen.getByAltText(/image of hero section/i);
        expect(img).toBeInTheDocument();
    });
});
