import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

test("calls onClick when page clicked", () => {
  let page = 1;
  render(
    <Pagination
      count={1}
      page={1}
      total={2}
      onClick={(value) => (page = value)}
    />
  );
  const linkElement = screen.getByText("2");

  fireEvent.click(linkElement);

  expect(page).toBe(2);
});

test("shows ellipsis when more than five pages", () => {
  // should render as
  // 1 ... 3 4 5 ... 7
  render(<Pagination count={1} page={4} total={7} onClick={() => {}} />);
  
  expect(screen.getByText(1)).toBeInTheDocument();
  expect(screen.queryByText(2)).not.toBeInTheDocument();
  expect(screen.getByText(3)).toBeInTheDocument();
  expect(screen.getByText(4)).toBeInTheDocument();
  expect(screen.getByText(5)).toBeInTheDocument();
  expect(screen.queryByText(6)).not.toBeInTheDocument();
  expect(screen.getByText(7)).toBeInTheDocument();
  expect(screen.getAllByText("…").length).toBe(2);
});
