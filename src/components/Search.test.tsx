import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

test("calls onChange prop when input changed", () => {
  let searchValue = "";
  render(<Search onChange={(value) => (searchValue = value)} />);
  const inputElement = screen.getByPlaceholderText("Search");

  fireEvent.change(inputElement, { target: { value: "foo" } });

  expect(searchValue).toBe("foo");
});
