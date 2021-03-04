import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("should work correctly", async () => {
    const onPress = jest.fn();
    render(<Button onPress={onPress} text="test" />);

    fireEvent.click(screen.getByText("test"));

    expect(onPress).toBeCalled();
  });
});
