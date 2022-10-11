const { Employee } = require('../lib/Classes')

describe('Employee class', () => {
    //beforeEach(() =>  employee = new Employee('ruxin', 1, 'ruxinqu@gmail.com'));

    const employee = new Employee('ruxin', 1, 'ruxinqu@gmail.com')
    it('returns the name,id and email of the employee', () => {
        expect(employee._name).toBe('ruxin');
        expect(employee._id).toBe(1);
        expect(employee._email).toBe('ruxinqu@gmail.com');
    });

    it('getName() method returns the name', () => {
        expect(employee.getName()).toBe(employee._name);
    });

    it('getId() method returns the id', () => {
        expect(employee.getId()).toBe(employee._id);
    });
    it('getEmail() method returns the email', () => {
        expect(employee.getEmail()).toBe(employee._email);
    });
    it('getRole() method returns "Employee"', () => {
        expect(employee.getRole()).toBe('Employee');
    })

})