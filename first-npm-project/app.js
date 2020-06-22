const chalk = require('chalk')
const faker = require('faker')

console.log(chalk.blue('Hello, npm!'))


var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.exampleEmail() // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("Mi personaje fake es:", randomName, randomEmail, randomCard)