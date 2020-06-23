 #BarberShop [Symfony and Vue.js]
 

#####author : Ioana IORDACHE


##Installation of Docker and Symfony project

1.Clone project

```bash
git clone ....
```

2.Move in source directory

```bash
cd projet_ioana
```

3.Launch docker containers (web, mysql, phpmyadmin)

```bash
docker-compose up --build
```

4.Enter into the web container

```bash
docker exec -itu apache projetioanamaster_web_1 bash
```

5.Install dependencies
```bash
composer install
yarn install
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
php bin/console doctrine:migrations:migrate
```

8.Administrator connexion
```bash
account: admin
password: adminpass
```

##Ports/ Containers
```bash
0.0.0.0:8200->80/tcp            projetioana_web_1
0.0.0.0:8301->80/tcp            projetioana_pma_1
0.0.0.0:8300->3306/tcp          projetioana_mysql_1 
```

