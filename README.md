# Team Profile Generator

![badge](https://img.shields.io/badge/License-MIT-green.svg)

![badge](https://img.shields.io/github/languages/top/ruxinqu/team-profile-generator)

## Description

This project generates an HTML file of team profile containing information about the manager, engineers and interns after user answers all the prompts that apply. [Inquirer](https://www.npmjs.com/package/inquirer) is used to collect user input.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Test](#test)
- [Question](#question)

## Installation

1. run `git@github.com:RuxinQu/team-profile-generator.git` on the terminal to git clone the repo.
2. then run `npm install` to download the packages.

## Usage

1. run `npm index.js` then type in the manager's name, employee ID, Email address and office number.
2. choose to add an 'engineer' or 'intern' to the team and answer the prompted questions.
3. when user decides to finish adding teammembers, choose 'Finish' and an HTML file will be generated in the `dist` folder.
4. validations are added to check the name, Github username and school can't be **empty** input; the employee ID and office number must be a **number**; the email address must in **email** format.


View the demo video of this project [**HERE**](https://drive.google.com/file/d/1MqKv9ffVhvcLI9MYeY6uadk3hxres1Fx/view?usp=sharing).

## License

This project is under MIT license

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

## Test

This application uses [Jest](https://jestjs.io) for running the unit tests.

## Question
  My github profile: https://github.com/ruxinqu

  Contact me via: ruxinqu@gmail.com if you have addition questions.