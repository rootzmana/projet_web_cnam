## TODO

Add instructions for front and admin part

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

** Setup database and API**
In /api/.env, set env variable `DATABASE_URL=mysql://USER:PSWD@localhost:3306/DB_NAME?serverVersion=5.7` and run :

    php bin/console doctrine:database:create
    php bin/console doctrine:migrations:migrate

API documentation and request are now available on http://localhost/api/public

**Front part wireframes**

Accueil : https://wireframe.cc/ww7PEU
A propos : https://wireframe.cc/Qv5L2d
Compétences : https://wireframe.cc/QpfUrp
Projets : https://wireframe.cc/TR2GN7
Contact : https://wireframe.cc/Rx5N1t
