import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("should work correctly with null value", async () => {
    const onChange = jest.fn();
    const utils = render(<Input name="testName" label="testLabel"  value={null} onChange={onChange} />);
    const input = utils.getByPlaceholderText('testLabel');
    fireEvent.change(input, { target: { value: '23' } });

    expect(onChange).toBeCalledWith(23);
  });

  test("should work correctly with defined value", async () => {
    const onChange = jest.fn();
    const utils = render(<Input name="testName" label="testLabel" value={28} onChange={onChange} />);
    const input = utils.getByPlaceholderText('testLabel');
    const value = utils.getByDisplayValue(28);
    fireEvent.change(input, { target: { value: '23' } });

    expect(onChange).toBeCalledWith(23)
    expect(value).toBeDefined()
  });
});
