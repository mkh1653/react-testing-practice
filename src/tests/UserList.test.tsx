import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Userlist from "../components/UserList";

describe("UserList component", () => {
  const users = [
    { id: "1", name: "test", email: "test@gmail.com" },
    { id: "2", name: "test2", email: "test2@gmail.com" },
  ];

  let removeUser: ReturnType<typeof vi.fn>;
  beforeEach(() => {
    removeUser = vi.fn();
  });

  it("shows message when no users", () => {
    render(<Userlist users={[]} onDelete={removeUser} />);
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });

  it("render all users list", () => {
    render(<Userlist users={users} onDelete={removeUser} />);

    const items = screen.getAllByTestId("user-item");
    expect(items).toHaveLength(2);

    expect(items[0]).toHaveTextContent("test");
    expect(items[0]).toHaveTextContent("test@gmail.com");

    expect(items[1]).toHaveTextContent("test2");
    expect(items[1]).toHaveTextContent("test2@gmail.com");
  });

  it("calls onDeleteUser with correct id", () => {
    render(<Userlist users={users} onDelete={removeUser} />);

    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[0]);

    expect(removeUser).toHaveBeenCalledWith(users[0].id);
    expect(removeUser).toHaveBeenCalledTimes(1);
  });
});
