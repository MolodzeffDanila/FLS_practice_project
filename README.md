# FLS_practice_project

## Запуск проекта через Docker
_(Для каждой команды требуются права суперпользователя)_

Для запуска Docker в корневой директории проекта выполните команду:

```
docker-compose up --build
```

Для запуска отдельных контейнеров, добавьте в команды название соответствующего сервиса (db, frontend, backend)

Пример для разработки backend'а:

```docker-compose up frontend db --build``` и локально запустить backend

Пример для разработки frontend'а:

```docker-compose up backend db --build``` и локально запустить frontend

---

Backend доступен на http://localhost:8080

Документация Swagger доступна на http://localhost:8080/swagger/index.html

Frontend  доступен на http://localhost:3000

DB доступна на http://localhost:3306

---

Для остановки работы всех контейнеров выполните команду:

```
docker-compose down -v
```
