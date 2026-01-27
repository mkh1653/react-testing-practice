# User Management Test App

## Description

This project is a small React application built to demonstrate form validation, user list management, and unit testing using [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com).

It serves as a showcase of front-end development and testing skills in a professional environment.

### Key Components

- **`UserForm` component:** Handles user input with client-side validation for name and email.
- **`UserList` component:** Manages and displays the current list of users, allowing for individual user deletion.
- **Comprehensive Unit Tests:** Ensures validation logic and UI behavior function correctly.

## Features

- **User Management:** Add new users via a controlled form.
- **Form Validation:**
  - Name and email fields are required.
  - Email input includes format validation.
  - The submit button is disabled until inputs are valid.
  - The form resets automatically after a successful submission.
- **Dynamic List Display:** Users are displayed in an interactive list.
- **Delete Functionality:** Remove users from the list dynamically.
- **Robust Testing:** Fully tested with [Vitest](https://vitest.dev) and [React Testing Library](https://testing-library.com).

## Tech Stack

- [React](https://reactjs.org) (TypeScript)
- [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com) for styling
- [Vitest](https://vitest.dev) for unit testing
- [React Testing Library](https://testing-library.com) for DOM-based tests

## Getting Started

Follow these instructions to set up and run the project locally.

### Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd <repo-folder>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # (e.g., typically opens http://localhost:5173)
    ```

4.  **Run tests:**

    ```bash
    npm run test
    # or yarn test
    ```

## Project Structure

The core application logic and components are organized within the `src/` directory:

src/
├─ components/
│ ├─ UserForm.tsx
│ └─ UserList.tsx
├─ tests/
│ ├─ UserForm.test.tsx
│ └─ UserList.test.tsx
└─ App.tsx

- `components/` → Contains the main React UI components.
- `tests/` → Contains unit tests for the components.

## Testing Highlights

The test suite covers key functionality rigorously:

- ✅ Form validation is thoroughly tested (empty fields, invalid email, submit enable/disable behavior).
- ✅ Callback functions for submit and delete actions are verified.
- ✅ Input reset behavior is confirmed after a successful submission.
- ✅ The scrollable user list functionality is tested for proper rendering.

## Future Improvements

- Add keyboard navigation tests for accessibility
- Handle edge cases like extremely long names or emails
- Add mock API integration tests

## License

his project is open source and available under the [MIT License](https://opensource.org).
