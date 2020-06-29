 #BarberShop [Symfony and Vue.js]
 

#####author : Ioana IORDACHE


##Installation of Docker and Symfony project

1.Clone project

```bash
git clone git@github.com:ioioana/projet_ioana.git
```

2.Move in source directory

```bash
cd projet_ioana-master
```

3.Launch docker containers (web, mysql, phpmyadmin)

```bash
sudo docker-compose up --build
```

4.Enter into the web container

```bash
sudo docker exec -itu apache projetioanamaster_web_1 bash
```

5.Install dependencies
```bash
composer install
yarn install
yarn add @symfony/webpack-encore --dev
yarn run encore dev
```

6.Connect to phpmyadmin and create database
```
MYSQL_DATABASE=dbProjet
MYSQL_USER=root
MYSQL_PASSWORD=root
```

7.Install Database
```bash
inside the container: php bin/console doctrine:migrations:migrate

into phpMyAdmin, run dump_projet_ioana.sql file
```

8.Administrator connexion
```bash
account: admin
password: adminpass
```

##Ports/ Containers
```bash
0.0.0.0:8200->80/tcp            projetioanamaster_web_1
0.0.0.0:8301->80/tcp            projetioanamaster_pma_1
0.0.0.0:8300->3306/tcp          projetioanamaster_mysql_1 
```

