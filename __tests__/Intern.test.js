const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee.js')


test('creates a new intern object', () => {
    const intern = new Intern('Racheal', 1, 'racheal@gmail.com', 'UofA');
    expect(intern.name).toBe('Racheal');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('racheal@gmail.com');
    expect(intern.school).toBe('UofA');
});