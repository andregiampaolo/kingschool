# kingschool

## Database:

User: postgres
password:

Observation: Is necessary create database manually.
Currently name of database is `api` and you can customize it in file `./api/config/default.json`.

# Start Database

1. Go to root folder
2. Execute commando `docker-compose up`. This will create a container of postgres

# Documentation Database

Not so good:
Relationship 1:1 - https://www.youtube.com/watch?v=hZ9ES9qrFqo
Relationship 1:N - https://www.youtube.com/watch?v=yO__Aev3TeE
Relationship N:M - https://www.youtube.com/watch?v=TUEhRlKxrOQ

Association documentation: https://sequelize.org/master/manual/associations.html

# Documentation Basic

Brasil: https://www.youtube.com/watch?v=ef67L9XiJPA

# Documentation Seed:

https://auk.docs.feathersjs.com/guides/advanced/seeding-services.html

# Documentation Many to Many:

## How create associeate:

https://gist.github.com/harrisrobin/1415a91630bcfaefb6193d721c435b95

## How include in hooks:

https://stackoverflow.com/questions/53117988/sequelize-select-and-include-another-table-alias

## How create a query:

https://github.com/sequelize/sequelize/issues/970

## Create a seed:

    https://sequelize.org/master/
    https://sequelize.org/master/manual/models-usage.html#-code-findorcreate--code----search-for-a-specific-element-or-create-it-if-not-available

    Create a file `users.js` inside folder `./seed`. This file will contain a array with users object.
    In entity model will we create an logic to create if not exists a register.

    '''
    users.sync().then(() => {
        SeedUsers.map(user => {
            users.findOrCreate(
                {
                    where: { email: user.email },
                    defaults: { password: user.password }
                }
            )
            .then(([user, created]) => {
                if (created) {
                    console.log('User create: ', user);
                }
            });
        });
    });
    '''
