const {Engineer} = require('../lib/Classes.js');

describe('Engineer class',()=>{
    const engineer = new Engineer('ruxin',2,'ruxinqu@gmail.com','ruxinqu')
    it('returns the name, id, email and github username',()=>{
        expect(engineer._name).toStrictEqual('ruxin');
        expect(engineer._id).toStrictEqual(2);
        expect(engineer._email).toStrictEqual('ruxinqu@gmail.com');
        expect(engineer._github).toStrictEqual('ruxinqu')
    })

    it('getName() method returns the name',()=>{
        expect(engineer.getName()).toStrictEqual(engineer._name);
    })

    it('getId() method returns the ID',()=>{
        expect(engineer.getId()).toStrictEqual(engineer._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(engineer.getEmail()).toStrictEqual(engineer._email);
    });

    it('getGithub() method returns the github username',()=>{
        expect(engineer.getGithub()).toStrictEqual(engineer._github);
    })

    it('getRole() returns "Engineer',()=>{
        expect(engineer.getRole()).toStrictEqual('Engineer');
    })

})