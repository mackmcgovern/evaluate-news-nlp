import { handleSubmit } from "../src/client/js/formHandler";

describe("test the submit function", () => {
    test("test handleSubmit function", () => {
        expect(handleSubmit).toBeDefined();
    });
});