import { checkForm } from "../src/client/js/formChecker";

describe("checks if URL is valid", () => {
    test("should throw error", function() {
        expect(() => checkForm("Thisshallnotpass.net")).toThrow(Error);
    });
    test("should not throw error", function() {
        expect(() => checkForm("https://www.something.com/")).not.toThrow(Error);
    });
});
