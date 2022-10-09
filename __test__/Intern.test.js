const {Intern} = require('../lib/Classes.js');

describe('Intern class',()=>{
    const intern = new Intern('ruxin',2,'ruxinqu@gmail.com','uw')
    it('returns the name, id, email and github username',()=>{
        expect(intern._name).toStrictEqual('ruxin');
        expect(intern._id).toStrictEqual(2);
        expect(intern._email).toStrictEqual('ruxinqu@gmail.com');
        expect(intern._school).toStrictEqual('uw')
    })

    it('getName() method returns the name',()=>{
        expect(intern.getName()).toStrictEqual(intern._name);
    })

    it('getId() method returns the ID',()=>{
        expect(intern.getId()).toStrictEqual(intern._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(intern.getEmail()).toStrictEqual(intern._email);
    });

    it('getSchool() method returns the github username',()=>{
        expect(intern.getSchool()).toStrictEqual(intern._school);
    })

    it('getRole() returns "Intern',()=>{
        expect(intern.getRole()).toStrictEqual('Intern');
    })

})