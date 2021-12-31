import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import FormScreen from "../screens/FormScreen";
import { NameProvider } from "../utils/NameManager";

it("render default text", () => {
  const screen = render(<FormScreen />, { wrapper: NameProvider });

  // throws if doesn't exist
  screen.getByText("Welcome, No Name!");
});

it("render default text with input", () => {
    const screen = render(<FormScreen name="Gil" />, { wrapper: NameProvider });
  
    // throws if doesn't exist
    screen.getByText("Welcome, Gil!");
  });

it("changes the text on submit", () => {
  const screen = render(<FormScreen />, { wrapper: NameProvider });
  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  screen.getByText("Welcome, No Name!");

  fireEvent.press(screen.getByText("Change"));
  screen.getByText("Welcome, asdf!");
});

it("calls saveName on button press", () => {
    const mockSaveName = jest.fn();
    const screen = render(<FormScreen saveName={mockSaveName} />, { wrapper: NameProvider });
  
    fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
    fireEvent.press(screen.getByText("Change"));
  
    expect(mockSaveName).toBeCalledWith("asdf");
  });