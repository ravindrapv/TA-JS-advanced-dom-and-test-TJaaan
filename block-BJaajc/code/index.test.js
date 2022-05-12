const index = require("./index");


test('index venkata + ravindra to equal venkataravindra', () => {
    expect(getFullName("venkata","ravindra")).toBe("venkataravindra");
});