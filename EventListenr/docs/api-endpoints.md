# API Endpoints

#HTML API

## Root
  Prefix | Verb | URI Pattern | Controller#Action
- `root`   `GET`      `/`      `static_pages#root`

# JSON API
## Users
- `POST /api/users`
- `PATCH /api/users`

## Session
- `POST /api/users`
- `PATCH api/users`

## Events
- `GET /api/events`
- `POST /api/events`
- `GET /api/events/:id`     
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Tickets
- `GET /api/users/:id/tickets`
- `POST /api/events/:id/tickets`
- `GET /api/users/:id/tickets/:id`
- `DELETE /api/users/:id/tickets/:id`

### Bookmarks
- `GET /api/users/bookmarks`
- `POST /api/users/:user_id/bookmarks`
- `GET /api/users/bookmarks/:id`
- `DELETE /api/users/bookmarks`

### Categories
- `GET /api/categories`
- `POST /api/events/:id/categories` (uses event id to make new association to an event)
- `DELETE /api/categories/:id`