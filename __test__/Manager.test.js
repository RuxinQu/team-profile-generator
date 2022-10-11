const {Manager} = require('../lib/Classes');

describe('Manager class',()=>{
    const manager = new Manager('ruxin',1,'ruxinqu@gmail.com',101)

    it('returns the name, id, email and office number',()=>{
        expect(manager._name).toBe('ruxin');
        expect(manager._id).toBe(1);
        expect(manager._email).toBe('ruxinqu@gmail.com');
        expect(manager._officeNumber).toBe(101);
    })

    it('getName() method returns the name',()=>{
        expect(manager.getName()).toBe(manager._name);
    })

    it('getId() method returns the ID',()=>{
        expect(manager.getId()).toBe(manager._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(manager.getEmail()).toBe(manager._email);
    });

    it('getOffice() method returns the office number',()=>{
        expect(manager.getOfficeNumber()).toBe(manager._officeNumber);
    })
    it('getRole() method returns "Manager"',()=>{
        expect(manager.getRole()).toBe('Manager');
    })
})