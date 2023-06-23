<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar

```shell
yarn install
```

3. Tener Nest CLI instalado

```shell
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```shell
docker-compose up -d
```

5. Clonar el archivo **.env.example** y renombrar la copia a **.env** rellenando las variables de entorno respectivas según su caso.

6. Ejecutar la aplicación en dev:

```shell
yarn start:dev
```

7. Reconstruir la base de datos con el Seed

```shell
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest

# Build de producción

1. crear el archivo **.env.prod**

2. Rellenar las variables de entorno para producción

3. Crear la nueva imagen

```shell
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
