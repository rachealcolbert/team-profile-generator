const Manager = require('../lib/Manager.js');

test('creates a new manager object', () => {
    const manager = new Manager('Racheal');
    expect(manager.name).toBe('Racheal');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe(expect.any(Object));
    expect(manager.office).toEqual(expect.any(Number));
});