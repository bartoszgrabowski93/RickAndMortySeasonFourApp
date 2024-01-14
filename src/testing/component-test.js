import React from "react";
import { render, screen } from "@testing-library/react";
import Backbutton from "../components/backbutton.jsx";

test("renders backbutton", () => {
  render(<Backbutton />);
  const linkElement = screen.getByText(/back/i);
  expect(linkElement).toBeInTheDocument();
});
