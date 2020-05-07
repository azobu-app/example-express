# Example Express

- Production: https://example-express.azobu.app
- Heroku: https://azobu-example-express.herokuapp.com

## API Documentation

### Index

| HTTP  | Endpoint | Description              |
| ----- | -------- | ------------------------ |
| `GET` | `/`      | Show welcome message     |
| `GET` | `/hello` | Show hello world message |

### Users

| HTTP     | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/users`     | Get all users     |
| `GET`    | `/users/:id` | Get user by id    |
| `POST`   | `/users`     | Add new user      |
| `DELETE` | `/users`     | Delete all users  |
| `DELETE` | `/users/:id` | Delete user by id |
| `PUT`    | `/users/:id` | Update user by id |
| `PATCH`  | `/users/:id` | Patch user by id  |

### Todos

| HTTP     | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/todos`     | Get all todos     |
| `GET`    | `/todos/:id` | Get todo by id    |
| `POST`   | `/todos`     | Add new todo      |
| `DELETE` | `/todos`     | Delete all todos  |
| `DELETE` | `/todos/:id` | Delete todo by id |
| `PUT`    | `/todos/:id` | Update todo by id |

## Usage

### Installation

```sh
yarn
```

### Development

```sh
yarn dev
```

### Production

```sh
yarn start
```

## License

MIT
