const {Manager} = require('../lib/Classes.js');

describe('Manager class',()=>{
    const manager = new Manager('ruxin',1,'ruxinqu@gmail.com',101)

    it('returns the name, id, email and office',()=>{
        expect(manager._name).toStrictEqual('ruxin');
        expect(manager._id).toStrictEqual(1);
        expect(manager._email).toStrictEqual('ruxinqu@gmail.com');
        expect(manager._office).toStrictEqual(101);
    })

    it('getName() method returns the name',()=>{
        expect(manager.getName()).toStrictEqual(manager._name);
    })

    it('getId() method returns the ID',()=>{
        expect(manager.getId()).toStrictEqual(manager._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(manager.getEmail()).toStrictEqual(manager._email);
    });

    it('getOffice() method returns the office number',()=>{
        expect(manager.getOffice()).toStrictEqual(manager._office);
    })
    it('getRole() method returns "Manager"',()=>{
        expect(manager.getRole()).toStrictEqual('Manager');
    })
})