---
layout: ../../layouts/normal.astro
title: 'Webserver'
---

# Webserver

A webserver is a computer program that serves requested HTML pages or files.

When you visit a website, your browser sends a request to a server and the server sends back a response with the requested data.

We don't have to write a webserver from scratch. We can use a library called `express` to create a webserver.

Let us start by installing `express` with npm.

Open up the terminal and type the following command:

```bash
npm install -D express
```

Now open up the `index.js` file and write some code.

```javascript
// index.js
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
```

Now go back to terminal and type the following command:

```bash
npm start
```

You should see the text "Server is running on http://localhost:3000" in your terminal. If you get some error, make sure you have installed `express` with npm and you have the `index.js` file in the root of your project. Make sure you have the `start` command in your `package.json` file.

Now open up your browser and go to `http://localhost:3000`. You should see the text "Hello World" in your browser.

Congratulations! You have created your first webserver with Node.js and Express.

Let us make another path called api and send some JSON data.

```javascript
// index.js
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
```

Now go back to terminal and type the following command:

```bash
npm start
```

Now open up your browser and go to `http://localhost:3000/api`. You should see the JSON data `{"message":"Hello World"}` in your browser.

You have created a webserver with Node.js and Express and sent some JSON data.

You can read more about [Express](https://expressjs.com/) on their website.
