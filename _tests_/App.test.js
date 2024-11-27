import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App.jsx"; // Adjust the path as needed
import "@testing-library/jest-dom";

describe("Toggle Theme Component", () => {
  it("renders the app correctly", () => {
    render(<App />);
    // Check if the welcome text is in the document
    expect(screen.getByText("Welcome to Real world...")).toBeInTheDocument();
  });

  it("displays light theme by default", () => {
    render(<App />);
    const container = screen.getByRole("button").parentElement;
    // Check if the light theme classes are applied
    expect(container).toHaveClass("bg-green-100");
    expect(container).toHaveClass("text-black");
  });

  it("toggles to dark theme when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Toggle Theme" });
    fireEvent.click(button); // Simulate clicking the toggle button
    const container = button.parentElement;
    // Check if the dark theme classes are applied
    expect(container).toHaveClass("bg-gray-900");
    expect(container).toHaveClass("text-white");
  });

  it("toggles back to light theme when button is clicked again", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Toggle Theme" });
    fireEvent.click(button); // First click to switch to dark theme
    fireEvent.click(button); // Second click to switch back to light theme
    const container = button.parentElement;
    // Check if the light theme classes are reapplied
    expect(container).toHaveClass("bg-green-100");
    expect(container).toHaveClass("text-black");
  });
});
