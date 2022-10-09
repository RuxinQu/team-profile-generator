const {Employee} = require('../lib/Classes.js')

describe('Employee class', () => {
    // beforeEach(() => employee = new Employee('ruxin', 1, 'ruxinqu@gmail.com'));
    const employee = new Employee('ruxin', 1, 'ruxinqu@gmail.com')
    it('returns the name,id and email of the employee', () => {
        expect(employee._name).toStrictEqual('ruxin');
        expect(employee._id).toStrictEqual(1);
        expect(employee._email).toStrictEqual('ruxinqu@gmail.com');
    });

    it('getName() method returns the name', () => {
        expect(employee.getName()).toStrictEqual(employee._name);
    });

    it('getId() method returns the id', () => {
        expect(employee.getId()).toStrictEqual(employee._id);
    });
    it('getEmail() method returns the email', () => {
        expect(employee.getEmail()).toStrictEqual(employee._email);
    });
    it('getRole() method returns "Employee"',()=>{
        expect(employee.getRole()).toStrictEqual('Employee');
    })
})