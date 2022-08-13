
const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('Lee', 90, 'klee@pnf.com', 'GT');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Lee', 90, 'klee@pnf.com', 'GT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Lee', 90, 'klee@pnf.com', 'GT');

    expect(intern.getRole()).toEqual("Intern");
}); 