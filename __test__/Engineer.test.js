const {Engineer} = require('../lib/Classes');

describe('Engineer class',()=>{
    const engineer = new Engineer('ruxin',2,'ruxinqu@gmail.com','ruxinqu')
    it('returns the name, id, email and github username',()=>{
        expect(engineer._name).toBe('ruxin');
        expect(engineer._id).toBe(2);
        expect(engineer._email).toBe('ruxinqu@gmail.com');
        expect(engineer._github).toBe('ruxinqu')
    })

    it('getName() method returns the name',()=>{
        expect(engineer.getName()).toBe(engineer._name);
    })

    it('getId() method returns the ID',()=>{
        expect(engineer.getId()).toBe(engineer._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(engineer.getEmail()).toBe(engineer._email);
    });

    it('getGithub() method returns the github username',()=>{
        expect(engineer.getGithub()).toBe(engineer._github);
    })

    it('getRole() returns "Engineer',()=>{
        expect(engineer.getRole()).toBe('Engineer');
    })

})