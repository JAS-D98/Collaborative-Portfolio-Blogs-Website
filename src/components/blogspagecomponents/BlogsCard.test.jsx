import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlogsCard from './BlogsCard';

describe('BlogsCard Component', () => {
    it('Renders the header', () => {
        render(<BlogsCard header="Test Header" paragraph="Test paragraph content" />);
        const headerText = screen.getByRole('heading', { level: 3 });
        expect(headerText).toBeInTheDocument();
        expect(headerText).toHaveTextContent(/Test Header/i);
    });

    it('Renders the date and tags', () => {
        render(<BlogsCard header="Test Header" paragraph="Test paragraph content" />);
        const dateAndTags = screen.getByText(/12 Feb 2019/i);
        expect(dateAndTags).toBeInTheDocument();
        const tags = screen.getByText(/Express, Handlebars/i);
        expect(tags).toBeInTheDocument();
    });

    it('Renders the paragraph', () => {
        render(<BlogsCard header="Test Header" paragraph="Test paragraph content" />);
        const paragraphText = screen.getByText(/Test paragraph content/i);
        expect(paragraphText).toBeInTheDocument();
    });
});
