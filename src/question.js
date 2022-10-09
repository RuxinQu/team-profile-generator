const managerQuestion = [{
    type: "input",
    message: "What's the manager's name?",
    name: "name"
},
{
    type: "input",
    message: "What's the manager's employee ID?",
    name: "id"
},
{
    type: "input",
    message: "What's the manager's email address?",
    name: "email"
},
{
    type: "input",
    message: "What's the manager's office number?",
    name: "office"
}]

const engineerQuestion = [{
    type: "input",
    message: "What's the engineer's name?",
    name: "name"
},
{
    type: "input",
    message: "What's the engineer's employee ID?",
    name: "id"
},
{
    type: "input",
    message: "What's the engineer's email address?",
    name: "email"
},
{
    type: "input",
    message: "What's the engineer's Github username?",
    name: "github"
}];

const internQuestion = [{
    type: "input",
    message: "What's the intern's name?",
    name: "name"
},
{
    type: "input",
    message: "What's the intern's employee ID?",
    name: "id"
},
{
    type: "input",
    message: "What's the intern's email address?",
    name: "email"
},
{
    type: "input",
    message: "What's the intern's school?",
    name: "school"
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

module.exports = {managerQuestion, engineerQuestion, internQuestion, menu}