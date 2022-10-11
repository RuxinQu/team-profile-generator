const managerQuestion = [{
    type: "input",
    message: "What's the manager's name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Please enter the manager's name!"
    }
},
{
    type: "input",
    message: "What's the manager's employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parseInt(id)) ? "Please enter the manager's employee ID!" : true;
    }
},
{
    type: "input",
    message: "What's the manager's email address?",
    name: "email",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "Please enter the manager's email!";
    }
},
{
    type: "input",
    message: "What's the manager's office number?",
    name: "office",
    validate: function (office) {
        return isNaN(parseInt(office)) ?  "Please enter the manager's office number": true;
    }
}]

const engineerQuestion = [{
    type: "input",
    message: "What's the engineer's name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Please enter the engineer's name!"
    }
},
{
    type: "input",
    message: "What's the engineer's employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parseInt(id))? "Please enter the engineer's employee ID!": true;
    }
},
{
    type: "input",
    message: "What's the engineer's email address?",
    name: "email",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "Please enter the engineer's email!";
    }
},
{
    type: "input",
    message: "What's the engineer's Github username?",
    name: "github",
    validate: function (github) {
        return !!github || "please enter the engineer's github username!"
    }

}];

const internQuestion = [{
    type: "input",
    message: "What's the intern's name?",
    name: "name",
    validate: function (input) {
        return typeof input === "string" ? true : "Please enter the intern's name!"
    }
},
{
    type: "input",
    message: "What's the intern's employee ID?",
    name: "id",
    validate: function (id) {
        return isNaN(parseInt(id)) ? "Please enter the intern's employee ID!" : true;
    }
},
{
    type: "input",
    message: "What's the intern's email address?",
    name: "email",
    validate: function (email) {
        // Regex mail check (return true if valid mail)
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email) || "Please enter the intern's email!";
    }
},
{
    type: "input",
    message: "What's the intern's school?",
    name: "school",
    validate: function (school) {
        return !!school || "please enter the intern's school!"
    }

}];

const menu = [{
    type: 'list',
    name: 'choice',
    message: 'Choose to add an engineer or an intern or finish building your team',
    choices: [
        "Engineer",
        "Intern",
        "Finish"
    ]
}];

module.exports = { managerQuestion, engineerQuestion, internQuestion, menu }