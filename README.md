Backend for Job Stalker web app.

Build with node-express server using sequelize to connect to Postgres DB
Server deplayed on Render, url is https://job-stalker.onrender.com/
Routes, are messages, users
Postgres DB is deployed on ElephantSQL, db named fkxjumhm.

JWT used for authentication

package.json for dependecies:

 "name": "job-stalker-backend",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "npx sequelize-cli db:migrate && node ./bin/www"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "dotenv": "^16.0.3",
    "express": "~4.16.1",
    "jsonwebtoken": "^9.0.0",
    "morgan": "~1.9.1",
    "nodemon": "^2.0.22",
    "passport": "^0.6.0",
    "passport-jwt": "^4.0.1",
    "passport-local": "^1.0.0",
    "pg": "^8.10.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.31.1"
  }





  