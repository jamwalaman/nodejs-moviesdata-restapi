# NodeJS rest api
NodeJS rest api with auth

`GET /api/movies` - Gets a list of all movies
```json
[
  {
    "_id": "64dedb89295ebc62c1cf1da3",
    "user": "64c9c24e71928f0b3f18a083",
    "username": "aman",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "synopsis": "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
    "createdAt": "2023-08-18T02:46:33.610Z",
    "updatedAt": "2023-08-18T02:46:33.610Z",
    "__v": 0
  },
  {
    "_id": "64fbafb4afbd65e7e94753dd",
    "user": "64f6f699582334fc86b6c22a",
    "username": "smith",
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "synopsis": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    "createdAt": "2023-09-08T23:35:16.048Z",
    "updatedAt": "2023-09-08T23:35:16.048Z",
    "__v": 0
  }
]
```
`GET /api/movies/[movieID]` - Get one movie
```json
{
  "_id": "64dedb89295ebc62c1cf1da3",
  "user": "64c9c24e71928f0b3f18a083",
  "username": "aman",
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont",
  "synopsis": "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
  "createdAt": "2023-08-18T02:46:33.610Z",
  "updatedAt": "2023-08-18T02:46:33.610Z",
  "__v": 0
}
```

`POST /api/uses`
