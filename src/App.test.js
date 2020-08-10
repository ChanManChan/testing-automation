import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("dummy test", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/NandaGopal/);
  expect(linkElement).toBeInTheDocument();
});
