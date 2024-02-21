### About
Intune is a music genre discovering app in the form of a trivia game that allows the user to discover new music while also learning about different subgenres.


#



### Features

Three 30 second track sample 
Audio analysis - danceability, tempo, energy, rhythm, etc
Ability to choose genres
Earn a playlist if you score 8 out of 10
Playlist is added to users Spotify account

### Built With

Intune is a (PERN) stack built using PostgreSQL, Express, React, and Node.

It uses the Spotify API for authentication, as well as the following endpoints to fetch data:

- Search item -> to get subgenres, artists uri and playlists
- Artist top tracks -> to fetch track id
- Get track -> to fetch track preview for 30s sample
- Track audio features ->  audio analysis


### Getting Started

#### Prerequisites

DOCKER to run PostgreSQL server for registered users. To use those features, you must install Docker first before continuing.

Windows:

Follow Microsoft's instructions to install WSL and Docker.
MacOS:

Use Homebrew: brew install --cask docker
Follow the instructions on the Docker website
Launch Docker Desktop once it is installed.

#### Node

You'll need to install Node v14 or above. nvm is highly recommended.

#### Spotify credentials

Spotify requires you to register an app to receive a client id and secret to hit their API endpoints.

### Installation

#### 1. Clone the repo:

git clone https://github.com/ClaribelMendez/FinalProject
Install all NPM packages using this in the root directory:

#### 2. Install NPM packagages  
npm install

#### 3. Database 

- Copy the root example environment file
- cp .env.example .env
- npm run db:init
- Start the app and view it at http://localhost:3000 by using:

CD into client directory and and use the command  'npm start', from here you should be redirected to http://localhost:3000/
Shut Down the Express and React development servers using Ctrl-C .

2. To restore the DB dump file that the project already contain, just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask you for your password. 
3. To clean your folder from the owner git, run the command `rm -rf .git`
4. Run the command `git init` to start your git repository
5. Go to the server folder in the project (`cd server`) and run the command `npm install`
6. Inside your server folder, create an .env file with `touch .env`
7. Inside your server folder, open the file `.env.example` and copy the file there. 
8. Inside your .env file, paste the string from .env.example and change the variables with the values from the project. For this template, don't change the name of your db.
9. Inside your server file: run the command `psql -U postgres -f db.sql` to restore the DB from the file db.sql
10. Go to the cliente folder (`cd .. and cd client`) and run the command `npm start`
11. Both server should run now with `npm start`
12. Go to localhost:3000 
