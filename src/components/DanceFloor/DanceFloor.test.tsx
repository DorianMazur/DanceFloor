import { render } from "@testing-library/react";
import DanceFloor from "./DanceFloor";
import 'jest-canvas-mock';

describe("DanceFloor", () => {
  test("renders without crash", async () => {
    const utils = render(<DanceFloor dimensions={{rows: 3, columns:2}} />);

    expect(utils).toMatchSnapshot()
  });
  /* I should write more tests, but i don't have enough time
  If I had enough time then:
  - I will use jest-canvas-mock 
    - ctx.__getPath() to check if correct path exist for given columns and rows
    - ctx.__getEvents() to check events 
  - Also i will do some research about testing canvas because i don't have experience in canvas tests :D
  */
});
