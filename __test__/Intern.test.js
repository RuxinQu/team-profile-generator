const {Intern} = require('../lib/Classes');

describe('Intern class',()=>{
    const intern = new Intern('ruxin',2,'ruxinqu@gmail.com','uw')
    it('returns the name, id, email and github username',()=>{
        expect(intern._name).toBe('ruxin');
        expect(intern._id).toBe(2);
        expect(intern._email).toBe('ruxinqu@gmail.com');
        expect(intern._school).toBe('uw')
    })

    it('getName() method returns the name',()=>{
        expect(intern.getName()).toBe(intern._name);
    })

    it('getId() method returns the ID',()=>{
        expect(intern.getId()).toBe(intern._id);
    })

    it('getEmail() method returns the email',()=>{
        expect(intern.getEmail()).toBe(intern._email);
    });

    it('getSchool() method returns the github username',()=>{
        expect(intern.getSchool()).toBe(intern._school);
    })

    it('getRole() returns "Intern',()=>{
        expect(intern.getRole()).toBe('Intern');
    })

})