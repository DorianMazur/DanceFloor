import { render, screen } from "@testing-library/react";
import LoadableContent from "./LoadableContent";

describe("LoadableContent", () => {
    test("should return loader when loading is in progress", async () => {
        render(<LoadableContent loading={true} >Test</LoadableContent>);
    
        expect(() => screen.getByText("Test")).toThrow()
      });

      test("should return children", async () => {
        render(<LoadableContent loading={false} >Test</LoadableContent>);
    
        const text = screen.getByText("Test");
    
        expect(text).toBeDefined()
      });
});
