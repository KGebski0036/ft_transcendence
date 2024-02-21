# ft_transcendence

The ft_transcendence project is about creating a website for the mighty Pong contest. The website will allow users to play Pong with others in real-time multiplayer online games. The project requires a nice user interface. The use of libraries or frameworks to replace the job is strictly prohibited, and any tools or resources utilized must be justified.

## Tehnologies

<div align="center">
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" alt="bootstrap  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="30" alt="angular  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" height="30" alt="nestjs  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="html  logo"  />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="html  logo"  />
</div>

## Requirements
### General
 - Your website backend must be written in NestJS
 - The frontend must be written with a TypeScript framework of your choice.
 - You must use a PostgreSQL database.
 - Your website must be a single-page application.
 - Everything has to be launch by a single call to: `docker-compose up --build`.
### Security
 - Any password stored in your database must be hashed.
 - Your website must be protected against SQL injections.
 - You must implement some kind of server-side validation for forms and any user input.
### User Account
 - The user must login using the OAuth system of 42 intranet.
 - The user should be able to choose a unique name that will be displayed on the website
 - The user should be able to upload an avatar. If the user doesn’t upload an avatar,
a default one must be set.
- The user should be able to enable two-factor authentication. For instance,
Google Authenticator
- The user should be able to add other users as friends and see their current status
-  Stats (such as: wins and losses) have to be displayed on the user profile.
- Each user should have a Match History.
### Chat
- The user should be able to create channels (chat rooms) that can be either public, or private, or protected by a password.
- The user should be able to send direct messages to other users.
- The user should be able to block other users. This way, they will see no more
messages from the account they blocked.
### Game
- The main purpose of this website is to play Pong versus other players.
- Users should be able to play a live Pong game versus another player
directly on the website.
- There must be a matchmaking system: the user can join a queue until they get
automatically matched with someone else

## How to start

1. create `.env` file in the root folder of this repositiory and fill it with data.

```
DATABASE_URL=postgres://user:user@postgres:5432/database
JWT_SECRET=hard_to_guess_secret_123
CLIENT_ID=<clientID>
CLIENT_SECRET=<clientSecret>
CALLBACK_URL=http://localhost:3000/api/auth/42/redirect
FRONTEND_URL=http://localhost:4200/public/login
COOKIE_SECRET=hard_to_guess_secret_321
POSTGRES_USER=user
POSTGRES_PASSWORD=user
POSTGRES_DB=database
PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=root
```

2. If u are part of `42 network` replace \<clientID\> and \<clientSecret\> using Your Intra Api Credentials
![Intra](screenshots/intra.png)

3. `docker-compose up --build`

## Screenshots

![Screenshot](screenshots/00.png)
![Screenshot](screenshots/01.png)
![Screenshot](screenshots/02.png)
![Screenshot](screenshots/03.png)
![Screenshot](screenshots/04.png)
![Screenshot](screenshots/05.png)
![Screenshot](screenshots/06.png)
![Screenshot](screenshots/07.png)

