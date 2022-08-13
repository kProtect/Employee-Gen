
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Lee', 90, 'klee@pnf.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Lee', 90, 'klee@pnf.com');

    expect(manager.getRole()).toEqual("Manager");
}); 