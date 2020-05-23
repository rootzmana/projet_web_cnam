# Portfolio website refactor

This repo is about the refactor of [my portfolio website](www.matthieudesvignes.com). It's a static website with an admin part : everything is customizable. The admin part is build on Symfony, API Platform and React Admin for a REST api managing data. The front part is made with React.JS.

## Local installation

**Requirements**
I host my website on a mutualized server so what you need is :

- PHP 7.4
- MySQL 5.7
- Apache

Also, in order to build dependencies, you will need :

- Composer (Symfony dependencies)
- Yarn (React dependencies)

**Installation**

    // from /api
    composer install

    // from /admin and project root
    yarn install

**Setup database and API**
In /api/.env, set env variable `DATABASE_URL=mysql://USER:PSWD@localhost:3306/DB_NAME?serverVersion=5.7` and run :

    php bin/console doctrine:database:create
    php bin/console doctrine:migrations:migrate

API documentation and request are now available on http://localhost/api/public

**Setup admin and front**
In project root and admin directory, run in two separates terminal :

    yarn start

This will launch a local instance of Node server for each app.

Warning : Don't forget to specify a other value than 3000 (e.g 3001) for the key 'PORT' into a .env file for front or for admin app in order to run both app on two distinct port.

**Front part wireframes**

- Accueil : https://wireframe.cc/ww7PEU
- A propos : https://wireframe.cc/Qv5L2d
- Compétences : https://wireframe.cc/QpfUrp
- Projets : https://wireframe.cc/TR2GN7
- Contact : https://wireframe.cc/Rx5N1t
