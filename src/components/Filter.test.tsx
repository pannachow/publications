import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "./Filter";

test("calls onChange prop when input changed", () => {
  let filterValue = "all";
  render(<Filter onChange={(value) => (filterValue = value)} />);
  const inputElement = screen.getByPlaceholderText("Status");

  fireEvent.change(inputElement, { target: { value: "draft" } });

  expect(filterValue).toBe("draft");
});
