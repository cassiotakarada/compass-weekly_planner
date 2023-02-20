import { render, fireEvent, screen } from "@testing-library/react";
import InputLogin from "../components/Login_Registration_Components/InputLogin/InputLogin";

describe("InputRegistration component", () => {
  it("renders the input field with the correct label and placeholder", () => {
    render(<InputLogin label="" placeholder="username" />);
    expect(screen.getByLabelText("")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
  });

  it("updates the input value when the user types into the field", () => {
    const onChangeMock = jest.fn();
    render(<InputLogin label="Password" type="password" onChange={onChangeMock} />);
    const inputField = screen.getByLabelText("Password");
    fireEvent.change(inputField, { target: { value: "password123" } });

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
    expect(inputField).toHaveValue("password123");
  });
});
