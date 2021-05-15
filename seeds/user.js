const { User } = require('../models');

const userData =

[
    {
        "name": "Charlie Brown",
        "email": "CB@email.com",
        "password": "password"
    },
    {
        "name": "Snoopy",
        "email": "snoopy@email.com",
        "password": "password"
    },
    {
        "name": "Lucy",
        "email": "lucy@email.com",
        "password": "password"
    },
    {
        "name": "Schroeder",
        "email": "schroeder@email.com",
        "password": "password"
    },
    {
        "name": "Linus",
        "email": "linus.com",
        "password": "password"
    },
    
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;