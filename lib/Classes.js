class Employee {
    constructor(name, id, email){
        this._name = name;
        this._id = id;
        this._email = email;
    }

    getName(){
        return this._name;
    }
    getId(){
        return this._id;
    }
    getEmail(){
        return this._email;
    }
    getRole(){
        return 'Employee'
    }
}

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this._office = office;
    }
    getOffice(){
        return this._office;
    }
    getRole(){
        return 'Manager'
    }
}


module.exports = {Employee, Manager};