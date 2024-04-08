import React from "react";
import { render, screen } from "@testing-library/react";
import Backbutton from "../Components/backbutton.jsx";

test("renders backbutton", () => {
  render(<Backbutton />);
  const linkElement = screen.getByPlaceholderText("Back");
  expect(linkElement).toBeVisible();
});
