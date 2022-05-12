const methods = require("./index");


test('index venkata + ravindra to equal venkataravindra', () => {
    expect(methods.getFullName("venkata","ravindra")).toBe("venkataravindra");
});

test('index rama + krishna to equal ramakrishna', () => {
    expect(methods.getFullName("rama","krishna")).toBe("ramakrishna");
});


