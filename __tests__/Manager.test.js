const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js')

test('creates a new manager object', () => {
    const manager = new Manager('Racheal', 1, 'racheal@gmail.com', 2);
    expect(manager.name).toBe('Racheal');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('racheal@gmail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});