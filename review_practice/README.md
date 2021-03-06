<h1 align="center">Boost bnb ๐</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/YukJiSoo/umchan-server">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
</p>

## Server Architecture

![DB ๊ตฌ์กฐ](./readme-images/server-architecture.png)

-   3๊ฐ์ server ์์ฑ
-   ์ฌ์ฉ์๋ NginX server๋ก๋ง ์์ฒญ ๊ฐ๋ฅ

### NginX

-   react app์ buildํ ์ ์ ํ์ผ serving
-   reverse proxy
-   docker

### GraphQL API Server

-   Apollo library ์ฌ์ฉ
-   docker

### DB Server

-   MySQL

## Deploy

http://101.101.162.177

## Insatll

1. React + NginX server docker image ์์ฑ ํ ์คํ

```
cd react-app
docker build -t react-nginx-server .
docker run -it -d -p 80:80 react-nginx-server
```

2. GraphQL API server docker image ์์ฑ ํ ์คํ

```
cd api-server
docker build -t graphql-api-server .
docker run -it -d -p 4000:4000 graphql-api-server
```

## Design

### DB table ๊ตฌ์กฐ

![DB ๊ตฌ์กฐ](./readme-images/db-schema.png)
[Link](https://dbdiagram.io/d/5da49c13ff5115114db53be8)

## Author

๐ค **Yuk Jisu**

-   Github: [@YukJiSoo](https://github.com/YukJiSoo)
