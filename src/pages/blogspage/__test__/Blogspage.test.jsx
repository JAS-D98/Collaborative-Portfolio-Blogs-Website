import React from "react"
import {render, screen} from "@testing-library/react"
import BlogsPage from "../BlogsPage"
import {describe, it, expect} from "vitest"

describe("BlogsPage", () => {
  it("Renders the name 'Blog'", () => {
    render(<BlogsPage/>);
    const headingElement = screen.getByText(/Blog/i)
    expect(headingElement).toBeInTheDocument()
  });


  it('renders all blog entries with correct content', () => {
    render(<BlogsPage />);
    const blogEntries = screen.getAllByText(/UI Interactions of the week/i);
    expect(blogEntries).toHaveLength(4);

    const dateElements = screen.getAllByText(/12 Feb 2019/i);
    expect(dateElements).toHaveLength(4);

    const technologies = screen.getAllByText(/Express, Handlebars/i);
    expect(technologies).toHaveLength(4);

    const contentElements = screen.getAllByText(/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint/i);
    expect(contentElements).toHaveLength(4);
  });

  it('renders horizontal lines after each blog entry', () => {
    render(<BlogsPage />);
    const horizontalLines = screen.getAllByRole('separator');
    expect(horizontalLines).toHaveLength(4);
  });
});