const index = require("./index");


test('index venkata + ravindra to equal venkataravindra', () => {
    expect(getFullName("venkata","ravindra")).toBe("venkataravindra");
});

test('index rama + krishna to equal ramakrishna', () => {
    expect(getFullName("rama","krishna")).toBe("ramakrishna");
});


