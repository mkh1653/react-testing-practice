import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders app", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(/vite/i);
});
