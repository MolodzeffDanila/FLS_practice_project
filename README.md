# FLS_practice_project

## Запуск backend через Docker
_(Для каждой команды требуются права суперпользователя)_

Для запуска Docker в корневой директории проекта выполните команду:

```
docker-compose up --build
```

Теперь backend доступен на http://localhost:8080

Документация Swagger доступна на http://localhost:8080/swagger/index.html

Для остановки работы всех контейнеров выполните команду:

```
docker-compose down -v
```
