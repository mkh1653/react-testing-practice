import { describe, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import UserForm from "../components/UserForm";

describe("UserForm validation", () => {
  let submitHandle: ReturnType<typeof vi.fn>
  beforeEach(() => {
    submitHandle = vi.fn()
  })
  it("disables submit when email is empty", () => {
    render(<UserForm onAddUser={submitHandle} />);
    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "mahdi" },
    });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disables submit when name is empty", () => {
    render(<UserForm onAddUser={submitHandle} />);

    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "test@email.com" },
    });

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows validation error after submit when email is invalid", () => {
    render(<UserForm onAddUser={submitHandle} />);

    const nameInput = screen.getByTestId("name") as HTMLInputElement;
    const emailInput = screen.getByTestId("email") as HTMLInputElement;

    fireEvent.change(nameInput, {
      target: { value: "test" },
    });

    fireEvent.change(emailInput, {
      target: { value: "test@" },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(nameInput.value).toBe("test");
    expect(emailInput.value).toBe("test@");

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(submitHandle).not.toHaveBeenCalled();
  });

  it("calls onAddUser when form is valid and submitted", () => {
    render(<UserForm onAddUser={submitHandle} />);

    const nameInput = screen.getByTestId("name") as HTMLInputElement;
    const emailInput = screen.getByTestId("email") as HTMLInputElement;

    fireEvent.change(nameInput, {
      target: { value: "test" },
    });

    fireEvent.change(emailInput, {
      target: { value: "test@email.com" },
    });

    fireEvent.submit(screen.getByRole("button"));

    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");

    expect(submitHandle).toHaveBeenCalledWith({
      name: "test",
      email: "test@email.com",
    });
  });
});
