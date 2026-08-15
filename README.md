# Problem Setting Service

A backend service for managing competitive-programming style problems — create, list, fetch, and delete problems through a versioned REST API.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [API Reference](#api-reference)
- [Routing Flow](#routing-flow)

## Overview

The service exposes a versioned REST API under `/api/v1`, following a layered architecture that separates routing, request handling, and business logic.

## Architecture

Requests flow through four layers, in order:

```
Router (apiRouter) → Router (v1Router) → Router (problemRouter) → Controller → Service
```

| Layer | Responsibility |
|---|---|
| **apiRouter** | Entry point for all `/api` traffic |
| **v1Router** | Namespaces routes under API version `v1` |
| **problemRouter** | Defines problem-specific routes and maps them to controllers |
| **problemController** | Parses/validates requests, delegates to the service layer, formats responses |
| **Service layer** | Contains business logic and data access |

## API Reference

Base URL: `/api/v1/problems`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/ping` | Health check for the problems service |
| `POST` | `/` | Create a new problem |
| `GET` | `/` | Fetch all problems |
| `GET` | `/:id` | Fetch a single problem by ID |
| `DELETE` | `/:id` | Delete a problem by ID |

### Health Check

```
GET /api/v1/problems/ping
```

Returns a simple response confirming the problems service is reachable.

### Create a Problem

```
POST /api/v1/problems
```

Adds a new problem to the database. Request body should contain the problem's fields (e.g. title, statement, difficulty, tags).

### List Problems

```
GET /api/v1/problems/
```

Returns all problems currently stored.

### Get a Problem by ID

```
GET /api/v1/problems/:id
```

Returns a single problem matching the given `id`.

### Delete a Problem

```
DELETE /api/v1/problems/:id
```

Removes the problem matching the given `id` from the database.

## Routing Flow

Example: a request to `GET /api/v1/problems/ping` is resolved as follows:

1. The path starts with `/api`, so it enters **apiRouter**.
2. **apiRouter** forwards `/v1/...` to **v1Router**.
3. **v1Router** forwards `/problems/...` to **problemRouter**.
4. **problemRouter** matches `/ping` and invokes **problemController**.
5. **problemController** delegates to the **service layer** and returns the response.

```
/api/v1/problems/ping
   │
   ├─ /api      → apiRouter
   ├─ /v1       → v1Router
   ├─ /problems → problemRouter → problemController → service layer
   └─ /ping     → handled by problemController
```