# Feathers v4 with feathers-authentication-management (pre-release)

A basic [Feathers](https://feathersjs.com/) v4 application with [Local Authentication](https://docs.feathersjs.com/api/authentication/local.html) and the pre-release version `4.0.0-pre.0` of the [feathers-authentication-management](https://github.com/feathersjs-ecosystem/feathers-authentication-management) (`f-a-m`) package for "sign up verification, forgotten password reset, and other capabilities for local authentication". In this project, f-a-m uses e-mails for communication with the users. Moreover, the app uses [feathers-sequelize](https://github.com/feathersjs-ecosystem/feathers-sequelize) as a database adapter to MySQL.

This project contains a `docker-compose.yaml` to start a Docker network with

- the Feathers app,
- the MySQL database,
- [PHPMyAdmin](https://www.phpmyadmin.net/) for database administration, and
- [Mailhog](https://github.com/mailhog/MailHog) as an email testing tool for local development.

# Installation and Setup

Clone this repo and install the app's dependencies:

```bash
$ cd server
$ npm install
```

Run Docker-Compose to start all containers:

```bash
$ docker-compose up
```

Open another terminal and run the database migration to create the users database table:

```bash
$ docker-compose exec server npm run db:migrate
```

That's it. The Feathers app is running and connected to a local MySQL database.

# Run feathers-authentication-management Actions

The file `curl-commands.sh` contains examples how to call the API with the `f-a-m` service. Please refer to the [new `f-a-m` documentation](https://feathers-a-m.netlify.app/) for more details regarding f-a-m.

For example, to register a new user just call:

```bash
$ curl 'http://localhost:3030/users/' -H 'Content-Type: application/json' --data-binary '{ "email": "user@example.com", "password": "secret" }'
```

Feathers will create the new user and the `f-a-m` service will create a verification token and send it in an e-mail.

You can see the new user in the database using PHPMyAdmin ([http://localhost:8025/](http://localhost:8025/), user: `root`, password: `test`).

Open the e-mail with Mailhog ([http://localhost:8025/](http://localhost:8025/)) and copy the token from the e-mail body.

Now enter this token in the following command, which will call the API to verify the user:

```bash
$ curl 'http://localhost:3030/authManagement/' -H 'Content-Type: application/json' --data-binary '{ "action": "verifySignupLong", "value": "[enter token from e-mail]" }'
```
