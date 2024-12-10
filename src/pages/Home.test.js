import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Component", () => {
  test("renders the Header component", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const headerElement = screen.getByRole("banner"); // Assuming Header uses a <header> tag
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the Hero section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Assuming Hero has a main heading like <h1>
    const heroHeading = screen.getByRole("heading", { name: /welcome/i });
    expect(heroHeading).toBeInTheDocument();
  });

  test("renders the HeroFeatures section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Assuming HeroFeatures has some specific feature titles
    const featureTitle = screen.getByText(/feature one/i); // Replace with actual feature text
    expect(featureTitle).toBeInTheDocument();
  });

  test("renders the HeroTestimonial section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    // Assuming HeroTestimonial has a specific testimonial quote
    const testimonialQuote = screen.getByText(
      /this is the best platform ever/i,
    ); // Replace with actual testimonial text
    expect(testimonialQuote).toBeInTheDocument();
  });

  test("renders the Footer component", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const footerElement = screen.getByRole("contentinfo"); // Assuming Footer uses a <footer> tag
    expect(footerElement).toBeInTheDocument();
  });
});
