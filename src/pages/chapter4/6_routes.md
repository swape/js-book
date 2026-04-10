---
layout: ../../layouts/normal.astro
title: 'Express Routes'
---

# Express Routes

In the webserver chapter we created a simple `GET /` route. Express supports all the standard HTTP methods, and you will need them when building a real API.

## HTTP methods recap

- `GET` : Read data
- `POST` : Create new data
- `PUT` : Replace existing data
- `PATCH` : Update part of existing data
- `DELETE` : Remove data

## Reading request data

Before we write the routes, we need to tell Express to parse JSON request bodies:

```javascript
import express from 'express'

const app = express()
app.use(express.json()) // parse JSON bodies
```

Without `express.json()`, `req.body` will be `undefined` in POST/PUT requests.

## POST — create

```javascript
app.post('/users', (req, res) => {
  const { name, email } = req.body

  // In a real app you would save to a database here
  console.log('Creating user:', name, email)

  res.status(201).json({ message: 'User created', name, email })
})
```

Test it with curl:

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

## URL parameters

Use `:paramName` in the route path to capture dynamic segments. Access them via `req.params`.

```javascript
app.get('/users/:id', (req, res) => {
  const { id } = req.params
  console.log('Fetching user with id:', id)
  res.json({ id })
})
```

## PUT — replace

```javascript
app.put('/users/:id', (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  // In a real app you would update the database record here
  res.json({ message: `User ${id} updated`, name, email })
})
```

## DELETE — remove

```javascript
app.delete('/users/:id', (req, res) => {
  const { id } = req.params

  // In a real app you would remove the record from the database here
  res.json({ message: `User ${id} deleted` })
})
```

## Full example

```javascript
import express from 'express'

const app = express()
app.use(express.json())

// In-memory store for this example
const users = []
let nextId = 1

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', (req, res) => {
  const user = { id: nextId++, ...req.body }
  users.push(user)
  res.status(201).json(user)
})

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex((u) => u.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' })
  }

  users[index] = { id, ...req.body }
  res.json(users[index])
})

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex((u) => u.id === id)

  if (index === -1) {
    return res.status(404).json({ error: 'User not found' })
  }

  const deleted = users.splice(index, 1)
  res.json(deleted[0])
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
```
