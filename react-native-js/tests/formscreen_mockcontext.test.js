import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import FormScreen from "../screens/FormScreen";
import { NameProvider } from "../utils/NameManager";

jest.mock("../utils/NameManager", () => {
  const React2 = require("react");
  const FakeContext = React2.createContext();

  const fakeuseName = () => React2.useContext(FakeContext);
  const FakeNameProvider = ({ children, value = {} }) => {
    return (
      <FakeContext.Provider value={value}>{children}</FakeContext.Provider>
    );
  };

  return {
    useName: fakeuseName,
    NameProvider: FakeNameProvider,
  };
});

it("render default text with mock context", () => {
  const screen = render(
    <NameProvider value={{ name: "Gil" }}>
      <FormScreen />
    </NameProvider>
  );

  screen.getByText("Welcome, Gil!");
});

it("calls saveName on button press with mock context", () => {
  const saveName = jest.fn();

  const screen = render(
    <NameProvider value={{ saveName }}>
      <FormScreen />
    </NameProvider>
  );

  fireEvent.changeText(screen.getByPlaceholderText("Example"), "asdf");
  fireEvent.press(screen.getByText("Change"));

  expect(saveName).toBeCalledWith("asdf");
});