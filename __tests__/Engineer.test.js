const Employee = require('../lib/Employee.js')
const Engineer = require('../lib/Engineer.js');


test('creates a new engineer object', () => {
    const engineer = new Engineer('Racheal', 1, 'racheal@gmail.com', 'https://github.com/rachealcolbert/');
    expect(engineer.name).toBe('Racheal');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('racheal@gmail.com');
    expect(engineer.gitHubUsername).toBe('https://github.com/rachealcolbert/');
});