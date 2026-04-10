---
layout: ../../layouts/normal.astro
title: 'Async / Await'
---

# Async / Await

`async` and `await` are the modern way to work with Promises. They let you write asynchronous code that looks and reads like regular synchronous code — no more long chains of `.then()`.

## async function

Adding `async` before a function makes it return a Promise automatically.

```javascript
async function greet() {
  return 'Hello!'
}

greet().then(console.log) // 'Hello!'
```

## await

Inside an `async` function you can use `await` to pause and wait for a Promise to resolve. The value you get back is the resolved value — not the Promise itself.

```javascript
async function loadUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await response.json()
  console.log(user.name)
}

loadUser()
```

Compare this to the same code written with `.then()` chains — much easier to read.

## Error handling with try / catch

Wrap your `await` calls in a `try / catch` block to handle errors:

```javascript
async function loadUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    )
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }
    const user = await response.json()
    console.log(user.name)
  } catch (error) {
    console.log('Something went wrong:', error.message)
  }
}

loadUser(1)
```

## Promise.all

If you need to run several async operations at the same time and wait for all of them, use `Promise.all`. It runs them in parallel and resolves when every one of them has finished.

```javascript
async function loadMultiple() {
  const [user, post] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then((r) => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((r) => r.json()),
  ])

  console.log(user.name)
  console.log(post.title)
}

loadMultiple()
```

If **any** of the Promises rejects, `Promise.all` rejects immediately with that error.

## Promise.allSettled

`Promise.allSettled` is like `Promise.all` but it waits for **all** Promises to finish, even if some fail. Each result tells you whether it was fulfilled or rejected.

```javascript
async function tryAll() {
  const results = await Promise.allSettled([
    fetch('https://jsonplaceholder.typicode.com/users/1').then((r) => r.json()),
    fetch('https://bad-url-that-does-not-exist.xyz').then((r) => r.json()),
  ])

  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log('Success:', result.value)
    } else {
      console.log('Failed:', result.reason)
    }
  })
}

tryAll()
```

Use `Promise.allSettled` when you want all results regardless of failures.
